<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/api/logout", name="logout",methods={"POST"})
     */
    public function logout(): Response
    {
        unset($_COOKIE['BEARER']);
        unset($_COOKIE['REFRESH_TOKEN']);
        setcookie("BEARER", '', time() - 3000, "/");
        setcookie("REFRESH_TOKEN", '', time() - 3000, "/");

        return $this->json([
            'message' => 'Success'

        ], Response::HTTP_OK);
    }
}