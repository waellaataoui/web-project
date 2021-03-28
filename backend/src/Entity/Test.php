<?php

namespace App\Entity;

use App\Repository\TestRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TestRepository::class)
 */
class Test
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="json")
     */
    private $question = [];

    /**
     * @ORM\ManyToOne(targetEntity=skill::class, inversedBy="notetest")
     */
    private $relation;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuestion(): ?array
    {
        return $this->question;
    }

    public function setQuestion(array $question): self
    {
        $this->question = $question;

        return $this;
    }

    public function getRelation(): ?skill
    {
        return $this->relation;
    }

    public function setRelation(?skill $relation): self
    {
        $this->relation = $relation;

        return $this;
    }
}
