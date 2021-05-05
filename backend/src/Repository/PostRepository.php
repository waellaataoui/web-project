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
    public function findByParams($min,  $max, $tag = null, string $location = null, string $category = null, string $jobType = null)

    {

        //  dump(strtolower($category));
        // dump(empty($min));

        $result = $this->createQueryBuilder('p');
        if (!empty($min)) {
            $result = $result->andWhere('p.price >= :min')->setParameter('min', $min);
        }
        if (!empty($max)) {
            $result = $result->andWhere('p.price <= :max')->setParameter('max', $max);
        }
        if (!empty($location)) {
            $result = $result->andWhere('p.location = :loc')->setParameter('loc', strtolower($location));
        }
        if (!empty($jobType)) {
            $result = $result->andWhere('p.jobType = :type')->setParameter('type', $jobType);
        }
        if (!empty($category)) {

            $result = $result->andWhere('p.category like :cate')->setParameter('cate', '%' . strtolower($category) . '%');
        }
        if ((!empty($max)) && count($tag) > 0) {
            $valueNo = 0;
            foreach ($tag as $value) {
                $result->andWhere('p.tags like :value' . $valueNo);
                $result->setParameter('value' . $valueNo, '%' . $value . '%', 'string');
                $valueNo++;
            }
            // $result = $result->andWhere('p.tags IN (:tag)')->setParameter('tag', $tag);
            //$result = $result->andWhere($result->expr()->like('p.tags', ':tag'))->setParameter('tag', '%' . $tag . '%');
        }
        //dump($result->getQuery());
        $result = $result
            ->orderBy('p.price', 'ASC')
            ->getQuery()
            ->getResult();


        return $result;
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
