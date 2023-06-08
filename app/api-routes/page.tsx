import Link from 'next/link';

import Doc from './doc.mdx';

const Page = () => {
  return (
    <div>
      <p>
        <Link
          href={
            'https://nextjs.org/docs/app/building-your-application/routing/router-handlers'
          }
          target={'_blank'}
        >
          Docs
        </Link>

        <br />
        <br />

        <Link href={'https://nextjs.org/docs/pages/api-reference/edge'}>
          Edge Runtime
        </Link>
      </p>

      <p>
        <b>Key takeaways:</b>
      </p>
      <ul>
        <li>
          Segment can contain either <code>route.ts</code> or{' '}
          <code>page.ts</code>, but not both
        </li>
        <li>
          Available methods: <code>GET</code>, <code>POST</code>,{' '}
          <code>PUT</code>, <code>PATCH</code>, <code>DELETE</code>,{' '}
          <code>HEAD</code>, and <code>OPTIONS</code>
        </li>
        <li>
          Can be dynamic or static. Static by default. Dynamic when:
          <ul>
            <li>
              Using the <code>Request</code> object with the <code>GET</code>{' '}
              method
            </li>
            <li>Using any of the HTTP methods other than mentioned above</li>
            <li>
              Using Dynamic Functions like <code>cookies()</code> and{' '}
              <code>headers()</code>
            </li>
            <li>Dynamic mode enabled in segment config</li>
          </ul>
        </li>
      </ul>

      <Doc />
    </div>
  );
};

export default Page;
