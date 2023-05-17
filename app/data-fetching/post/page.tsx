'use client';

import BuildInfo from '@/components/BuildInfo/BuildInfo';
import Doc from './doc.mdx';

const PostPage = async () => {
  const res = await fetch(`${window.location.origin}/api/check-post`, {
    method: 'POST',
  });
  const data = await res.json();

  return (
    <div className="blog">
      <Doc />
      <article>
        <BuildInfo />
        <strong>DATA FROM SERVER {data}</strong>
      </article>
    </div>
  );
};

export default PostPage;
