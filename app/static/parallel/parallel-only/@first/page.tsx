export const metadata = {
  title: 'Homepage example',
};

const HomePage = () => {
  return (
    <div className={'rerender-indicator'}>
      <h1>FIRST</h1>
    </div>
  );
};

export default HomePage;
