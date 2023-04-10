import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    c_icon,
    java,
    tailwind,
    nodejs,
    git,
    figma,
    apinews,
    storefront,
    clone,
    threejs,
    apinewsVideo
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contactme",
      title: "Contact Me",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "C++",
      icon: c_icon,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }
  ];
  
  const experiences = [
    {
      title: " ",
      company_name: " ",
      icon: " ",
      iconBg: " ",
      date: " ",
      points: [
        " ",
      ],
    },
    {
      title: " ",
      company_name: " ",
      icon: " ",
      iconBg: " ",
      date: " ",
      points: [
        " ",
      ],
    },
    {
      title: " ",
      company_name: " ",
      icon: " ",
      iconBg: " ",
      date: " ",
      points: [
        " ",
      ],
    },
    {
      title: " ",
      company_name: " ",
      icon: " ",
      iconBg: " ",
      date: " ",
      points: [
        " ",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        " ",
      name: " ",
      designation: " ",
      company: " ",
      image: " ",
    },
    {
      testimonial:
        " ",
      name: " ",
      designation: " ",
      company: " ",
      image: " ",
    },
    {
      testimonial:
        " ",
      name: " ",
      designation: " ",
      company: " ",
      image: " ",
    },
  ];
  
  const projects = [
    {
      name: "News API",
      description:
        "Web app displaying news reports on Tech, Business, Finance, and Science from apinews.org. Built with React, Tailwind CSS, fetch, promises, hooks, and Vite. Video tutorial included due to apinews.org's restrictions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: apinews,
      message: "Watch",
      source_code_link: "https://github.com/andrewsegovia00/News_API",
      website_link: apinewsVideo,
    },
    {
      name: "Game-On",
      description:
        "An e-commerce site powered by Stripe API, showcasing a variety of videogame products. Customers can effortlessly add and checkout items, which updates using Next.js. The website accepts secure payments via Stripe. Built with: Tailwind CSS, TypeScript & Next.js. Hosted on Netlify.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "stripeapi",
          color: "green-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
        {
        name: "next.js",
        color: "blue-text-gradient",
      },
      ],
      image: storefront,
      message: "Visit",
      source_code_link: "https://github.com/andrewsegovia00/ecommerceShop",
      website_link: "https://sunny-travesseiro-feb150.netlify.app/",
    },
    {
      name: "In Progress - Text / Audio ChatRoom",
      description:
        // "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        "",
      tags: [
        {
          name: "coming soon",
          color: "blue-text-gradient",
        },
        // {
        //   name: "coming soon",
        //   color: "pink-text-gradient",
        // },
      ],
      image: clone,
      message: "Coming Soon",
      source_code_link: "https://github.com/",
      website_link: " ",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };