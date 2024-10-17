'use client';
import React, { useEffect } from 'react';
import { useIntersection } from 'react-use';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';
import { useCategoryStore } from '@/store/category';

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  categoryId,
  className,
  listClassName,
}) => {
  const setActiveCategory = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategory(categoryId);
    }
  }, [categoryId, title, intersection?.isIntersecting]);
  return (
    <div
      className={className}
      id={title}
      ref={intersectionRef}>
      <Title
        text={title}
        size='lg'
        className='font-extrabold mb-5'
      />

      <div className={cn('grid grid-cols-3 gap-[50px]', className)}>
        {items.map((product, id) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
