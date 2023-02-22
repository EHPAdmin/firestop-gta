import { getPermalink, getBlogPermalink,  getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Firestopping',
      links: [
        {
          text: 'Types of firestopping',
          href: '/#products',
        },
        {
          text: 'Recommended products',
          href: '/#common',
        },
        {
          text: 'Firestop training',
          href: '/firestop-training',
        },
      ],
    },{
      text: 'About',
      links: [
        {
          text: 'About us',
          href: '/about',
        },
        {
          text: 'Contact',
          href: '/about#contact',
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Learn',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    { type: 'button', text: 'Shop now', href: 'https://ehp.ca/search?q=firestop' }
  ],
};
  
export const footerData = {
  links: [
    {
      title: 'Firestopping',
      links: [
        { text: 'Types of firestopping', href: '/#products' },
        { text: 'Recommended products', href: '/#common' },
        { text: 'Firestop training', href: '/firestop-training' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '/about' },
        { text: 'Contact', href: '/about#contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  // socialLinks: [
  //   { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
  //   { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  //   { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  //   { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  //   { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  // ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://garretthofland.info/"> Garrett Hofland</a> · All rights reserved.
  `,
};

/*  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,*/ 
