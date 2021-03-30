<?php

namespace App\Entity;

use App\Repository\SkillRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SkillRepository::class)
 */
class Skill
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
    private $name;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $testCount;

    /**
     * @ORM\OneToMany(targetEntity=Test::class, mappedBy="relation")
     */
    private $notetest;

    /**
     * @ORM\ManyToOne(targetEntity=Cv::class, inversedBy="relation")
     */
    private $skills;

    public function __construct()
    {
        $this->notetest = new ArrayCollection();
    }

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

    public function getTestCount(): ?int
    {
        return $this->testCount;
    }

    public function setTestCount(?int $testCount): self
    {
        $this->testCount = $testCount;

        return $this;
    }

    /**
     * @return Collection|Test[]
     */
    public function getNotetest(): Collection
    {
        return $this->notetest;
    }

    public function addNotetest(Test $notetest): self
    {
        if (!$this->notetest->contains($notetest)) {
            $this->notetest[] = $notetest;
            $notetest->setRelation($this);
        }

        return $this;
    }

    public function removeNotetest(Test $notetest): self
    {
        if ($this->notetest->removeElement($notetest)) {
            // set the owning side to null (unless already changed)
            if ($notetest->getRelation() === $this) {
                $notetest->setRelation(null);
            }
        }

        return $this;
    }

    public function getSkills(): ?Cv
    {
        return $this->skills;
    }

    public function setSkills(?Cv $skills): self
    {
        $this->skills = $skills;

        return $this;
    }
}
