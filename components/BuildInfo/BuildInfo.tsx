// import getRandomColor from '@/utils/getRandomColor';
import styles from './BuildInfo.module.css';

export default function BuildInfo() {
  return (
    <aside className={styles.stamp}>
      {/* <div style={{ backgroundColor: getRandomColor() }}>RANDOM COLOR</div> */}
      <div>{`Built at: ${new Date(Date.now() + 7200000).toISOString()}`}</div>
      {/* <div>NEXT_RUNTIME: {process.env.NEXT_RUNTIME}</div> */}
    </aside>
  );
}
