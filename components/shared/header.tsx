import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import { Button, Input } from '../ui';
import { Container } from './';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn(' border border-b', className)}>
      <Container className='flex items-center justify-between py-8'>
        {/* Left Side */}

        <div className=' flex items-center gap-4'>
          <Image
            src={'/logo.png'}
            width={35}
            height={35}
            alt='Pizza'
          />
          <div>
            <h1 className=' text-2xl uppercase font-black'>Next Pizza</h1>
            <p className=' text-sm text-gray-400 leading-3'>
              just fucking pizza
            </p>
          </div>
        </div>
        <div>
          <Input />
        </div>
        <div className=' flex items-center gap-3'>
          <Button
            variant={'outline'}
            className='flex gap-1 items-center'>
            <User size={16} /> Log In
          </Button>
          <div>
            <Button className='group relative'>
              <b>12$</b>
              <span className='h-full w-[1px] bg-white/30 mx-3' />
              <div className='flex items-center transition duration-300 group-hover:opacity-0 gap-1'>
                <ShoppingCart size={16} className='relative' strokeWidth={2} /> <b>3</b>
              </div>
              <ArrowRight size={20} className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
