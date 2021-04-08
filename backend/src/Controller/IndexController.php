<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/index", name="index")
     */
    // public function index(): Response
    // {
    //     return $this->json([
    //         'message' => 'Welcome to your new controller!',
    //         'path' => 'src/Controller/IndexController.php',
    //     ]);
    // }
    // try to create a jobseeker : mix between 2 repos, use transaction
    // and use Form type (without cv_id )  for validation then .setCv() 
    // then save cv and user
}
