<?php

namespace App\Controller;

use App\Entity\Animals;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\AnimalsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;


class AnimalsController extends AbstractController
{
    #[Route('/animals', name: 'app_animals')]
    public function index(AnimalsRepository $animalsRepository): Response
    {
        return $this->render('animals/index.html.twig', [
            'animals' => $animalsRepository->findAll(),
        ]);
    }

    #[Route('/{id}', name: 'animals_show', methods: ['GET'])]
    public function show(Animals $animal): Response
    {
        return $this->render('animals/show.html.twig', [
            'animal' => $animal,
        ]);
    }
}
