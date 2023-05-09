import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

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
        <h1>Registration (server)</h1>

        <form action={register}>
          <label>
            Enter your name:
            <input type="text" name={'name'} />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }

  return (
    <form action={logout}>
      <h1>Hello, {user.name}!</h1>
      <button>Logout</button>
    </form>
  );
};

export default Page;
