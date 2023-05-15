import { ClientComponent } from '@/app/rsc/client-boundary/ClientComponent';
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
