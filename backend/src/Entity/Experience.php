<?php

namespace App\Entity;

use App\Repository\ExperienceRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ExperienceRepository::class)
 */
class Experience
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $posteExp;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $dateD;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $dateF;

    /**
     * @ORM\ManyToOne(targetEntity=cv::class)
     */
    private $relation;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPosteExp(): ?string
    {
        return $this->posteExp;
    }

    public function setPosteExp(string $posteExp): self
    {
        $this->posteExp = $posteExp;

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

    public function getDateD(): ?string
    {
        return $this->dateD;
    }

    public function setDateD(string $dateD): self
    {
        $this->dateD = $dateD;

        return $this;
    }

    public function getDateF(): ?string
    {
        return $this->dateF;
    }

    public function setDateF(string $dateF): self
    {
        $this->dateF = $dateF;

        return $this;
    }

    public function getRelation(): ?cv
    {
        return $this->relation;
    }

    public function setRelation(?cv $relation): self
    {
        $this->relation = $relation;

        return $this;
    }
}
