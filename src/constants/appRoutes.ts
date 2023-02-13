export const MAIN = '/';
export const ABOUT = '/about';
export const CONTACT = '/contact';
export const DISTRIBUTORS = '/distributors';
export const CATEGORIES = '/categories';
export const CATEGORY = (slug: string) => `/categories/${slug}`;
export const PRODUCTS = (categorySlug: string, seriesSlug: string) =>
  `categories/${categorySlug}/${seriesSlug}`;
export const PRODUCT = (categorySlug: string, seriesSlug: string, productSlug: string) =>
  `categories/${categorySlug}/${seriesSlug}/${productSlug}`;
export const BLOG = '/blog';
export const BLOG_POST = (slug: string) => `/blog/${slug}`;
export const PROJECTS = '/projects';
export const PROJECT = (slug: string) => `/projects/${slug}`;
