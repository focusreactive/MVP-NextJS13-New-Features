import styles from './Page.module.css';
import { api } from '@/utils/api';
import BuildInfo from '@/components/BuildInfo/BuildInfo';

const Page = async () => {
  const [image] = await api.images({ cache: 'no-store' });

  return (
    <div className={'rerender-indicator'}>
      <BuildInfo />
      <main className="container">
        <div className={styles.container}>
          <img src={image} alt="dog" width={400} />
          <h1 className={styles.title}>Deep nested layout</h1>
          <p className={styles.description}>This is a text</p>
        </div>
      </main>
    </div>
  );
};

export default Page;
