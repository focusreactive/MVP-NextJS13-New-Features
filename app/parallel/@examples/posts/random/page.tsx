import NavLink from '@/components/NavLink/NavLink';
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

        <NavLink
          href={`/parallel/users/${post.userId}`}
          className={'secondary'}
        >
          Author Page
        </NavLink>
      </article>
    </div>
  );
};

export default PostPage;
