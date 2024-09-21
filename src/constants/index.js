import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  pmlogo,
  java,
  python
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Project Management',
    icon: pmlogo,
  },
  {
    title: 'AI Integration',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'Responsive Tech Solutions',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Oct 2018 - Aug 2019',
  },
  {
    title: 'Software Engineer',
    company_name: 'Nerubia/Idearobin',
    icon: microverse,
    iconBg: '#333333',
    date: 'Dec 2019 - July 2020',
  },
  {
    title: 'Web Developer',
    company_name: 'Inkshared Solutions',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Sept 2020 - Sept 2021',
  },
  {
    title: 'Team Leader / Full Stack Developer',
    company_name: 'Hipe Japan Inc.',
    icon: dcc,
    iconBg: '#333333',
    date: 'April 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'IMS',
    description: 'A inventory management system, that monitors their stocks and sales.',
    tags: [
      {
        name: 'php',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'jquery',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: '',
    demo: '',
  },
  {
    id: 'project-2',
    name: 'BMS',
    description:
      'An airport bus management system. It manages bus availability and schedule',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'green-text-gradient',
      },
      {
        name: 'docker',
        color: 'pink-text-gradient',
      },
      {
        name: 'aws',
        color: 'pink-text-gradient',
      },
      {
        name: 'microservices',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: '',
    demo: '',
  },
  {
    id: 'project-3',
    name: 'Landing Page',
    description: 'This is an Authors Book landing page, that helps them market their books and stories from different platforms like Goodreads, Amazon, etc. ',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'graphql',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
      {
        name: 'gatsby',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: '',
    demo: '',
  },
  {
    id: 'project-4',
    name: 'Bakpack',
    description: `A e-commerce capstone project, that will ell school supplies to students that in need of a supply ASAP`,
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
      {
        name: 'firebase',
        color: 'pink-text-gradient',
      },
      {
        name: 'reactnative',
        color: 'pink-text-gradient',
      }
    ],
    image: movie,
    repo: 'https://github.com/undesputed/BackPack.git',
    demo: 'https://github.com/undesputed/BackPack.git',
  },
  {
    id: 'project-5',
    name: 'Packaters',
    description:
      'A capstone project for mobile online reservation management system for catering services.',
    tags: [
      {
        name: 'reactnative',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'meterialui',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/undesputed/packaters',
    demo: 'https://github.com/undesputed/packaters',
  },
  {
    id: 'project-6',
    name: 'Hiverooms',
    description:
      'A centralized web system for hotel rooms and resorts from different platforms like airbnb, booking.com, etc',
    tags: [
      {
        name: 'php',
        color: 'blue-text-gradient',
      },
      {
        name: 'laravel',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: '',
    demo: '',
  },
  {
    id: 'project-7',
    name: 'LMS',
    description:
      'A laboratory management system, that manages patients and patients lab test results and transactions.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'expressjs',
        color: 'pink-text-gradient',
      },
      {
        name: 'aws',
        color: 'pink-text-gradient',
      },
      {
        name: 'redux',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/undesputed/lms',
    demo: 'https://github.com/undesputed/lms',
  },
  {
    id: 'project-8',
    name: 'xntral',
    description:
      'A hospital management system, that manages from patient, staffs, nurses and doctors. Handles multiple hospitals the can be centralized in 1 application.',
    tags: [
      {
        name: 'nuxtjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'expressjs',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: '',
    demo: '',
  },
  {
    id: 'project-9',
    name: 'Tone',
    description:
      'A construction management system, that manages construction suppliers, stocks and supply description from different suppliers. ',
    tags: [
      {
        name: 'reactts',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'java',
        color: 'pink-text-gradient',
      },
      {
        name: 'ec2',
        color: 'pink-text-gradient',
      },
      {
        name: 'java',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: '',
    demo: '',
  },
  {
    id: 'project-10',
    name: 'E-Learning',
    description:
      'E Learning for students that handle online exams, grading, and attendance, professors availability, etc',
    tags: [
      {
        name: 'reactts',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'java',
        color: 'pink-text-gradient',
      },
      {
        name: 'ec2',
        color: 'pink-text-gradient',
      },
      {
        name: 'java',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: '',
    demo: '',
  },
  {
    id: 'project-11',
    name: 'Automation',
    description:
      'An accounting automation, that will automatically sync data from Salesforce to the system, and let AI matched the whole process.',
    tags: [
      {
        name: 'nuxtjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'java',
        color: 'pink-text-gradient',
      },
      {
        name: 'ec2',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: '',
    demo: '',
  },
];

export { services, technologies, experiences, projects };
