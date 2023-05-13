import NavLink from '@/components/NavLink/NavLink';
import { api } from '@/utils/api';

export const metadata = {
  title: 'Dynamic post',
};

const PostPage = async ({ params }: { params: { id: string } }) => {
  const [user] = await api.user(params.id);
  const [image] = await api.images();
  const site = user.website;

  return (
    <div>
      <article>
        <h2>{user.name}</h2>
        <div>FIRST</div>
        <p>{user.username}</p>
        <div className="grid">
          <img src={image} alt="dog" width={400} />
        </div>
        {site && <NavLink href={user.website}>Site</NavLink>}
      </article>
    </div>
  );
};

export default PostPage;

export async function generateStaticParams() {
  const [posts] = await api.posts();

  return posts.slice(10, 20).map((post) => {
    return {
      id: String(post.id),
    };
  });
}
