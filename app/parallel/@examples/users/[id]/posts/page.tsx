import React from 'react';

import NavLink from '@/components/NavLink/NavLink';
import { api } from '@/utils/api';

export const metadata = {
  title: 'Users posts',
};

const UserPostsPage = async ({ params }: { params: { id: string } }) => {
  const [posts] = await api.posts();

  const userPosts = posts.filter((post) => +post.userId === +params.id);

  if (!userPosts) {
    return <div>No posts yet</div>;
  }

  return (
    <div>
      {userPosts.slice(5).map(({ id, userId, title, body }) => (
        <article key={id}>
          <h4>{title}</h4>
          <p>{body.slice(0, 300)}...</p>

          <div>
            <NavLink href={`/parallel/posts/${id}`}>Read more</NavLink>
            <span style={{ padding: '0 14px' }}> | </span>
            <NavLink href={`/parallel/posts/${id}`}>Preview</NavLink>
          </div>
        </article>
      ))}
    </div>
  );
};

export default UserPostsPage;
