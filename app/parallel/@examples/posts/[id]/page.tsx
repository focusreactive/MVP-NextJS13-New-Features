import NavLink from '@/components/NavLink/NavLink';
import { api } from '@/utils/api';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const [post] = await api.post(params.id);

  return {
    title: post.title,
  };
}

const PostPage = async ({ params }: { params: { id: string } }) => {
  const [post] = await api.post(params.id);
  const [image] = await api.images();
  const [user] = await api.user(post.userId);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: image,
    publisher: user.name,
    datePublished: new Date().toISOString(),
    articleBody: post.body,
    author: {
      '@type': 'Person',
      name: user.name,
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <h2>{post.title}</h2>

        <p>{post.body}</p>

        <div className="grid">
          <img src={image} alt="dog" width={400} />
        </div>

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

export async function generateStaticParams() {
  const [posts] = await api.posts();

  return posts.slice(0, 10).map((post) => {
    return {
      id: String(post.id),
    };
  });
}
