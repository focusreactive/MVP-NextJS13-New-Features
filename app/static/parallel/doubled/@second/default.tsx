export const metadata = {
  title: 'Second default doubled page',
};

export default function Page() {
  return (
    <div className={'rerender-indicator'}>
      <h1>Default second</h1>
    </div>
  );
}
