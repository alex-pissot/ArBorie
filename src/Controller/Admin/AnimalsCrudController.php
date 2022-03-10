<?php

namespace App\Controller\Admin;

use App\Entity\Animals;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use Doctrine\DBAL\Types\TextType;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use App\Field\VichImageField;
use SebastianBergmann\CodeCoverage\Report\Text;
use Vich\UploaderBundle\Form\Type\VichImageType;

class AnimalsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Animals::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name'),
            TextEditorField::new('description'),
            TextField::new('family'),
            TextField::new('trees_associed'),
            TextField::new('imageFile')
                ->setFormType(VichImageType::class)->hideOnIndex(),
            TextField::new('imageFile_2')
                ->setFormType(VichImageType::class)->hideOnIndex(),
            TextField::new('imageFile_3')
                ->setFormType(VichImageType::class)->hideOnIndex(),
            TextField::new('imageFile_4')
                ->setFormType(VichImageType::class)->hideOnIndex(),
        ];
    }
}
