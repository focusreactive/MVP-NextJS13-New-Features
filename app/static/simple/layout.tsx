import Link from 'next/link';

import '@picocss/pico/css/pico.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import { api } from '@/utils/api';

export const metadata = {
  title: 'Simple',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
                <Link href={`/static/simple/${id}`}>{id}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <section className="main-container">
        <div>{children}</div>
      </section>
    </>
  );
}
