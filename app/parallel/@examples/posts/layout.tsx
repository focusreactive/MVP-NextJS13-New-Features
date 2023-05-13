import React from 'react';

import NavLink from '@/components/NavLink/NavLink';

const PostsLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink href={`/parallel/posts/random`}>Random</NavLink>
          </li>
          <li>
            <NavLink href={`/parallel/posts/best`}>Best</NavLink>
          </li>
          <li>
            <NavLink href={`/parallel/posts/dynamic`}>Dynamic</NavLink>
          </li>
        </ul>
      </nav>

      <div>{children}</div>
    </div>
  );
};

export default PostsLayout;
