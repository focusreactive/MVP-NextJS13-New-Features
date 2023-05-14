'use client';

import { useState } from 'react';

import Doc from './doc.mdx';
import styles from './Page.module.css';
import BuildInfo from '@/components/BuildInfo/BuildInfo';

export const metadata = {
  title: 'Error page',
};

const Page = async () => {
  const [error, setError] = useState(false);

  if (error) throw new Error('Masz problem');

  const throwError = () => setError(true);

  return (
    <div className={'rerender-indicator'}>
      <BuildInfo />
      <main className="container">
        <Doc />
        <div className={styles.container}>
          <img src="/assets/images_5425ff80d272a6b.webp" alt="problem" />
          <br />
          <br />
          <button className={styles.button} onClick={throwError}>
            Tak, mam problem
          </button>
        </div>
      </main>
    </div>
  );
};

export default Page;
