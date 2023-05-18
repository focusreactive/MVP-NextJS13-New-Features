import NavLink from '@/components/NavLink/NavLink';
import BuildInfo from '@/components/BuildInfo/BuildInfo';

export const metadata = {
  title: 'Layout metadata',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={'rerender-indicator'}>
      <nav>
        <ul>
          <li>
            <NavLink href={'/layout/nested'}>Nested</NavLink>
          </li>
          <li>
            <NavLink href={'/layout/parallel'}>Parallel</NavLink>
          </li>
          <li>
            <NavLink href={'/layout/error'}>Error</NavLink>
          </li>
          <li>
            <BuildInfo />
          </li>
        </ul>
      </nav>

      <section className="layout">
        <div>{children}</div>
      </section>
    </div>
  );
}
