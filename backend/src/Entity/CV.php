<?php

namespace App\Entity;

use App\Repository\CVRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CVRepository::class)
 */
class CV
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity=JobSeeker::class, mappedBy="cv", cascade={"persist", "remove"})
     */
    private $owner;

    /**
     * @ORM\OneToMany(targetEntity=skill::class, mappedBy="skills")
     */
    private $relation;

    /**
     * @ORM\OneToMany(targetEntity=formation::class, mappedBy="formation")
     */
    private $OneToMany;

    public function __construct()
    {
        $this->relation = new ArrayCollection();
        $this->OneToMany = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOwner(): ?JobSeeker
    {
        return $this->owner;
    }

    public function setOwner(?JobSeeker $owner): self
    {
        // unset the owning side of the relation if necessary
        if ($owner === null && $this->owner !== null) {
            $this->owner->setCv(null);
        }

        // set the owning side of the relation if necessary
        if ($owner !== null && $owner->getCv() !== $this) {
            $owner->setCv($this);
        }

        $this->owner = $owner;

        return $this;
    }

    /**
     * @return Collection|skill[]
     */
    public function getRelation(): Collection
    {
        return $this->relation;
    }

    public function addRelation(skill $relation): self
    {
        if (!$this->relation->contains($relation)) {
            $this->relation[] = $relation;
            $relation->setSkills($this);
        }

        return $this;
    }

    public function removeRelation(skill $relation): self
    {
        if ($this->relation->removeElement($relation)) {
            // set the owning side to null (unless already changed)
            if ($relation->getSkills() === $this) {
                $relation->setSkills(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|formation[]
     */
    public function getOneToMany(): Collection
    {
        return $this->OneToMany;
    }

    public function addOneToMany(formation $oneToMany): self
    {
        if (!$this->OneToMany->contains($oneToMany)) {
            $this->OneToMany[] = $oneToMany;
            $oneToMany->setFormation($this);
        }

        return $this;
    }

    public function removeOneToMany(formation $oneToMany): self
    {
        if ($this->OneToMany->removeElement($oneToMany)) {
            // set the owning side to null (unless already changed)
            if ($oneToMany->getFormation() === $this) {
                $oneToMany->setFormation(null);
            }
        }

        return $this;
    }
}
