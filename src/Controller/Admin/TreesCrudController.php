<?php

namespace App\Controller\Admin;

use App\Entity\Trees;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class TreesCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Trees::class;
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name'),
            TextEditorField::new('description'),
            DateField::new('planting_year'),

        ];
    }

}
