export const PAGE_ROUTES = {
  MAIN: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  DISTRIBUTORS: '/distributors',

  CATEGORIES: '/categories',
  CATEGORY: (slug: string) => `/categories/${slug}`,
  PRODUCTS: (categorySlug: string, seriesSlug: string) =>
    `/categories/${categorySlug}/${seriesSlug}`,
  PRODUCT: (categorySlug: string, seriesSlug: string, productSlug: string) =>
    `/categories/${categorySlug}/${seriesSlug}/${productSlug}`,

  BLOG: '/blog',
  BLOG_POST: (slug: string) => `/blog/${slug}`,

  PROJECTS: '/projects',
  PROJECT: (slug: string) => `/projects/${slug}`,
};
