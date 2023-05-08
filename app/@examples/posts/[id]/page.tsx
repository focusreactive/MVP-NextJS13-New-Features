import Link from 'next/link';

import { api } from '../../../../utils/api';

export const metadata = {
  title: 'Dynamic post',
};

const PostPage = async ({ params }: { params: { id: string } }) => {
  const [post] = await api.post(params.id);

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
