import BuildInfo from '@/components/BuildInfo/BuildInfo';
import Doc from './doc.mdx';
import RevalidateButton from '@/components/RevalidateButton/RevalidateButon';

const PostPage = async () => {
  const page = await fetch('https://gapi.storyblok.com/v1/api', {
    method: 'post',
    headers: { token: 'BjrSi2XTl43hcISQpKSwxgtt', version: 'draft' },
    body: JSON.stringify({
      query: `query {
        DynamicpageItem(id: "308604460") {
        name
        content {
           _uid
           component
           components
        }
      }
    }`,
    }),
  });

  const data = await page.json();

  return (
    <div className="blog">
      <Doc />
      <article>
        <BuildInfo />
        {JSON.stringify(data)}
        <RevalidateButton />
      </article>
    </div>
  );
};

export default PostPage;
