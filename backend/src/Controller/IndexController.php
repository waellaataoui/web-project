<?php

namespace App\Controller;

use FOS\RestBundle\Controller\AbstractFOSRestController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("api", name="api_")
 */
class IndexController extends AbstractFOSRestController
{
    /**
     * @Route("/logout", name="logout",methods={"POST"})
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
    /**
     * @Route("/me", name="me")
     */
    public function checkAuth(): Response
    {
        $user = $this->getUser();

        if (!$user) {
            return $this->json([
                'message' => 'not logged in'

            ], Response::HTTP_UNAUTHORIZED);
        }

        return $this->handleView($this->view($user, Response::HTTP_OK));
    }
}
