<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use App\Entity\Employeur;
use App\Form\EmployeurType;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;


/**
 * @Route("api", name="api_")
 */
class EmployerController extends AbstractFOSRestController
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
     * @Route("/employeurs", name="getEmployer",methods={"GET"})
     *  @return JsonResponse
     */

    public function getEmployeurAction()
    {
        $repository = $this->getDoctrine()->getRepository(Employeur::class);
        $Employeurs = $repository->findall();
        return $this->handleView($this->view($Employeurs)); //returns json
    }
    /**
     * @Route("/employeurs ", name="newEmployeur", methods={"POST"})
     * @return Response
     * @throws \Exception
     */
    public function postEmployeurAction(Request $request)
    {
        $employeur = new Employeur();
        $form = $this->createForm(EmployeurType::class, $employeur);
        $data = json_decode($request->getContent(), true);
        $response = [];
        $form->submit($data);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getConnection()->beginTransaction();
            try {
                $employeur->setPassword(
                    $this->passwordEncoder->encodePassword($employeur, $employeur->getPassword())
                );
                $em = $this->getDoctrine()->getManager();
                $em->persist($employeur);
                $em->flush();
                $this->getDoctrine()->getConnection()->commit();
                return $this->handleView($this->view($employeur, Response::HTTP_CREATED));
            } catch (\Exception $e) {
                // throw $e;
                $this->getDoctrine()->getConnection()->rollback();
                if (str_contains($e->getMessage(), "unique")) {
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
    // /**
    //  * @Route("/employeurs ", name="newEmployeur", methods={"PATCH"})
    //  * @return Response
    //  */
    // public function updateEmployeurProfile(Request $request)
    // {

    //     $employeur = $this->getUser();
    //     $response = [];
    //     dump($employeur);
    //     $this->getDoctrine()->getRepository(Employeur::class)->
    //     // $IdEmployeur = $request->get('id');

    //     // $employeur = $this->getDoctrine()->getRepository(Employeur::class)->findOneBy(['id' => $IdEmployeur]);

    //     // if (!$employeur) {
    //     //     throw new NotFoundHttpException('Employeur not found');
    //     // }

    //     $form = $this->createForm(EmployeurType::class, $employeur);
    //     $form->handleRequest($request);
    //     if ($form->isSubmitted() && $form->isValid()) {

    //         /** @var Employeur $employeur */
    //         $employeur = $form->getData();

    //         $this->getDoctrine()->getManager()->persist($employeur);
    //         $this->getDoctrine()->getManager()->flush();

    //         return $this->handleView($this->view($employeur, Response::HTTP_OK));
    //     } else {
    //         $errors = [];
    //         foreach ($form->getErrors(true, true) as $formError) {
    //             $errors[] = $formError->getMessage();
    //         }
    //         $response["errors"] = $errors;
    //         // dump($response);
    //         return $this->handleView($this->view($response, Response::HTTP_BAD_REQUEST));
    //     }
    // }
    /**
     * @Route("/employeurs", name="update_employeur", methods={"PUT"})
     */
    public function update(Request $request): JsonResponse
    {
        $employeur = $this->getUser();
        $data = json_decode($request->getContent(), true);
        //this works even if its underlined with red
        $this->getDoctrine()->getRepository(Employeur::class)->updateEmployeur($employeur, $data);

        return new JsonResponse(['status' => 'customer updated!']);
    }
}
