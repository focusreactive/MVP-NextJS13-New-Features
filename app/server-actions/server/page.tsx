// @ts-nocheck
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

import Doc from './doc.mdx';

const Page = async () => {
  const cookie = cookies().get('user')?.value;
  const user = cookie && JSON.parse(cookie);

  const register = async (formData: FormData) => {
    'use server';

    const name = formData.get('name');

    if (!name) return;

    cookies().set({
      name: 'user',
      value: JSON.stringify({ name }),
      httpOnly: true,
    });

    revalidatePath('/parallel/me');
  };

  const logout = async () => {
    'use server';

    cookies().set({ name: 'user', value: '', httpOnly: true });

    revalidatePath('/parallel/me');
  };

  if (!user?.name) {
    return (
      <div>
        <h2>Server actions in server component</h2>

        <form action={register}>
          <label>
            Enter your name:
            <input type="text" name={'name'} />
          </label>
          <button>Submit</button>
        </form>

        <Doc />
      </div>
    );
  }

  return (
    <div>
      <h2>Server actions in server component</h2>

      <form action={logout}>
        <h3>Hello, {user.name}!</h3>
        <button>Logout</button>
      </form>

      <Doc />
    </div>
  );
};

export default Page;
