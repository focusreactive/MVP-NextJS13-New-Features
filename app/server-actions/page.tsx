import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <p>
        <Link
          target={'_blank'}
          href={
            'https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions'
          }
        >
          Docs
        </Link>

        <br />
        <br />

        <Link
          target={'_blank'}
          href={
            'https://twitter.com/sebmarkbage/status/1654212899097960448?s=61&t=zbM-Hdqn4vi4ZmNFthtFyQ'
          }
        >
          Unstable (alpha)
        </Link>
      </p>

      <div>
        <p>
          <b>Key takeaways:</b>
        </p>

        <ul>
          <li>
            Functions with <code>'use server'</code> should have serializable
            arguments and a serializable return value
          </li>
          <li>
            There are 3 ways to call such functions (first two support
            progressive enhancement):
            <ul>
              <li>
                <code>action</code> prop on a form
              </li>
              <li>
                <code>formAction</code> prop on{' '}
                <code>
                  {'<'}button{'>'}
                </code>
                ,{' '}
                <code>
                  {'<'}input type="submit"{'>'}
                </code>
                , and{' '}
                <code>
                  {'<'}input type="image"{'>'}
                </code>{' '}
                in a form
              </li>
              <li>
                <code>startTransition</code>
              </li>
            </ul>
          </li>
          <li>
            <code>useOptimistic</code> to implement optimistic updates
          </li>
          <li>
            <code>useFormStatus</code> to get the status of a form submission
          </li>
          <li>
            We can't define server actions in client components, but we can pass
            them as props
          </li>
          <li>We can import server functions inside client components</li>
          <li>
            Two ways to revalidate a page:
            <ul>
              <li>
                <code>revalidatePath</code>
              </li>
              <li>
                <code>revalidateTag</code>
              </li>
            </ul>
          </li>
          <li>
            We can use <code>cookies()</code> and <code>headers()</code>{' '}
            functions in server actions
          </li>
          <li>We can modify cookies (basically they are read-only)</li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
