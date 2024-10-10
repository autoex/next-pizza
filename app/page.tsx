import { Container, Title, TopBar } from '@/components/shared';

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
      
    </>
  );
}
