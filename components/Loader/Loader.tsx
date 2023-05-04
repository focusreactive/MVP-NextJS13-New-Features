import styles from './Loader.module.css';

export default function Loader() {
  return (
    <section className={styles.section}>
      <div className={styles.loader}></div>
    </section>
  );
}
