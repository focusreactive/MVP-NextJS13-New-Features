import BuildInfo from '@/components/BuildInfo/BuildInfo';
import NavLink from '@/components/NavLink/NavLink';
import { api } from '@/utils/api';
import Doc from './doc.mdx';

export const metadata = {
  title: 'Dynamic revalidate page',
};

const PostPage = async () => {
  const [post] = await api.post('60');
  const [image] = await api.images({ next: { revalidate: 60 } });

  return (
    <div className="blog">
      <Doc />
      <article>
        <BuildInfo />
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <div className="grid">
          <img src={image} alt="dog" width={400} />
        </div>
        <NavLink href={`/users/${post.userId}`} className={'secondary'}>
          Author Page
        </NavLink>
      </article>
    </div>
  );
};

export default PostPage;
