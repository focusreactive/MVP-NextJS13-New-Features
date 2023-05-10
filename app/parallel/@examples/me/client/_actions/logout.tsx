'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export const logout = async () => {
  // @ts-ignore
  cookies().set({ name: 'user', value: '', httpOnly: true });

  revalidatePath('/parallel/me');
};
