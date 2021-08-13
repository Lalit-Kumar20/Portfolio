import {
  nanoid
} from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Lalit Kumar', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Lalit Kumar',
  subtitle: 'Software Developer',
  subtitle2: 'Android App Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne: "I'm Lalit Kumar. I'm a final year computer science engineering student at NIT Hamirpur.",
  paragraphTwo: "I like solving challenging coding problems.",
  paragraphThree: "Apart from coding, I like listening music, playing basketball and badminton.",
  resume: 'https://drive.google.com/drive/u/2/folders/1KmhRs7rNqs-1wqSqGWuSK8ExkYms1Hhn', 
};

// PROJECTS DATA
export const projectsData = [{
    id: nanoid(),
    img: 'projectRail.jpg',
    title: 'Online Railway Ticket Booking System',
    info: 'A simple website where user can book train tickets, implemented functionalities like cancelling, verifying ticket.Implemented authentication through passport js.',
    info2: 'Tech. Used : Mongodb, NodeJs,HTML,CSS,JS,ExpressJs,Mongoose',
    url: '',
    repo: 'https://github.com/Lalit-Kumar20/Online-Railway-Ticket-Booking', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projectHand.jpg',
    title: 'HandMade Creations',
    info: 'A simple e-commerce website where user can buy hand made products.',
    info2: 'Tech. Used : Mongodb, NodeJs,HTML,CSS,JS,ExpressJs,Mongoose',
    url: '',
    repo: 'https://github.com/Lalit-Kumar20/E-Commerce', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projectApp.jpg',
    title: 'Todo App',
    info: 'A simple app where you can add your tasks and update/delete them if necessary.',
    info2: 'Tech. Used : Kotlin, sqlite database',
    url: '',
    repo: 'https://github.com/Lalit-Kumar20/My-Notes-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projectExam.jpg',
    title: 'Online Examination System',
    info: 'A website for conducting exams online. Teachers can create a test/exam and a unique testId will be generated. Thid id is used by students to join a test/exam. After givig test teacher can check each student answers and can give marks.',
    info2: 'Tech. Used : Mongodb, NodeJs,HTML,CSS,JS,ExpressJs,Mongoose',
    url: '',
    repo: 'https://github.com/Lalit-Kumar20/Online_Examination', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'lalitk2282k@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lalit-kumar-5b80b8170/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Lalit-Kumar20',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};