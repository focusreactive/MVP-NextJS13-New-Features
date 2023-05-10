'use client';

import styles from './Page.module.css';
import BuildInfo from '@/components/BuildInfo/BuildInfo';

const Page = async () => {
  const throwError = () => {
    throw new Error('Masz problem');
  };

  return (
    <div className={'rerender-indicator'}>
      <BuildInfo />
      <main className="container">
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
