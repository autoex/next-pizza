import {
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  Title,
  TopBar,
} from '@/components/shared';

const pizzasList = [
  {
    id: 1,
    price: 12,
    name: 'Margarita',
    items: [{ price: 12 }],
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589908/pizzzas/vdmn6wgusif29tfpfb4l.avif',
  },
  {
    id: 2,
    price: 12,
    items: [{ price: 12 }],
    name: 'Margarita',
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589908/pizzzas/vdmn6wgusif29tfpfb4l.avif',
  },
  {
    id: 3,
    price: 12,
    items: [{ price: 12 }],
    name: 'Margarita',
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589908/pizzzas/vdmn6wgusif29tfpfb4l.avif',
  },
  {
    id: 4,
    price: 12,
    items: [{ price: 12 }],
    name: 'Margarita',
    imageUrl:
      'https://res.cloudinary.com/ddnsdfd5l/image/upload/v1738589908/pizzzas/vdmn6wgusif29tfpfb4l.avif',
  },
];
export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title
          text='Home'
          size='lg'
          className=' font-extrabold'
        />
      </Container>
      <TopBar />

      <Container className='pb-14 mt-10'>
        <div className=' flex gap-[80px]'>
          <div className=' w-[250px]'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title='Pizzas'
                categoryId={1}
                items={pizzasList}
              />
              <ProductsGroupList
                title='Snacks'
                categoryId={3}
                items={pizzasList}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
