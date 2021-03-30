<?php

namespace App\Entity;

use App\Repository\JobSeekerRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=JobSeekerRepository::class)
 */
class JobSeeker
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
    private $firstName;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $lastName;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $username;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $phoneNumber;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $avatar;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $fieldsOfInterests = [];

    /**
     * @ORM\OneToOne(targetEntity=CV::class, inversedBy="owner", cascade={"persist", "remove"})
     */
    private $cv;


    /**
     * @ORM\OneToMany(targetEntity=FeedBack::class, mappedBy="jobSeeker", orphanRemoval=true)
     */
    private $feedbacks;

    /**
     * @ORM\ManyToMany(targetEntity=Test::class)
     */
    private $score;

    public function __construct()
    {
        $this->feedbacks = new ArrayCollection();
        $this->score = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getPhoneNumber(): ?string
    {
        return $this->phoneNumber;
    }

    public function setPhoneNumber(string $phoneNumber): self
    {
        $this->phoneNumber = $phoneNumber;

        return $this;
    }

    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(string $avatar): self
    {
        $this->avatar = $avatar;

        return $this;
    }

    public function getFieldsOfInterests(): ?array
    {
        return $this->fieldsOfInterests;
    }

    public function setFieldsOfInterests(?array $fieldsOfInterests): self
    {
        $this->fieldsOfInterests = $fieldsOfInterests;

        return $this;
    }

    public function getCv(): ?CV
    {
        return $this->cv;
    }

    public function setCv(?CV $cv): self
    {
        $this->cv = $cv;

        return $this;
    }



    public function getRate(): ?Rate
    {
        return $this->rate;
    }

    public function setRate(?Rate $rate): self
    {
        $this->rate = $rate;

        return $this;
    }

    /**
     * @return Collection|FeedBack[]
     */
    public function getFeedbacks(): Collection
    {
        return $this->feedbacks;
    }

    public function addFeedback(FeedBack $feedback): self
    {
        if (!$this->feedbacks->contains($feedback)) {
            $this->feedbacks[] = $feedback;
            $feedback->setJobSeeker($this);
        }

        return $this;
    }

    public function removeFeedback(FeedBack $feedback): self
    {
        if ($this->feedbacks->removeElement($feedback)) {
            // set the owning side to null (unless already changed)
            if ($feedback->getJobSeeker() === $this) {
                $feedback->setJobSeeker(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Test[]
     */
    public function getScore(): Collection
    {
        return $this->score;
    }

    public function addScore(Test $score): self
    {
        if (!$this->score->contains($score)) {
            $this->score[] = $score;
        }

        return $this;
    }

    public function removeScore(Test $score): self
    {
        $this->score->removeElement($score);

        return $this;
    }
}
