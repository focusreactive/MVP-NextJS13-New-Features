import Link from 'next/link';
import React from 'react';

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
      {userPosts.map(({ id, userId, title, body }) => (
        <article key={id}>
          <h4>{title}</h4>
          <p>{body.slice(0, 300)}...</p>

          <div>
            <Link href={`/parallel/posts/${id}`}>Read more</Link>
            <span style={{ padding: '0 14px' }}> | </span>
            <Link href={`/parallel/posts/${id}`}>Preview</Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default UserPostsPage;
