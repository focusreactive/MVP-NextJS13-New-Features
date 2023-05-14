import Link from 'next/link';

export const metadata = {
  title: 'Not found root page',
};

export default function NotFound() {
  return (
    <div>
      <h1>Not found – 404!</h1>
      <div>
        <Link href="/">Go back to Home</Link>
      </div>
    </div>
  );
}
