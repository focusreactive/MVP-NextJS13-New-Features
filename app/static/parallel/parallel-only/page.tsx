export const metadata = {
  title: 'Parallel',
};

const Page = () => {
  return (
    <div className={'rerender-indicator'}>
      <h1>Dynamic route is only in parallel route @first</h1>
    </div>
  );
};

export default Page;
