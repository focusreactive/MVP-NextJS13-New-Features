import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <h1>Metadata examples</h1>

      <p>
        <Link
          href={
            'https://nextjs.org/docs/app/api-reference/functions/generate-metadata'
          }
        >
          Docs
        </Link>
      </p>

      <div>
        <p>
          <b>Key takeaways:</b>
        </p>

        <ul>
          <li>
            Can be defined only in <code>layout</code> and <code>page</code>
          </li>
          <li>
            All metadata in parent routes is merged with current page (cascade)
          </li>
          <li>Server components only</li>
          <li>
            Usage of <code>searchParams</code> make the segment SSR (see{' '}
            <Link href={'/metadata/ssr'}>Dynamic SSR</Link>)
          </li>
          <li>
            If page don't have <code>title</code> the closest parent{' '}
            <code>title</code> will be used
          </li>
          <li>
            <Link
              href={
                'https://nextjs.org/docs/app/api-reference/functions/generate-metadata#unsupported-metadata'
              }
            >
              List of unsupported tags
            </Link>
          </li>
          <li>
            <code>robots.txt</code> can be part of metadata or a separate file
            (see <code>app/sitemap.ts</code>), so as any icon like
            <code>apple-icon.js</code>, <code>icon.js</code>,{' '}
            <code>opengraph-image.js</code>, <code>twitter-image.js</code>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;