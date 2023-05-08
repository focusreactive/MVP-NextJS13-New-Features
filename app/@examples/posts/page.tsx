import Link from 'next/link';

import { api } from '@/utils/api';

export const metadata = {
  title: 'All posts',
};

const PostsPage = async () => {
  const [posts] = await api.posts();

  return (
    <div className={'rerender-indicator'}>
      <h2>All Posts</h2>

      {posts.map(({ id, userId, title, body }) => (
        <article key={id}>
          <Link href={`/posts/${id}`}>{title}</Link>
          <p>{body.slice(0, 100)}...</p>
          <small>
            <Link href={`/users/${id}`} className={'secondary'}>
              Author Page
            </Link>
          </small>
        </article>
      ))}
    </div>
  );
};

export default PostsPage;
