import React from 'react';
import Link from 'next/link';

const PostsLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href={`/parallel/posts/random`}>Random</Link>
          </li>
          <li>
            <Link href={`/parallel/posts/best`}>Best</Link>
          </li>
          <li>
            <Link href={`/parallel/posts/dynamic`}>Dynamic</Link>
          </li>
        </ul>
      </nav>

      <div>{children}</div>
    </div>
  );
};

export default PostsLayout;
