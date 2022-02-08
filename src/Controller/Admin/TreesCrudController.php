<?php

namespace App\Controller\Admin;

use App\Entity\Trees;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class TreesCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Trees::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
