import {
  CATEGORIES,
  PROJECTS,
  BLOG,
  CONTACT,
  ABOUT,
  SUPPORT,
  DISTRIBUTORS,
} from '../appRoutes';

export const en = {
  header: {
    navLinks: [
      { name: 'Products', url: CATEGORIES },
      { name: 'Projects', url: PROJECTS },
      { name: 'Blog', url: BLOG },
      { name: 'Contact', url: CONTACT },
    ],
  },
  footer: {
    productLinks: {
      title: 'Products',
      links: [
        { text: 'P Series', link: '/p-series' },
        { text: 'E Series', link: '/e-series' },
        { text: 'F Series', link: '/h-series' },
        { text: 'H Series', link: '/f-series' },
      ],
    },
    topLinks: {
      title: 'Top Links',
      links: [
        { text: 'About AVA', link: ABOUT },
        { text: 'Support', link: SUPPORT },
        { text: 'Where to buy?', link: DISTRIBUTORS },
        { text: 'Contact', link: CONTACT },
      ],
    },
    contactLinks: {
      titile: 'Contact',
      links: [
        { title: 'Tel', text: '+982122626262', link: 'tel:+982122626262' },
        { title: 'Zip', text: '2323659864', link: '1' },
        {
          title: 'Address',
          text: 'Apt.17 Bldg 74, Dashtestane 6, Pasdaran St, Tehran, Iran',
          link: '2',
        },
      ],
    },
    socialLinks: [
      {
        link: 'https://instagram.com',
        icon: '/icons/instagram_white.svg',
        name: 'instagram',
      },
      {
        link: 'https://facebook.com',
        icon: '/icons/facebook_white.svg',
        name: 'facebook',
      },
      {
        link: 'https://linkedin.com',
        icon: '/icons/linkedin_white.svg',
        name: 'linkedin',
      },
    ],
  },
};
