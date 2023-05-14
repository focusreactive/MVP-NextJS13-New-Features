import NavLink from '@/components/NavLink/NavLink';
import '@picocss/pico/css/pico.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export const metadata = {
  title: 'Second doubled layout',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink href={'/parallel/posts'}>Posts</NavLink>
          </li>
          <li>
            <NavLink href={'/parallel/users/list'}>Users</NavLink>
          </li>
          <li>
            <NavLink href={'/parallel/users/static'}>Users Static</NavLink>
          </li>
        </ul>
      </nav>

      <section className="main-container">
        <div>{children}</div>
      </section>
    </>
  );
}
