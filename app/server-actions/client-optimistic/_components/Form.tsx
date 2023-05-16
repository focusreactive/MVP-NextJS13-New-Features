// @ts-nocheck

'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { experimental_useOptimistic as useOptimistic, useRef } from 'react';

import { register } from '@/app/server-actions/client-optimistic/_actions/register';
import { logout } from '@/app/server-actions/client-optimistic/_actions/logout';

import type { CSSProperties, PropsWithChildren } from 'react';

export const Form = ({ user }: { user: { name: string } }) => {
  const [optimisticUser, optimisticRegister] = useOptimistic(
    user,
    (state, name: string) => ({ name, isOptimistic: true }),
  );
  const formRef = useRef<HTMLFormElement>(null);

  if (!optimisticUser?.name) {
    return (
      <div>
        <h2>Optimistic updates</h2>

        <form
          action={async (formData) => {
            const name = formData.get('name');
            formRef.current && formRef.current.reset();
            optimisticRegister(name as string);
            await register(formData);
          }}
          ref={formRef}
        >
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
      <h3>Hello, {optimisticUser.name}!</h3>
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
