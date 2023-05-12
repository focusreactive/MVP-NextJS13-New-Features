import Doc from './doc.mdx';

export const metadata = {
  title: 'Homepage docs',
};

const HomePage = () => {
  return (
    <div className={'rerender-indicator'}>
      <Doc />
    </div>
  );
};

export default HomePage;
