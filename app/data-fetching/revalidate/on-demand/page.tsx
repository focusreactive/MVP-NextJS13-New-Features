import BuildInfo from '@/components/BuildInfo/BuildInfo';
import NavLink from '@/components/NavLink/NavLink';
import { api } from '@/utils/api';
import Doc from './doc.mdx';
import RevalidateButton from '@/components/RevalidateButton/RevalidateButon';

export const metadata = {
  title: 'Dynamic revalidate page',
};

const PostPage = async () => {
  const [post] = await api.post(String(Math.round(Math.random() * 100)));
  const [image] = await api.images({ cache: 'no-store' });

  return (
    <div className="blog">
      <Doc />
      <article>
        <BuildInfo />
        <RevalidateButton />
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
