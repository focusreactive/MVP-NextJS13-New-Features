import NavLink from '@/components/NavLink/NavLink';
import '@picocss/pico/css/pico.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export const metadata = {
  title: 'Parallel layout',
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
            <NavLink href={'/layout/parallel/sync'}>Sync</NavLink>
          </li>
          <li>
            <NavLink href={'/layout/parallel/left'}>Left</NavLink>
          </li>
          <li>
            <NavLink href={'/layout/parallel/right'}>Right</NavLink>
          </li>
        </ul>
      </nav>

      <section className="main-container">
        <div className="examples">{examples}</div>
        <div className="blog" style={{ fontSize: 14 }}>
          {docs}
        </div>
      </section>
    </>
  );
}
