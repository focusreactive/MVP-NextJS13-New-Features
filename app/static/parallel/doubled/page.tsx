export const metadata = {
  title: 'Parallel',
};

const Page = () => {
  return (
    <div className={'rerender-indicator'}>
      <h1>Dynamic route is in parallel route @first and in folder root</h1>
    </div>
  );
};

export default Page;
