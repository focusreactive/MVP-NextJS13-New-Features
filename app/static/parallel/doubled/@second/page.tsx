export const metadata = {
  title: 'Homepage example',
};

const HomePage = () => {
  return (
    <div className={'rerender-indicator'}>
      <h1>SECOND</h1>
    </div>
  );
};

export default HomePage;
