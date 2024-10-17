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
      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
  },
  {
    id: 2,
    price: 12,
    items: [{ price: 12 }],
    name: 'Margarita',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
  },
  {
    id: 3,
    price: 12,
    items: [{ price: 12 }],
    name: 'Margarita',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
  },
  {
    id: 4,
    price: 12,
    items: [{ price: 12 }],
    name: 'Margarita',
    imageUrl:
      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
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
                categoryId={2}
                items={pizzasList}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
