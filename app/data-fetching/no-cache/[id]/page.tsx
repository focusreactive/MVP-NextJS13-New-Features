import { Suspense } from 'react';

import BuildInfo from '@/components/BuildInfo/BuildInfo';
import NavLink from '@/components/NavLink/NavLink';
import { api } from '@/utils/api';

export const metadata = {
  title: 'Dynamic no cache page',
};

export const dynamic = 'force-static';

const PostPage = async ({ params }: { params: { id: string } }) => {
  const [post] = await api.post(params.id);
  const [image] = await api.images({ cache: 'no-cache' });

  return (
    <div>
      <article>
        <BuildInfo />
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Suspense>
          <div className="grid">
            <img src={image} alt="dog" width={400} />
          </div>
        </Suspense>

        <NavLink href={`/users/${post.userId}`} className={'secondary'}>
          Author Page
        </NavLink>
      </article>
    </div>
  );
};

export default PostPage;

export async function generateStaticParams() {
  const [posts] = await api.posts();

  return posts.slice(0, 10).map((post) => {
    return {
      id: String(post.id),
    };
  });
}
