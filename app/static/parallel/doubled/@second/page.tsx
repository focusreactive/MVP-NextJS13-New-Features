export const metadata = {
  title: 'Second doubled page',
};

const HomePage = () => {
  return (
    <div className={'rerender-indicator'}>
      <h1>SECOND</h1>
    </div>
  );
};

export default HomePage;
