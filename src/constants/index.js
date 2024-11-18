export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 4,
      name: 'Contact',
      href: 'mailto:afelixjdev@gmail.com',
    },
    
  ];
  
  export const myProjects = [
    {
      title: 'codePal',
      desc: "In this project, we aimed to streamline connections between developers and clients by creating an app that allows clients to contact developers, leave reviews, view portfolios, and request software engineering services. Prospective employers can access authentic candidate reviews and connect with them. Additionally, we used AWS to store the images associated with the developers' portfolios and reviews, ensuring efficient and reliable data management",
      subdesc:
        'Developed as a streamlined Software-as-a-Service platform using Node.js, Express, MongoDB, and React, codePal connects developers and clients with intuitive features like portfolio showcases, client reviews, and service requests, delivering a seamless user experience.',
      href: 'https://dev--jovial-macaron-61c636.netlify.app/;', 
      texture: '/textures/project/project1.mp4',
      logo: '/assets/codePal.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'NodeJs',
          path: 'assets/nodejs.png',
        },
        {
          id: 3,
          name: 'Express',
          path: '/assets/express.png',
        },
        {
          id: 4,
          name: 'Mongo Db',
          path: '/assets/mongodb.png',
        },
      ],
    },
    {
      title: 'GSAP Demo',
      desc: 'The iPhone 15 Recreation Site is an interactive web app that emulates iPhone-like animations through GSAP, featuring animated transitions and app-like interactions. Hosted on Hostinger and integrated with Sentry for data-driven error tracking and analytics, it&apos;s a hands-on project for practicing animation and frontend techniques. I&apos;m currently adding authentication and other personal touches to enhance its functionality and interactivity.',
      subdesc:
        'Built with HTML, CSS, JavaScript, and GSAP, this project incorporates Sentry for error tracking and is hosted on Hostinger.',
      href: 'https://gsapdemo.antoniofelix.org/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/iphoneapplogo.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'GSAP',
          path: '/assets/gsap.png',
        },
        {
          id: 2,
          name: 'Javascript',
          path: 'assets/js.png',
        },
        {
          id: 3,
          name: 'HTML',
          path: '/assets/html.png',
        },
        {
          id: 4,
          name: 'CSS',
          path: '/assets/css.png',
        },
      ],
    },
    {
      title: 'Recipe Mundo',
      desc: 'This application utilizes React and an external API from The MealDB to provide users with a convenient way to search for recipes!',
      subdesc:
        'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
      href: 'https://recipemundo.netlify.app/;',
      texture: '/textures/project/recipeMundo.png',
      logo: '/assets/recipemundo.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
       
        {
          id: 1,
          name: 'Javascript',
          path: 'assets/js.png',
        },
        {
          id: 2,
          name: 'HTML',
          path: '/assets/html.png',
        },
        {
          id: 3,
          name: 'CSS',
          path: '/assets/css.png',
        },
      ]
    },
    {
      title: 'meNu',
      desc: ' This application enables users to register, log in, and share culinary recipes with a community. Users can add their own recipes, leave comments on recipes shared by others, and explore new dishes. The platform also includes a YouTube integration, which automatically searches for a recipe video based on the name of the dish. Logged-in users can access their own recipes, edit them, and manage them through a personalized dashboard.',
      subdesc:
        'The app is built using the MERN stack (MongoDB, Express, React, Node.js) for a dynamic user experience, with MongoDB for data storage, Express and Node.js for server-side logic, React for the front-end, and YouTube API integration for fetching recipe videos.',
      href: 'https://socialmenunyc.netlify.app/;',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/meNu.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'Pokedex',
      desc: 'This Pokedex application helps you find basic information about any Pokémon in the Pokémon universe! It allows users to search for Pokémon by name or ID and provides details such as type, abilities, stats, and more. Currently, I&apos;m enhancing the user experience by adding smooth GSAP animations and 3D effects to make navigating the Pokedex more engaging and interactive.',
      subdesc:
        'The Pokedex app is built using HTML, CSS, and JavaScript. It fetches Pokémon data through the PokeAPI and dynamically displays it. Future enhancements will include integrating GSAP animations for smoother transitions and Three.js for 3D effects to elevate user interaction.',
      href: 'https://afelixj89.github.io/Pokedex/',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/pokemon.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'GSAP',
          path: '/assets/gsap.png',
        },
        {
          id: 2,
          name: 'Javascript',
          path: 'assets/js.png',
        },
        {
          id: 3,
          name: 'HTML',
          path: '/assets/html.png',
        },
        {
          id: 4,
          name: 'CSS',
          path: '/assets/css.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -7, 0] : isTablet ? [5, -7, 0] : [7, -7.8, 0],
      reactLogoPosition: isSmall ? [2, 4, 0] : isMobile ? [6, 6, 0] : isTablet ? [6,7, 0] : [8, 7, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 14, 0] : [-16, 14, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-9, -6, -10] : [-13, -12, -10],
    };
  };
  
