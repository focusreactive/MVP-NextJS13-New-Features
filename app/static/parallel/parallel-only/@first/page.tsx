export const metadata = {
  title: 'Parallel page',
};

const HomePage = () => {
  return (
    <div className={'rerender-indicator'}>
      <h1>FIRST</h1>
    </div>
  );
};

export default HomePage;
