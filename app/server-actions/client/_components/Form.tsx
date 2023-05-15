// @ts-nocheck
'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

import { register } from '@/app/server-actions/client/_actions/register';
import { logout } from '@/app/server-actions/client/_actions/logout';

import type { CSSProperties, PropsWithChildren } from 'react';

export const Form = ({ user }: { user: { name: string } }) => {
  if (!user?.name) {
    return (
      <div>
        <h2>Server actions in client component</h2>

        <form action={register}>
          <FormContent>
            <label>
              Enter your name:
              <input type="text" name={'name'} />
            </label>
            <button>Submit</button>
          </FormContent>
        </form>
      </div>
    );
  }

  return (
    <form action={logout}>
      <h3>Hello, {user.name}!</h3>
      <button>Logout</button>
    </form>
  );
};

const FormContent = ({ children }: PropsWithChildren) => {
  const { pending } = useFormStatus(); // this works only inside <form> element

  return (
    <div
      style={
        pending
          ? ({
              opacity: 0.5,
              filter: 'contrast(0.5)',
              userSelect: 'none',
            } satisfies CSSProperties)
          : {}
      }
    >
      {children}
    </div>
  );
};
