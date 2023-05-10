export const metadata = {
  title: 'Page metadata',
};

const Page = () => {
  return (
    <div className={'rerender-indicator'}>
      <h1>Layout</h1>
      <h2>{process.env.NEXT_RUNTIME}</h2>
    </div>
  );
};

export default Page;
