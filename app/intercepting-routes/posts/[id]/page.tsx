import NavLink from '@/components/NavLink/NavLink';
import { api } from '@/utils/api';

const PostPage = async ({ params }: { params: { id: string } }) => {
  const [post] = await api.post(params.id);

  return (
    <article>
      <h2>{post.title}</h2>

      <p>{post.body}</p>

      <NavLink href={`/intercepting-routes/users/${post.userId}`} className={'secondary'}>
        Author Page
      </NavLink>
    </article>
  );
};

export default PostPage;
