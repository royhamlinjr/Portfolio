import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaReact, FaLaptopCode, FaServer, FaTools } from 'react-icons/fa';
import { BsBriefcaseFill } from 'react-icons/bs';
import { BiFileBlank } from 'react-icons/bi';
import { SiDjango, SiPostgresql, SiTailwindcss } from 'react-icons/si';
import { MdWork, MdArticle } from 'react-icons/md';

export const DEMO_PROJECTS = [
  {
    id: 1,
    title: 'Django React Job Portal',
    description:
      'A full-stack job portal with Django REST Framework backend and React frontend. Features user registration, login, job listings, job applications, and session management.',
    url: '',
    repo: 'https://github.com/royhamlinjr/Job-portal',
    tags: ['Python', 'Django REST', 'React', 'Tailwind CSS', 'PostgreSQL'],
    tagColors: ['purple', 'green', 'pink', 'purple', 'green'],
    banner: 'linear-gradient(135deg, #1a2a3a 0%, #0a101a 100%)',
    icon: (
      <img 
        src="/job_portal_alt_2_1773126120485.png" 
        alt="Job Portal Logo" 
        style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 15px rgba(0, 242, 254, 0.3))' }} 
      />
    ),
  },
  {
    id: 2,
    title: 'Content Management Blog System',
    description:
      'A full-stack blog platform built with Django MVT architecture. Features relational database models, slug-based URLs, search, and responsive frontend.',
    url: '',
    repo: 'https://github.com/royhamlinjr/Blog_App',
    tags: ['Django', 'MySQL', 'Bootstrap', 'HTML/CSS'],
    tagColors: ['green', 'pink', 'purple', 'green'],
    banner: 'linear-gradient(135deg, #2a1a2a 0%, #1a0a10 100%)',
    icon: (
      <img 
        src="/blog_app_alt_1_1773126139166.png" 
        alt="Blog App Logo" 
        style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 15px rgba(244, 114, 182, 0.3))' }} 
      />
    ),
  },
];


export const DEMO_EXPERIENCES = [
  {
    id: 1,
    role: 'Full Stack Web Development Intern',
    company: 'AK Infopark, Nagercoil',
    start_date: '2024-07-01',
    end_date: '2024-08-31',
    description:
      'Developed full-stack web applications using Django and React. Designed and implemented RESTful APIs for CRUD operations. Structured relational databases using MySQL with optimized queries. Built reusable and responsive UI components using Bootstrap. Used Git for version control and collaborative development.',
  },
  {
    id: 2,
    role: 'Python Intern',
    company: 'Keltron, Thiruvananthapuram',
    start_date: '2023-09-01',
    end_date: '2023-09-30',
    description:
      'Applied core Python concepts including OOP, functions, and file handling. Debugged and optimized Python scripts for improved performance. Assisted in implementing logic-based problem-solving tasks.',
  },
];

export const SKILLS = [
  {
    icon: <FaLaptopCode />,
    title: 'Frontend Development',
    tags: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'HTML5/CSS3'],
    colorClass: '',
  },
  {
    icon: <FaServer />,
    title: 'Backend & Databases',
    tags: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'MySQL'],
    colorClass: 'green',
  },
  {
    icon: <FaTools />,
    title: 'Workflow & Tools',
    tags: ['Git & GitHub', 'Postman', 'Vite', 'API Integration', 'Session Auth'],
    colorClass: 'pink',
  },
];

export const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];
