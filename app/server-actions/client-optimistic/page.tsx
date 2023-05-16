import { cookies } from 'next/headers';

import { Form } from '@/app/server-actions/client-optimistic/_components/Form';
import Doc from './doc.mdx';

const Page = async () => {
  const cookie = cookies().get('user')?.value;
  const user = cookie && JSON.parse(cookie);

  return (
    <div>
      <Form user={user} />
      <Doc />
    </div>
  );
};

export default Page;
