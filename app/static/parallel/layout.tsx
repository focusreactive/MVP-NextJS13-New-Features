import Link from 'next/link';
import '@picocss/pico/css/pico.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export const metadata = {
  title: 'Static',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href={'/static/parallel/parallel-only'}>Parallel only</Link>
          </li>
          <li>
            <Link href={'/static/parallel/doubled'}>Doubled</Link>
          </li>
        </ul>
      </nav>

      <section className="main-container">
        <div>{children}</div>
      </section>
    </>
  );
}