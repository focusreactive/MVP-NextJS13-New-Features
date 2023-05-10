import getRandomColor from '@/utils/getRandomColor';

export const metadata = {
  title: 'Page metadata',
};

const Page = () => {
  return (
    <div className={'rerender-indicator'}>
      <h1>Layout</h1>{' '}
      <div style={{ backgroundColor: getRandomColor() }}>RANDOM COLOR</div>
      <div>{`Built at: ${new Date(Date.now()).toISOString()}`}</div>
      <h2>{process.env.NEXT_RUNTIME}</h2>
    </div>
  );
};

export default Page;
