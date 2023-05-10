'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

import { sleep } from '@/utils/sleep';

export const register = async (formData: FormData) => {
  const name = formData.get('name');

  if (!name) return;

  await sleep(3000);

  // @ts-ignore
  cookies().set({
    name: 'user',
    value: JSON.stringify({ name }),
    httpOnly: true,
  });

  revalidatePath('/parallel/me');
};
