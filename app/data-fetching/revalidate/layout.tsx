import '@picocss/pico/css/pico.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import NavLink from '@/components/NavLink/NavLink';

export const metadata = {
  title: 'Revalidate layout',
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
            <NavLink href={`/data-fetching/revalidate/10`}>10</NavLink>
          </li>
          <li>
            <NavLink href={`/data-fetching/revalidate/60`}>60</NavLink>
          </li>
          <li>
            <NavLink href={`/data-fetching/revalidate/on-demand`}>
              On demand
            </NavLink>
          </li>
        </ul>
      </nav>

      <section className="blog">{children}</section>
    </>
  );
}
