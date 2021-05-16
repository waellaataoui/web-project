<?php

namespace App\Entity;

use App\Repository\ExperienceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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
     * @ORM\OneToMany(targetEntity=CV::class, mappedBy="relation", orphanRemoval=true)
     */
    private $exper;

    /**
     * @ORM\ManyToOne(targetEntity=CV::class, inversedBy="RELATION")
     */
    private $i;

    public function __construct()
    {
        $this->exper = new ArrayCollection();
    }


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

    /**
     * @return Collection|CV[]
     */
    public function getExper(): Collection
    {
        return $this->exper;
    }

    public function addExper(CV $exper): self
    {
        if (!$this->exper->contains($exper)) {
            $this->exper[] = $exper;
            $exper->setRelation($this);
        }

        return $this;
    }

    public function removeExper(CV $exper): self
    {
        if ($this->exper->removeElement($exper)) {
            // set the owning side to null (unless already changed)
            if ($exper->getRelation() === $this) {
                $exper->setRelation(null);
            }
        }

        return $this;
    }

    public function getI(): ?CV
    {
        return $this->i;
    }

    public function setI(?CV $i): self
    {
        $this->i = $i;

        return $this;
    }

}
