import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <div>
        <p>
          <b>Key takeaways:</b>
        </p>

        <ul>
          <li>
            Can be defined only in <code>layout</code> and <code>page</code>
          </li>
          <li>
            All metadata in parent routes are merged with that in the current
            page (cascade)
          </li>
          <li>Server components only</li>
          <li>
            Usage of <code>searchParams</code> makes the segment SSR. See:{' '}
            <Link href={'/metadata/ssr'}>Dynamic SSR</Link>
          </li>
          <li>
            File-based Metadata. We can generate <code>robots.txt</code>,{' '}
            <code>sitemap</code> and images dynamically, defining them in
            separate files. See: <Link href={'/metadata/sitemap'}>Sitemap</Link>
            , <Link href={'/metadata/robots'}>Robots</Link> and{' '}
            <Link href={'/metadata/image-generation'}>Image Generation</Link>
          </li>
          <li>
            <Link
              target={'_blank'}
              href={
                'https://nextjs.org/docs/app/api-reference/functions/generate-metadata#unsupported-metadata'
              }
            >
              List of unsupported tags
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
