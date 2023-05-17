'use client';
import { cache } from 'react';
import { useEffect, useState } from 'react';

import BuildInfo from '@/components/BuildInfo/BuildInfo';
import Doc from './doc.mdx';

const getData = cache(async () =>
  fetch(`${window.location.origin}/api/check-post`, {
    method: 'POST',
  }).then((r) => r.json()),
);

const PostPage = async () => {
  const [state, setState] = useState({ random: '' });

  useEffect(() => {
    getData().then(setState);
  }, []);

  return (
    <div className="blog">
      <Doc />
      <article>
        <BuildInfo />
        <strong>DATA FROM SERVER {state?.random}</strong>
      </article>
    </div>
  );
};

export default PostPage;
