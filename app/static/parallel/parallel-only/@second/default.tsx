export const metadata = {
  title: 'Default parallel page',
};

export default function Page() {
  return (
    <div className={'rerender-indicator'}>
      <h1>Default second</h1>
    </div>
  );
}
