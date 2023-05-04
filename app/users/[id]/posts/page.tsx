import Link from 'next/link';

const UserPostsPage = async ({ params }: { params: { id: string } }) => {
  const posts = (await fetch(
    `https://jsonplaceholder.typicode.com/user/${params.id}/posts`,
  ).then((r) => r.json())) as {
    id: string;
    userId: string;
    title: string;
    body: string;
  }[];

  return (
    <div>
      {posts.map(({ id, userId, title, body }) => (
        <article key={id}>
          <Link href={`/posts/${id}`}>{title}</Link>
          <p>{body.slice(0, 20)}...</p>
          <small>
            <Link href={`/users/${id}`} className={'secondary'}>
              {title}
            </Link>
          </small>
        </article>
      ))}
    </div>
  );
};

export default UserPostsPage;
