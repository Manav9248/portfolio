// Skills Section Logo's

// frontend part logo
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';

// backend part logo
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

// programming language
import javascriptLogo from './assets/tech_logo/javascript.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';

// tools
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import freelance from './assets/company_logo/freelancer-logo.png';

// Education Section Logo's
import ignou from './assets/education_logo/ignou.png'
import lbs from './assets/education_logo/lbs.png'


// Project Section Logo's
import github_project_logo from './assets/work_logo/github_ss.png';
import vastracraft from './assets/work_logo/vastracraft_project_ss.png'
import imagesearchLogo from './assets/work_logo/image_search.png';

// My CV Link
export const cv = "https://drive.google.com/file/d/1Knt9LRTseqzyq8luFdcsyyP7fhOZdcX8/view?usp=sharing"

// Social Media
export const socialMedia = {
  linkedin : "https://www.linkedin.com/in/manav-pal-674095252", // linkedin link
  github : "https://github.com/Manav9248", // github link
}

// skills section
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

// experience section
  export const experiences = [
    {
      id: 0,
      img: ignou,
      role: "Fullstack Engineer",
      company: "Online College Community Portal",
      date: "March 2025 - May 2025",
      desc: "I created a web-based platform for students and faculty to communicate, share resources, and collaborate on events or academic discussions. The portal included features like a notice board, chat rooms, event calendars, and document sharing. This project helped me gain hands-on experience with front-end development, user authentication, and real-time data management.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
        "Nodejs",
        "MongoDB",
        "Expressjs",
      ],
    },
    {
      id: 1,
      img: freelance,
      role: "Fullstack Developer",
      company: "Freelance",
      date: "April 2024 - July 2024",
      desc:"Collaborated with a teammate to develop the front-end of a client's website through a freelance project. Designed and implemented responsive, user-friendly UI components that aligned with the client's vision. Successfully delivered the project on time, resulting in high client satisfaction and positive feedback.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        "Next Js",
      ],
    },
  ];
  
  // education section
  export const education = [
    {
      id: 0,
      img: ignou,
      school: "Indira Gandhi International Open University, New Delhi",
      date: "Jan 2023 - Dec 2025",
      grade: "7.81 CGPA",
      desc: "I completed my Bachelor's degree (BCA) in Computer Applications from IGNOU University, New Delhi. During my studies, I built a strong foundation in programming, software development, and core computer science principles. I covered subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I also actively participated in workshops and technical events, which helped enhance my practical skills and broaden my knowledge. My academic journey at IGNOU played a key role in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Computer Applications (BCA)",
    },
    {
      id: 1,
      img: lbs,
      school: "Lal Bahadur Shastri School",
      date: "Apr 2021 - March 2022",
      grade: "88%",
      desc: "I completed my Class 12 education at Lal Bahadur Shastri School, New Delhi (CBSE board), where I studied Arts with a focus on Economics and Computer Science.",
      degree: "CBSE (Class XII), Arts with Economics and Computer Science",
    },
    {
      id: 2,
      img: lbs,
      school: "Lal Bahadur Shastri School",
      date: "Apr 2019 - March 2020",
      grade: "87.5%",
      desc: "I completed my Class 10 education at Lal Bahadur Shastri School, New Delhi (CBSE board), with a focus on Science and Computer Applications.",
      degree: "CBSE (Class X), Science with Computer Applications",
    },
  ];
  
  // project section
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: github_project_logo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Tailwind Css"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
   {
      id: 1,
      title: "VastraCraft",
      description:
        "VastraCraft is a modern and responsive eCommerce website designed specifically for clothing and fashion products. Built with a clean user interface and robust functionality, the platform offers a seamless shopping experience for users across all devices.",
      image: vastracraft,
      tags: ["React JS", "Tailwind Css", "HTML", "CSS", "API"],
      github: "https://codingmasterweb.in/",
      webapp: "https://ecommerce-project-lake-eight.vercel.app/",
    },
    {
      id: 2,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
  ];  