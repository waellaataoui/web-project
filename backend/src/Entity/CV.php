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
     * @ORM\OneToMany(targetEntity=Skill::class, mappedBy="cv")
     */
    private $skills;


    /**
     * @ORM\OneToMany(targetEntity=Formation::class, mappedBy="cv")
     */
    private $forma;
        /**
     * @ORM\OneToMany(targetEntity=Experience::class, mappedBy="cv")
     */
    private $exper;

    /**
     * @ORM\OneToMany(targetEntity=Langue::class, mappedBy="cv")
     */
    private $lang;




    public function __construct()
    {
        $this->skills = new ArrayCollection();
        $this->forma = new ArrayCollection();
        $this->lang = new ArrayCollection();
        $this->exper = new ArrayCollection();
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
     * @return Collection|Skill[]
     */
    public function getSkills(): Collection
    {
        return $this->skills;
    }

    public function addSkill(Skill $skill): self
    {
        if (!$this->skills->contains($skill)) {
            $this->skills[] = $skill;
            $skill->setCv($this);
        }

        return $this;
    }

    public function removeSkill(Skill $skill): self
    {
        if ($this->skills->removeElement($skill)) {
            // set the owning side to null (unless already changed)
            if ($skill->getCv() === $this) {
                $skill->setCv(null);
            }
        }

        return $this;
    }
        /**
     * @return Collection|Experience[]
     */
    public function getExper(): Collection
    {
        return $this->exper;
    }

    public function addExp(Experience $exp): self
    {
        if (!$this->exper->contains($exp)) {
            $this->exper[] = $exp;
            $exp->setCv($this);
        }

        return $this;
    }

    public function removeExperience(Experience $exp): self
    {
        if ($this->exper->removeElement($exp)) {
            // set the owning side to null (unless already changed)
            if ($exp->getCv() === $this) {
                $exp->setCv(null);
            }
        }

        return $this;
    }


}
