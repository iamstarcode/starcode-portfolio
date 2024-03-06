import { IProject } from '../types';

import { siteConfig } from '@/config/site';

const projects: IProject[] = [
  {
    id: 'my-portfolio',
    title: 'iamstarcode.com',
    subtitle: 'My portfolio website',
    about:
      'This website, where I dump some of the works have worked on, and where I test out new things',
    link: '/projects/my-portfolio',
    live_url: '#',
    platforms: ['WEB'],
    year: '2022',
    color: '#722ed1',
    stack: ['React', 'Next', 'TailwindCSS'],
    cover: '/img/projects/portfolio-cover.png',
    images: [
      '/img/projects/portfolio-cover.png',
      '/img/projects/portfolio-0.png',
    ],
    repo: 'https://github.com/iamstarcode/starcode-portfolio',
  },

  {
    id: 'kings-card',
    title: 'Kings Card',
    subtitle: 'Gift card trading platform',
    about:
      'Kingscard is one of the most trusted online trading platforms in Nigeria',
    link: '/projects/kings-card',
    live_url: 'https://kingcards.ng',
    platforms: ['WEB', 'MOBILE'],
    year: '2022',
    color: 'rgb(29 78 216)',
    stack: ['React', 'Next', 'TailwindCSS'],
    cover: '/img/projects/kingscard-cover.png',
    images: ['/img/projects/kingscard-cover.png'],
    repo: null,
  },

  {
    id: 'petly',
    title: 'Petly',
    subtitle: 'Pets app',
    about: 'A simple website consuming a Pets API',
    link: '/projects/petly',
    live_url: `https://petly.${siteConfig.links.site}`,
    platforms: ['WEB'],
    year: '2021',
    color: `#0D75FF`,
    stack: ['React', 'TailwindCSS'],
    cover: '/img/projects/petly-cover.png',
    images: ['/img/projects/petly-cover.png', '/img/projects/petly-0.png'],
    repo: 'https://github.com/iamstarcode/petly-react',
  },

  {
    id: 'cat-wiki',
    title: 'Cat Wiki',
    subtitle: 'For the love of cats',
    about: 'A cats API consumption using Laravel as backend',
    link: '/projects/cat-wiki',
    live_url: 'cat-wiki.iamstarcode.com',
    platforms: ['WEB'],
    year: '2021',
    color: `#291507`,
    stack: ['React', 'TailwindCSS', 'Laravel'],
    cover: '/img/projects/cat-wiki-cover.png',
    images: [
      '/img/projects/cat-wiki-cover.png',
      '/img/projects/cat-wiki-0.png',
    ],
    repo: 'https://github.com/iamstarcode/cat-wiki',
  },
  {
    id: 'wordlens',
    title: 'Wordlens',
    subtitle: 'A simple dictionary',
    about: 'A simple dictionary using dictionary API',
    link: '/projects/wordlens',
    live_url: `https://wordlens.${siteConfig.links.site}`,
    platforms: ['WEB'],
    year: '2021',
    color: `#000000`,
    stack: ['TailwindCSS'],
    cover: '/img/projects/wordlens-cover.png',
    images: [
      '/img/projects/wordlens-cover.png',
      '/img/projects/wordlens-0.png',
    ],
    repo: 'https://github.com/iamstarcode/wordlens',
  },

  {
    id: 'frontend-mentor-e-commerce',
    title: 'Product Page',
    subtitle: 'An e-commerce product page',
    about: 'A frontendmentor.com challenge written in Vue',
    link: '/projects/frontend-mentor-e-commerce',
    live_url: 'starcode-dev.netlify.app/e-commerce',
    platforms: ['WEB'],
    year: '2021',
    color: '#ff7d1a',
    stack: ['Vue', 'TailwindCSS'],
    cover: '/img/projects/frontend-mentor-e-commerce-cover.png',
    images: ['/img/projects/frontend-mentor-e-commerce-cover.png'],
    repo: 'https://github.com/iamstarcode/e-commerce',
  },

  {
    id: 'space-tourism',
    title: 'Landing Page',
    subtitle: 'A space tourism landing page',
    about: 'A frontendmentor.com challenge written in Nuxt',
    link: '/projects/space-tourism',
    live_url: 'https://starcode-space-tourism.netlify.app',
    platforms: ['WEB'],
    year: '2021',
    color: '#0b0d19',
    stack: ['Vue', 'TailwindCSS'],
    cover: '/img/projects/space-tourism-cover.png',
    images: ['/img/projects/space-tourism-cover.png'],
    repo: 'https://github.com/iamstarcode/space-tourism',
  },
];

export default projects;
