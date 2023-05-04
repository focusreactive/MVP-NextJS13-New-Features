import Link from 'next/link';

import { api } from '../../utils/api';

const PostsPage = async () => {
  const posts = await api.posts();

  return (
    <div className={'flashing-border'}>
      <h2>All Posts</h2>

      {posts.slice(0, 5).map(({ id, userId, title, body }) => (
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
