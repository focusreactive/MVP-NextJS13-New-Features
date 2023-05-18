import Doc from './doc.mdx';

export const metadata = {
  title: 'WTF page',
};

export default function Page() {
  return (
    <div className="blog">
      <Doc />
    </div>
  );
}
