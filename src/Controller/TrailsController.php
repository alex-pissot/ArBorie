<?php

namespace App\Controller;

use App\Entity\Trails;
use App\Form\TrailsType;
use App\Repository\TrailsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/trails')]
class TrailsController extends AbstractController
{
    #[Route('/', name: 'trails_index', methods: ['GET'])]
    public function index(TrailsRepository $trailsRepository): Response
    {
        return $this->render('trails/index.html.twig', [
            'trails' => $trailsRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'trails_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $trail = new Trails();
        $form = $this->createForm(TrailsType::class, $trail);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($trail);
            $entityManager->flush();

            return $this->redirectToRoute('trails_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('trails/new.html.twig', [
            'trail' => $trail,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'trails_show', methods: ['GET'])]
    public function show(Trails $trail): Response
    {
        return $this->render('trails/show.html.twig', [
            'trail' => $trail,
        ]);
    }

    #[Route('/{id}/edit', name: 'trails_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Trails $trail, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(TrailsType::class, $trail);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('trails_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('trails/edit.html.twig', [
            'trail' => $trail,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'trails_delete', methods: ['POST'])]
    public function delete(Request $request, Trails $trail, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$trail->getId(), $request->request->get('_token'))) {
            $entityManager->remove($trail);
            $entityManager->flush();
        }

        return $this->redirectToRoute('trails_index', [], Response::HTTP_SEE_OTHER);
    }
}
