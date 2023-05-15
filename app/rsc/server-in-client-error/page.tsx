import { ClientComponent } from '@/app/rsc/server-in-client-error/ClientComponent';
import Doc from './doc.mdx';

const Page = () => {
  return (
    <div>
      <ClientComponent />
      <br />
      <Doc />
    </div>
  );
};

export default Page;
