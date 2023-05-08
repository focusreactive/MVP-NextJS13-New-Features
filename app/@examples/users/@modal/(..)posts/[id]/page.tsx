import { api } from '@/utils/api';
import { BackLink } from '@/components/BackLink';

const PostPage = async ({ params }: { params: { id: string } }) => {
  const [post] = await api.post(params.id);

  return (
    <dialog open>
      <article>
        <header>
          <h3 style={{ marginBottom: 0 }}>{post.title}</h3>
        </header>

        <p>{post.body}</p>

        <BackLink />
      </article>
    </dialog>
  );
};

export default PostPage;
