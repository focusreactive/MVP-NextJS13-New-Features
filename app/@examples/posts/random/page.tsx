import Link from 'next/link';

import { api } from '@/utils/api';

export const metadata = {
  title: 'Random post',
};

const PostPage = async () => {
  const [post] = await api.post('random', { cache: 'no-store' });

  return (
    <div>
      <article>
        <h2>{post.title}</h2>

        <p>{post.body}</p>

        <Link href={`/users/${post.userId}`} className={'secondary'}>
          Author Page
        </Link>
      </article>
    </div>
  );
};

export default PostPage;
