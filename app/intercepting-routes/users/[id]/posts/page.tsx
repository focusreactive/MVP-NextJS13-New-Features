import React from 'react';

import image from './intercepting-routes.png';
import NavLink from '@/components/NavLink/NavLink';
import { api } from '@/utils/api';
import Doc from './doc.mdx';

const UserPostsPage = async ({ params }: { params: { id: string } }) => {
  const [posts] = await api.posts();

  const userPosts = posts.filter((post) => +post.userId === +params.id);

  if (!userPosts) {
    return <div>No posts yet</div>;
  }

  return (
    <div>
      <br />

      <details>
        <summary>Help</summary>
        <img src={image.src} width={400} alt="" />
        <br />
        <hr />
        <br />
        <Doc />
      </details>

      {userPosts.slice(5).map(({ id, userId, title, body }) => (
        <article key={id}>
          <h4>{title}</h4>

          <p>{body.slice(0, 300)}...</p>

          <NavLink href={`/intercepting-routes/posts/${id}`}>Read more</NavLink>
        </article>
      ))}
    </div>
  );
};

export default UserPostsPage;
