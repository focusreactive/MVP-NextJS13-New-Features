'use client';

import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

import styles from './NavLink.module.css';

import type { PropsWithChildren } from 'react';

const NavLink = ({
  href,
  children,
  className,
}: PropsWithChildren & { href: string; className?: string }) => {
  const segments = useSelectedLayoutSegments();

  const fullSlug = href.startsWith('/')
    ? '/' + segments.join('/')
    : segments.join('/');

  // works only with top level layout

  if (fullSlug === href) {
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
