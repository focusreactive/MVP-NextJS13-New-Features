import React from 'react';
import Link from 'next/link';

const PostsLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href={`/posts/random`}>Random</Link>
          </li>
          <li>
            <Link href={`/posts/best`}>Best</Link>
          </li>
        </ul>
      </nav>

      <div>{children}</div>
    </div>
  );
};

export default PostsLayout;
