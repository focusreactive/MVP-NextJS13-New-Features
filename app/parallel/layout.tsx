import Link from 'next/link';
import '@picocss/pico/css/pico.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export const metadata = {
  title: 'Homepage',
};

export default function RootLayout({
  children,
  docs,
  examples,
}: {
  children: React.ReactNode;
  docs: React.ReactNode;
  examples: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href={'/parallel/posts'}>Posts</Link>
          </li>
          <li>
            <Link href={'/parallel/users/list'}>Users</Link>
          </li>
          <li>
            <Link href={'/parallel/users/static'}>Users Static</Link>
          </li>
        </ul>
      </nav>

      <section className="main-container">
        <div className="examples">{examples}</div>
        <div className="docs">{docs}</div>
      </section>
    </>
  );
}
