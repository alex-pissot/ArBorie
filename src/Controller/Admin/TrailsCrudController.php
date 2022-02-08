<?php

namespace App\Controller\Admin;

use App\Entity\Trails;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class TrailsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Trails::class;
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
