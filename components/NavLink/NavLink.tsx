'use client';

import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';

import styles from './NavLink.module.css';

import type { PropsWithChildren } from 'react';

const NavLink = ({
  href,
  children,
  className,
}: PropsWithChildren & { href: string; className?: string }) => {
  const pathName = usePathname();
  const segment = useSelectedLayoutSegment();

  if (
    (segment && (href.endsWith(segment) || href.includes(`/${segment}/`))) ||
    (!segment && href === '/')
  ) {
    if (pathName === href) {
      return (
        <Link href={href} className={styles.current}>
          {children}
        </Link>
      );
    }

    return (
      <Link href={href} className={styles.selected}>
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default NavLink;
