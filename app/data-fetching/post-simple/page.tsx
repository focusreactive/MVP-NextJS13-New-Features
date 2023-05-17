'use client';

import { useEffect, useState } from 'react';

import BuildInfo from '@/components/BuildInfo/BuildInfo';
import Doc from './doc.mdx';

const PostPage = async () => {
  const [state, setState] = useState({ random: '' });

  useEffect(() => {
    fetch(`${window.location.origin}/api/check-post`, {
      method: 'POST',
    })
      .then((r) => r.json())
      .then(setState);
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
