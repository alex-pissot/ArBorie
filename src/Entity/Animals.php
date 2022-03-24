<?php

namespace App\Entity;

use App\Repository\AnimalsRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity(repositoryClass: AnimalsRepository::class)]

/**
 * @Vich\Uploadable
 */
class Animals
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $name;

    #[ORM\Column(type: 'string', length: 500)]
    private $family;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $trees_associed;

    #[ORM\Column(type: 'text')]
    private $description;

    #[ORM\Column(type: 'string', length: 1000)]
    private $image;
    /**
     * @Vich\UploadableField(mapping="animals_images", fileNameProperty="image")
     * @var File|null
     */
    private $imageFile;


    /**
     * @ORM\Column(type="datetime")
     * @var DateTime
     */
    private $updatedAt;

    #[ORM\Column(type: 'string', length: 1000, nullable: true)]
    private $image_2;
    /**
     * @Vich\UploadableField(mapping="animals_images", fileNameProperty="image_2")
     * @var File|null
     */
    private $imageFile_2;

    #[ORM\Column(type: 'string', length: 1000, nullable: true)]
    private $image_3;
    /**
     * @Vich\UploadableField(mapping="animals_images", fileNameProperty="image_3")
     * @var File|null
     */
    private $imageFile_3;

    #[ORM\Column(type: 'string', length: 1000, nullable: true)]
    private $image_4;
    /**
     * @Vich\UploadableField(mapping="animals_images", fileNameProperty="image_4")
     * @var File|null
     */
    private $imageFile_4;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getFamily(): ?string
    {
        return $this->family;
    }

    public function setFamily(string $family): self
    {
        $this->family = $family;

        return $this;
    }

    public function getTreesAssocied(): ?string
    {
        return $this->trees_associed;
    }

    public function setTreesAssocied(?string $trees_associed): self
    {
        $this->trees_associed = $trees_associed;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    /**
     * @param File|null $imageFile
     * @return $this
     */
    public function setImageFile(File $imageFile = null): self
    {
        $this->imageFile = $imageFile;
        if (null !== $imageFile) {
            $this->updatedAt = new DateTime();
        }
        return $this;
    }


    public function getImage2(): ?string
    {
        return $this->image_2;
    }

    public function setImage2(?string $image_2): self
    {
        $this->image_2 = $image_2;

        return $this;
    }

    public function getImageFile2(): ?File
    {
        return $this->imageFile_2;
    }

    /**
     * @param File|null $imageFile_2
     * @return $this
     */
    public function setImageFile2(File $imageFile_2 = null): self
    {
        $this->imageFile_2 = $imageFile_2;
        if (null !== $imageFile_2) {
            $this->updatedAt = new DateTime();
        }
        return $this;
    }

    public function getImage3(): ?string
    {
        return $this->image_3;
    }

    public function setImage3(?string $image_3): self
    {
        $this->image_3 = $image_3;

        return $this;
    }

    public function getImageFile3(): ?File
    {
        return $this->imageFile_3;
    }

    /**
     * @param File|null $imageFile_3
     * @return $this
     */
    public function setImageFile3(File $imageFile_3 = null): self
    {
        $this->imageFile_3 = $imageFile_3;
        if (null !== $imageFile_3) {
            $this->updatedAt = new DateTime();
        }
        return $this;
    }

    public function getImage4(): ?string
    {
        return $this->image_4;
    }

    public function setImage4(?string $image_4): self
    {
        $this->image_4 = $image_4;

        return $this;
    }

    public function getImageFile4(): ?File
    {
        return $this->imageFile_4;
    }

    /**
     * @param File|null $imageFile_4
     * @return $this
     */
    public function setImageFile4(File $imageFile_4 = null): self
    {
        $this->imageFile_4 = $imageFile_4;
        if (null !== $imageFile_4) {
            $this->updatedAt = new DateTime();
        }
        return $this;
    }
}
