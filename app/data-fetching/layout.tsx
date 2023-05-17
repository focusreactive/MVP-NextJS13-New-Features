import '@picocss/pico/css/pico.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import NavLink from '@/components/NavLink/NavLink';

export const metadata = {
  title: 'Data fetching layout',
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
            <NavLink href={'/data-fetching/revalidate'}>Revalidate</NavLink>
          </li>
          <li>
            <NavLink href={'/data-fetching/no-cache'}>No cache</NavLink>
          </li>
        </ul>
      </nav>

      <section className="layout">{children}</section>
    </>
  );
}
