import getRandomColor from '@/utils/getRandomColor';
import styles from './Page.module.css';
import { api } from '@/utils/api';

export const metadata = {
  title: 'Page metadata',
};

const Page = async () => {
  const [image] = await api.images();
  return (
    <div className={'rerender-indicator'}>
      <div style={{ backgroundColor: getRandomColor() }}>RANDOM COLOR</div>
      <div>{`Built at: ${new Date(Date.now()).toISOString()}`}</div>
      <main className="container">
        <img src={image} alt="dog" width={400} />
        <div className={styles.container}>
          <h1 className={styles.title}>Deep nested layout</h1>
          <p className={styles.description}>This is a text</p>
          <button className={styles.button}>Click me!</button>
        </div>
      </main>
    </div>
  );
};

export default Page;
