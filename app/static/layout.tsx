import NavLink from '@/components/NavLink/NavLink';
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
            <NavLink href={'/static/simple'}>Simple</NavLink>
          </li>
          <li>
            <NavLink href={'/static/parallel'}>Parallel</NavLink>
          </li>
          <li>
            <NavLink href={'/static/config'}>Config</NavLink>
          </li>
        </ul>
      </nav>

      <section className="layout">{children}</section>
    </>
  );
}
