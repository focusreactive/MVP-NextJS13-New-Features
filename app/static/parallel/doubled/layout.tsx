import Link from 'next/link';

import '@picocss/pico/css/pico.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import { api } from '@/utils/api';

export const metadata = {
  title: 'Homepage',
};

export default async function RootLayout({
  children,
  first,
  second,
}: {
  children: React.ReactNode;
  first: React.ReactNode;
  second: React.ReactNode;
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
                <Link href={`/static/parallel/doubled/${id}`}>{id}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <section className="main-container">
        <div className="examples">{second}</div>
        <div className="docs">{first}</div>
        <div>{children}</div>
      </section>
    </>
  );
}
