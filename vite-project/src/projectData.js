import homegrown from './assets/homegrown.png';
import canele from './assets/canele.png';
import weatherwidget from './assets/weatherwidget.png';
import projectmatch from './assets/projectmatch.png';
import faith from './assets/faith.png';
import portfoliov1 from './assets/portfoliov1.png'


export const portfolioData = [
    {
      img: homegrown ,
      title: "Home-Grown",
      desc: "As part of my final project in the School of Code bootcamp, I worked with my team developed an app to empower positive action on climate change, cost of living, and lack of community. Our app offers guidance and resources for a sustainable, self-sufficient, and community-oriented future.",
      url: "https://home-grown-front-stretch.vercel.app/",
      repo: "https://github.com/edmundsamina/home-grown-front-stretch.git",
      featured: true,
      tags: ['Postgres SQL', 'CSS', 'JavaScript', 'Firebase', 'Node.JS', 'Responsive', 'Next.JS', 'Restful APIs']
    },
    
    {
      img:  faith ,
      title: "Faith Pottery",
      desc: "I paired with a colleague during a School of Code hackathon to build my first app with TypeScript - a weather app using a 3rd party API. The project let us practice fetching data, conditional rendering, and deepen our TypeScript skills. See the weather where you are by clicking below",
      url: "https://faith-pottery.netlify.app/",
      repo: "https://github.com/edmundsamina/faith-pottery-website",
      featured: false, 
      tags: ['JavaScript', 'React', 'CSS', 'Vite', 'Supabase', 'Collaboration', 'Web Only', 'E-commerce']

    },
   

    {
      img:  portfoliov1 ,
      title: "Portfolio V1",
      desc: "For my first group project at the School of Code, we built a social platform to help new coders connect and collaborate. I've since revisited the project to overhaul the design and add new features.You can checkout the original MVP in the github readMe! Otherwise checkout the redesign via the live link.",
      url: "https://amina-edmunds.netlify.app/",
      repo: "https://github.com/edmundsamina/personal-portfolio",
      featured: true, 
      tags: ['React', 'CSS', 'JavaScript', 'Node.JS', 'CRA', 'side project']

    },
    {
      img:  projectmatch ,
      title: "Project Match",
      desc: "For my first group project at the School of Code, we built a social platform to help new coders connect and collaborate. I've since revisited the project to overhaul the design and add new features.You can checkout the original MVP in the github readMe! Otherwise checkout the redesign via the live link.",
      url: "https://project-match.netlify.app/",
      repo: "https://github.com/edmundsamina/PROJECT-MATCH.git",
      featured: false, 
      tags: ['Postgres SQL', 'CSS', 'JavaScript', 'Node.JS', '1 Week Sprint','Restful APIs', 'Group Project']

    },
    {
      img: canele,
      title: "Canele Bakery",
      desc: "I worked on this small side project with a partner for one week. Our goals were to review the use of useContext, React Router, caching, and persisting state while learning about MongoDB. Our MVP functions well and incorporates delightful user experiences like a loader when filtering bakery items.",
      url: "https://canele-bakery.netlify.app/",
      repo: "https://github.com/edmundsamina/CANELE-BAKERY.git",
      featured: false,
      tags: ['JavaScript', 'React', 'MongoDB', 'CSS', 'Local Storage', 'Web Only', 'Node.JS', 'Side Project', 'Pair Programming']

    },
    
    {
      img:  weatherwidget ,
      title: "Weather Widget",
      desc: "I paired with a colleague during a School of Code hackathon to build my first app with TypeScript - a weather app using a 3rd party API. The project let us practice fetching data, conditional rendering, and deepen our TypeScript skills. See the weather where you are by clicking below",
      url: "https://pastel-weather-widget.netlify.app/",
      repo: "https://github.com/edmundsamina/bc13_w12d5_hackathon_react-typescript-amina-em.git",
      featured: false, 
      tags: ['TypeScript', 'APIs', 'CSS', 'Web Only', 'Hackathon', 'Pair Programming']

    }

]