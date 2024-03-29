import '@picocss/pico/css/pico.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import { api } from '@/utils/api';
import NavLink from '@/components/NavLink/NavLink';

export const metadata = {
  title: 'Parallel only layout',
};

export default async function RootLayout({
  children,
  first,
}: {
  children: React.ReactNode;
  first: React.ReactNode;
}) {
  const [posts] = await api.posts();

  return (
    <>
      <nav>
        <ul>
          {posts.slice(0, 10).map((post) => {
            const id = post.id;

            return (
              <li key={id}>
                <NavLink href={`/wtf/parallel/parallel-only/${id}`}>
                  {id}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <section className="main-container">
        <div className="docs">{first}</div>
        <div>{children}</div>
      </section>
    </>
  );
}
