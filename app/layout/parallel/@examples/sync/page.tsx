import NavLink from '@/components/NavLink/NavLink';

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
          <NavLink href={`/parallel/posts/${id}`}>{title}</NavLink>
          <p>{body.slice(0, 100)}...</p>
          <small>
            <NavLink href={`/parallel/users/${id}`} className={'secondary'}>
              Author Page
            </NavLink>
          </small>
        </article>
      ))}
    </div>
  );
};

export default PostsPage;
