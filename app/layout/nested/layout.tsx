import NavLink from '@/components/NavLink/NavLink';
import BuildInfo from '@/components/BuildInfo/BuildInfo';

export const metadata = {
  title: 'Nested layout',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink href={'/layout/nested/loading'}>Loading</NavLink>
          </li>
          <li>
            <BuildInfo />
          </li>
        </ul>
      </nav>

      <section className="layout">
        <div>{children}</div>
      </section>
    </>
  );
}
