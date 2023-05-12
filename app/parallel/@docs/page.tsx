import Doc from './doc.mdx';

export const metadata = {
  title: 'Homepage docs',
};

const HomePage = () => {
  return (
    <div className={'rerender-indicator'}>
      <h1>Folder structure</h1>

      <Doc />
    </div>
  );
};

export default HomePage;
