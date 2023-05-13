'use client';

import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

import styles from './NavLink.module.css';

import type { PropsWithChildren } from 'react';

const NavLink = ({ href, children }: PropsWithChildren & { href: string }) => {
  const segments = useSelectedLayoutSegments();

  const fullSlug = href.startsWith('/')
    ? '/' + segments.join('/')
    : segments.join('/');

  // TODO: fix empty segments for nested layouts
  //   console.warn(fullSlug, href);

  if (fullSlug === href) {
    return (
      <Link href={href} className={styles.selected}>
        {children}
      </Link>
    );
  }

  return <Link href={href}>{children}</Link>;
};

export default NavLink;
