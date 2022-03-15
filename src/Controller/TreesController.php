<?php

namespace App\Controller;

use App\Entity\Trees;
use App\Form\TreesType;
use App\Repository\TreesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/trees')]
class TreesController extends AbstractController
{
    #[Route('/', name: 'trees_index', methods: ['GET'])]
    public function index(TreesRepository $treesRepository): Response
    {
        return $this->render('trees/index.html.twig', [
            'trees' => $treesRepository->findAll(),
        ]);
    }

    /*#[Route('/new', name: 'trees_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $tree = new Trees();
        $form = $this->createForm(TreesType::class, $tree);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($tree);
            $entityManager->flush();

            return $this->redirectToRoute('trees_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('trees/new.html.twig', [
            'tree' => $tree,
            'form' => $form,
        ]);
    }*/

    #[Route('/{id}', name: 'trees_show', methods: ['GET'])]
    public function show(Trees $tree): Response
    {
        return $this->render('trees/show.html.twig', [
            'tree' => $tree,
        ]);
    }

    /*#[Route('/{id}/edit', name: 'trees_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Trees $tree, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(TreesType::class, $tree);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('trees_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('trees/edit.html.twig', [
            'tree' => $tree,
            'form' => $form,
        ]);
    }*/

    /*#[Route('/{id}', name: 'trees_delete', methods: ['POST'])]
    public function delete(Request $request, Trees $tree, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$tree->getId(), $request->request->get('_token'))) {
            $entityManager->remove($tree);
            $entityManager->flush();
        }

        return $this->redirectToRoute('trees_index', [], Response::HTTP_SEE_OTHER);
    }*/
}
