import { ServerComponent } from '@/app/rsc/server-in-client/ServerComponent';
import { ClientComponent } from '@/app/rsc/server-in-client/ClientComponent';
import Doc from './doc.mdx';

const Page = () => {
  return (
    <div>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
      <br />
      <Doc />
    </div>
  );
};

export default Page;
