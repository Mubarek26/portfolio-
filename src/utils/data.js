import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design and Development",
    projects: 12,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design and Development",
    projects: 15,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 13,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I’m here to assist you in finding solutions and addressing your challenges. ",
  "We leverage process design to create digital products that not only solve your problems but also elevate your business.",
];

export const workExp = [
  {
    place: "Self-Employed, ",
    tenure: "Aug 2014 - Sep 2016",
    role: "Web Designer and Developer",
    detail:
      "A web designer brings ideas to life across a variety of platforms—websites, games, movies, kiosks, and even wearables. In a nutshell, they’re the creative minds crafting the concepts that shape our digital experiences. 🌐✨",
  },
  {
    place: "UP WORK",
    tenure: "Aug 2014 - Sep 2016",
    role: "Front-end Developer",
    detail:
      "A front-end developer brings ideas to life across diverse platforms—websites, apps, and even interactive kiosks. They’re the ones crafting the visuals and user interactions. 🎨🖥️✨",
  },
  {
    place: "Freelancer",
    tenure: "Aug 2014 - Sep 2016",
    role: "Mobile App Development",
    detail:
      "A mobile app developer brings ideas to life on the go—creating apps for smartphones, tablets, and wearables. They’re the ones building seamless and interactive experiences. 📱🚀✨",
  },
];

export const comments = [
  {
    name: "Abreham Shimekit",
    post: "Creative Manager",
    comment:
      "Mubarek did an amazing job on our front-end design! The site looks fantastic and is super easy to navigate—exactly what we needed!.",
    img: "./abreham.jpg",
  },
  {
    name: "Abdulkerim Jemal",
    post: "Creative Manager",
    comment:
      " Mubarek transformed our website's front-end with a stunning, user-friendly design that perfectly captured our vision. We're thrilled with the results!.",
    img: "./abduke.jpg",
  },
  {
    name: "Mintesinot Teshale",
    post: "Creative Manager",
    comment:
      "Mubarek's front-end design exceeded our expectations! It's visually striking and user-friendly, making a great impression on our visitors..",
    img: "./minte.jpg",
  },
  {
    name: "Sarah Thompson",
    post: "Creative Manager",
    comment:
      "Mubarek delivered an exceptional front-end design that perfectly balances aesthetics and functionality. Our users love the new look and feel!m.",
    img: "./people1.png",
  },
  {
    name: "David Martinez",
    post: "Creative Manager",
    comment:
      "Mubarek's front-end work is top-notch! The design is clean, modern, and incredibly intuitive, making our website stand out..",
    img: "./people2.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
