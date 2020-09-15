import type React from 'react';
import type { PageProps } from 'gatsby';

export type LayoutComponent<T = never> = React.FC<PageProps<T> & { children: React.ReactNode }>;
