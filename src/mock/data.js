import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Diego', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Diego',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'my-spotify.png',
    title: 'My Spotify',
    info: '',
    info2: '',
    url: 'https://myspotify-306523.ew.r.appspot.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'npl-sandbox.png',
    title: 'NLP Sandbox',
    info: 'Streamlit app to experiment with some NLP basics. You can start with basic techniques like Bag of Words or TF-IDF or try a complex Word2Vec model',
    info2: '',
    url: 'https://share.streamlit.io/diegoglozano/nlp-sandbox/main.py',
    repo: 'https://github.com/diegoglozano/nlp-sandbox', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'stocks-dashboard.png',
    title: 'Stocks Dashboard',
    info: 'Streamlit app to check your favourite stocks and their prices',
    info2: '',
    url: 'https://share.streamlit.io/diegoglozano/stocks-dashboard/main/main.py',
    repo: 'https://github.com/diegoglozano/stocks-dashboard', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's contact!",
  btn: 'Send an e-mail',
  email: 'diegoglozano96@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/diegoglozano/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/diegoglozano',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
