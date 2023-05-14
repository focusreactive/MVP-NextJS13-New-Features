import '@picocss/pico/css/pico.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export const metadata = {
  title: 'Data fetching layout',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <ul></ul>
      </nav>

      <section className="layout">{children}</section>
    </>
  );
}
