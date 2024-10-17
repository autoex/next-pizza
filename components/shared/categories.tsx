'use client';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React from 'react';

interface Props {
  className?: string;
}

const categories = [
  { id: 1, name: 'Pizzas' },
  { id: 2, name: 'Combos' },
  { id: 3, name: 'Snacks' },
  { id: 4, name: 'Cocktails' },
  { id: 5, name: 'Coffee' },
  { id: 6, name: 'Drinks' },
  { id: 7, name: 'Desserts' },
  { id: 8, name: 'Desserts' },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const setActiveCategory = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn(
        ' inline-flex gap-1 bg-gray-50 p-1 rounded-2xl',
        className,
      )}>
      {categories.map((category) => (
        <a
        href={`#${category.name}`}
          key={category.id}
          className={cn(
            ' flex items-center font-bold h-11 rounded-2xl px-5',
            setActiveCategory === category.id &&
              ' bg-white shadow-md shadow-gray-200 text-primary',
          )}>
          <button>{category.name}</button>
        </a>
      ))}
    </div>
  );
};
