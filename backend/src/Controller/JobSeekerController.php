<?php

namespace App\Controller;

use App\Entity\CV;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

use FOS\RestBundle\Controller\AbstractFOSRestController;
use App\Entity\JobSeeker;
use App\Form\JobSeekerType;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("api", name="api_")
 */
class JobSeekerController extends AbstractFOSRestController
{
  /**
   * @var UserPasswordEncoderInterface
   */
  private $passwordEncoder;

  public function __construct(UserPasswordEncoderInterface $passwordEncoder)
  {
    $this->passwordEncoder = $passwordEncoder;
  }

  /**
   * @Route("/jobseekers", name="getJobSeekers" ,methods={"GET"})
   *  @return JsonResponse
   */

  public function getJobSeekerAction()
  {
    $repository = $this->getDoctrine()->getRepository(JobSeeker::class);
    $JobSeekers = $repository->findall();
    return $this->handleView($this->view($JobSeekers)); //returns json
  }
  /**
   * @Route("/jobseekers", name="newJobSeeker", methods={"POST"})
   * @return Response
   * @throws \Exception
   */
  public function postJobSeekerAction(Request $request)
  {
    $jobSeeker = new JobSeeker();
    $cv = new CV();
    $form = $this->createForm(JobSeekerType::class, $jobSeeker);
    $data = json_decode($request->getContent(), true);
    $response = [];
    $form->submit($data);
    if ($form->isSubmitted() && $form->isValid()) {
      $this->getDoctrine()->getConnection()->beginTransaction();
      try {
        $jobSeeker->setCv($cv);
        $jobSeeker->setPassword(
          $this->passwordEncoder->encodePassword($jobSeeker, $jobSeeker->getPassword())
        );
        $em = $this->getDoctrine()->getManager();
        $em->persist($jobSeeker);
        $em->persist($cv);
        $em->flush();
        $this->getDoctrine()->getConnection()->commit();
        return $this->handleView($this->view($jobSeeker, Response::HTTP_CREATED));
      } catch (\Exception $e) {
        // throw $e;
        $this->getDoctrine()->getConnection()->rollback();
        if (str_contains($e->getMessage(), "email")) {
          $response["errors"] = ["email already in use"];
          return $this->handleView($this->view($response, Response::HTTP_BAD_REQUEST));
        } else
          $response["errors"] = ["server error"];

        return $this->handleView($this->view($response, Response::HTTP_INTERNAL_SERVER_ERROR));
      }
    } else {
      $errors = [];
      foreach ($form->getErrors(true, true) as $formError) {
        $errors[] = $formError->getMessage();
      }
      $response["errors"] = $errors;
      return $this->handleView($this->view($response, Response::HTTP_INTERNAL_SERVER_ERROR));
    }
  }

  public function updateJobSeekerProfile(Request $request)
  {
      
      // $jobSeeker = $this->getUser();

      $IdJobSeeker = $request->get('id');

      $jobSeeker = $this->getDoctrine()->getRepository(JobSeeker::class)->findOneBy(['id' => $IdJobSeeker]);

      if (!$jobSeeker) {
          throw new NotFoundHttpException('jobSeeker not found');
      }

      

      $form = $this->buildForm(JobSeekerType::class, $jobSeeker, [
          'method' => $request->getMethod(),
      ]);

      $form->handleRequest($request);

      if (!$form->isSubmitted() || !$form->isValid()) {
          return $this->respond($form, Response::HTTP_BAD_REQUEST);
      }

      /** @var JobSeeker $jobSeeker */
      $jobSeeker = $form->getData();

      $this->getDoctrine()->getManager()->persist($jobSeeker);
      $this->getDoctrine()->getManager()->flush();

      return $this->respond($jobSeeker);
  }
}
