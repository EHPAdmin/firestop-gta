import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'AstroWind',

  origin: 'https://astrowind.vercel.app',
  basePathname: '/',
  trailingSlash: false,

  title: 'GTA Firestop',
  description:
    'Welcome to FireStop Solutions, your one-stop-shop for all your firestopping needs in the Greater Toronto Area! Our company specializes in providing high-quality firestop products and services to ensure the safety and protection of your commercial, industrial, or residential property. With over 20 years of industry experience, our team of experts is dedicated to providing you with the best possible solutions that meet your specific requirements and budget. From fire-rated sealants and coatings to firestop systems and smoke barriers, we offer a wide range of products from leading manufacturers to ensure that your property is always up to code and protected against fire hazards. Contact us today to learn more about our products and services, and let us help you safeguard your property against the threat of fire!',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',

  blog: {
    disabled: true,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
