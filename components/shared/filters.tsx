import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';

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
      <div className=' mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className=' font-bold mb-3'>Price from to:</p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={200}
            defaultValue={0}
          />
          <Input
            type='number'
            placeholder='0'
            min={100}
            max={200}
            defaultValue={150}
          />
          
        </div>
        
        <RangeSlider min={0} max={200} step={10} value={[0,200]} />
        
      </div>
    </div>
  );
};
