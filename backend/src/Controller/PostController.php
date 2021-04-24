<?php

namespace App\Controller;

use App\Entity\Employeur;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use FOS\RestBundle\Controller\AbstractFOSRestController;

use App\Entity\Post;
use App\Form\PostType;
use App\Repository\PostRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\Query\ResultSetMapping;


/**
 * @Route("api", name="api_")
 */
class PostController extends AbstractFOSRestController
{

    /**
     * @Route("/posts", name="getPosts" ,methods={"GET"})
     *  @return JsonResponse
     */

    public function getPostsAction()
    {   // ahaya l fonction
        $repository = $this->getDoctrine()->getRepository(Post::class);
        // nedi lena l fonction mta3 repository tnjm ta3ml wa7da jdida
        //sameha findWithFilters mithel w a3taha l request->query lkol comme parametre
        //w fel fonction heki traka7 les tests mta3ek
        $posts = $repository->findall();
        return $this->handleView($this->view($posts)); //returns json
    }


    /**
     * @Route("/deletepost", name="DeletePostsAction" ,methods={"DELETE"})
     *  @return JsonResponse
     */

    public function DeletePostsAction()
    {
        //mana3rach bil id wela bil get user courant
    }

    /**
     * @Route("/post/{tag}", name="getPostByTag" ,methods={"GET"})
     *  @return JsonResponse
     */
    public function getPostByTag(String $tag, PostRepository $repository)
    {
        $post = $repository->findByTag($tag);
        return $this->handleView($this->view($post)); //returns json
    }

    /**
     * @Route("/postsHight", name="getPostHighThenPriceWithTag" ,methods={"GET"})
     *  @return JsonResponse
     */
    public function getPostHighThenPriceWithTag(Request $request, PostRepository $repository)
    {
        $tag = explode(",", $request->query->get('tag'));

        $price =  $request->query->get('price');

        if (!$tag && $price) {
            $postsResult = $repository->findPriceHigherThen($price);
        }
        if ($tag && !$price) {
            $postsResult = $repository->findByTag($tag);
        }
        if ($tag && $price) {
            $postsResult = $repository->findPriceHigherThenWithTag($price, $tag);
        }
        return $this->handleView($this->view($postsResult)); //returns json

    }

    /**
     * @Route("/postsLow", name="getPostLowThenPriceWithTag" ,methods={"GET"})
     *  @return JsonResponse
     */
    public function getPostLowThenPriceWithTag(Request $request, PostRepository $repository)
    {

        $tag = explode(",", $request->query->get('tag'));

        $price =  $request->query->get('price');

        if (!$tag && $price) {
            $postsResult = $repository->findPriceLowerThen($price);
        }
        if ($tag && !$price) {
            $postsResult = $repository->findByTag($tag);
        }
        if ($tag && $price) {
            $postsResult = $repository->findPriceLowerThenWithTag($price, $tag);
        }
        return $this->handleView($this->view($postsResult)); //returns json
    }



    /**
     * @Route("/post", name="newPost", methods={"POST"})
     * @return Response
     * @throws \Exception
     */
    public function postEmployerAction(Request $request) //post by employer
    {
        $post = new Post();

        $form = $this->createForm(PostType::class, $post);
        $data = json_decode($request->getContent(), true);
        $response = [];
        $form->submit($data);
        if ($form->isSubmitted() && $form->isValid()) {

            try {
                $post->setEmployeur($this->getUser());
                if ($data["tags"])   $post->setTags($data["tags"]);
                $em = $this->getDoctrine()->getManager();
                $em->persist($post);
                $em->flush();
                return $this->handleView($this->view($post, Response::HTTP_CREATED));
            } catch (\Exception $e) {
                throw $e;
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
}
