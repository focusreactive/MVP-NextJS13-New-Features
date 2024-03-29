'use client';

import { useState } from 'react';

const PostsPage = async () => {
  const [error, setError] = useState(false);

  if (error) throw new Error('Masz problem');

  const throwError = () => setError(true);
  return (
    <div className={'rerender-indicator'}>
      <h2> Right </h2>
      <button onClick={throwError}>Trouble is my goal</button>
    </div>
  );
};

export default PostsPage;
