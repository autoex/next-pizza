import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <Title
        text='Filters'
        size='sm'
        className='mb-5 font-bold'
      />

      <div className='flex flex-col gap-4'>
        <FilterCheckbox
          value='1'
          text='Custom pizza'
          
        />
        <FilterCheckbox
          value='2'
          text='New'
        />
      </div>
    </div>
  );
};
