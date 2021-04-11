<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Validator\Constraints\NotNull;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\OptionsResolver\OptionsResolver;
use App\Entity\JobSeeker;
use App\Entity\Post;

class PostType extends AbstractType
{
  public function buildForm(FormBuilderInterface $builder, array $options)
  {
    $builder
      ->add('title', TextType::class, [
        'constraints' => [
          new NotNull([
            'message' => 'title cannot be blank',
          ]),
          new Length([
            'min' => 5,
            'minMessage' => 'password is too short',
          ]),
        ]
      ])
      ->add('description', TextType::class, [
        'constraints' => [
          new NotNull([
            'message' => 'description cannot be blank',
          ]),
          new Length([
            'min' => 20,
            'minMessage' => 'description must be at least 100 caracters',
          ]),
        ]
      ])
      ->add('save', SubmitType::class);
  }
  public function configureOptions(OptionsResolver $resolver)
  {
    $resolver->setDefaults(array(
      'data_class' => Post::class,
      'csrf_protection' => false
    ));
  }
}
