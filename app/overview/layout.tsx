import '@picocss/pico/css/pico.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export const metadata = {
  title: 'Static',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="blog">{children}</section>;
}
