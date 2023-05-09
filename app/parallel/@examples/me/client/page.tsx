import { cookies } from 'next/headers';

import { Form } from '@/app/parallel/@examples/me/client/_components/Form';

const Page = async () => {
  const cookie = cookies().get('user')?.value;
  const user = cookie && JSON.parse(cookie);

  return <Form user={user} />;
};

export default Page;
