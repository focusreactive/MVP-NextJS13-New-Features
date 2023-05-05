import Link from 'next/link';

import { api } from '@/utils/api';

const PostPage = async () => {
  const [post] = await api.post('best');

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
