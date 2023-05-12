import Link from 'next/link';
import '@picocss/pico/css/pico.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export const metadata = {
  title: 'Homepage',
};

export default async function RootLayout({
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
            <Link href={'/layout/parallel/sync'}>Sync</Link>
          </li>
          <li>
            <Link href={'/layout/parallel/left'}>Left</Link>
          </li>
          <li>
            <Link href={'/layout/parallel/right'}>Right</Link>
          </li>
        </ul>
      </nav>

      <section className="main-container">
        <div className="examples">{examples}</div>
        <div className="docs" style={{ fontSize: 14 }}>
          {docs}
        </div>
      </section>
    </>
  );
}
