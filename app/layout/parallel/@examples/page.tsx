export const metadata = {
  title: 'Example page',
};

const HomePage = () => {
  return (
    <div className={'rerender-indicator'}>
      <h1>Left page</h1>
    </div>
  );
};

export default HomePage;
