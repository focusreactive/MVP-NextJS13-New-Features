import NavLink from '@/components/NavLink/NavLink';
import '@picocss/pico/css/pico.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export const metadata = {
  title: 'Parallel layout',
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
            <NavLink href={'/wtf/parallel/parallel-only'}>
              Parallel only
            </NavLink>
          </li>
          <li>
            <NavLink href={'/wtf/parallel/doubled'}>Doubled</NavLink>
          </li>
        </ul>
      </nav>

      <section className="layout">{children}</section>
    </>
  );
}
