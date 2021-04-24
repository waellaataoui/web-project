<?php

namespace App\Repository;

use App\Entity\Post;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Post|null find($id, $lockMode = null, $lockVersion = null)
 * @method Post|null findOneBy(array $criteria, array $orderBy = null)
 * @method Post[]    findAll()
 * @method Post[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PostRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Post::class);
    }

    /**
     * @return Post[] Returns an array of Post objects
     */

    public function findPriceLowerThen($price)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.price <= :price')
            ->setParameter('price', $price)
            ->orderBy('p.price', 'ASC')
            ->getQuery()
            ->getResult();
    }


    /**
     * @return Post[] Returns an array of Post objects
     */

    public function findPriceHigherThen($price)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.price >= :price')
            ->setParameter('price', $price)
            ->orderBy('p.price', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @return Post[] Returns an array of Post objects
     */

    public function findPriceHigherThenWithTag($price, $tags)
    {
        $qb = $this->createQueryBuilder('p');
        $valueNo = 0;
        foreach ($tags as $value) {
            $qb->andWhere('p.tags like :value' . $valueNo);
            $qb->setParameter('value' . $valueNo, '%' . $value . '%', 'string');
            $valueNo++;
        }

        return $qb
            ->andWhere('p.price >= :price ')
            ->setParameter('price', $price)
            ->orderBy('p.price', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @return Post[] Returns an array of Post objects
     */

    public function findPriceLowerThenWithTag($price, $tags)
    {
        $qb = $this->createQueryBuilder('p');
        $valueNo = 0;
        foreach ($tags as $value) {
            $qb->andWhere('p.tags like :value' . $valueNo);
            $qb->setParameter('value' . $valueNo, '%' . $value . '%', 'string');
            $valueNo++;
        }

        return $qb
            ->andWhere('p.price <= :price ')
            ->setParameter('price', $price)
            ->orderBy('p.price', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * @return Post[] Returns an array of Post objects
     */

    public function findByTag($tags)
    {
        $qb = $this->createQueryBuilder('p');
        $valueNo = 0;
        foreach ($tags as $value) {
            $qb->andWhere('p.tags like :value' . $valueNo);
            $qb->setParameter('value' . $valueNo, '%' . $value . '%', 'string');
            $valueNo++;
        }

        return $qb
            ->orderBy('p.id', 'ASC')
            ->getQuery()
            ->getResult();
    }


    // /**
    //  * @return Post[] Returns an array of Post objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Post
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
