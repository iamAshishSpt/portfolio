const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 25, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Native Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Android/IOS Developer",
    modelPath: "/models/androidios.glb",
    scale: 0.6,
    rotation: [Math.PI / 2, 0, 0],
  },
  {
    name: "Web Developer",
    modelPath: "/models/webdeveloper.glb",
    scale: 0.6,
    rotation: [Math.PI / 2, 0, 0],
  },
  {
    name: "Backend & API Integration",
    modelPath: "/models/backend_api.glb",
    scale: 1.5,
    rotation: [Math.PI / 2, 0, 0],
  },
  {
    name: "B.A & Project Coordinator",
    modelPath: "/models/ba.glb",
    scale: 1.5,
    rotation: [Math.PI / 2, 0, 0],
  },
];

const expCards = [
  {
    review: "Ashish's ability to build full-featured mobile apps using both React Native and native technologies has been instrumental in bringing our ideas to life. His attention to detail and ability to integrate third-party tools like Stripe and Google Maps helped us launch with confidence.",
    imgPath: "/images/nepride.png",
    companyName: "NepRide",
    logoPath: "/images/nepLogo.png",
    title: "React Native Developer",
    date: "2021 - 2023",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
  {
    review: "Ashish brought a strong foundation in native development that proved invaluable. His ability to deliver consistent and smooth Android app experiences is exceptional.",
    imgPath: "/images/luniva.png",
    companyName: "LunivaCare",
    logoPath: "/images/care.png",
    title: "Android Developer",
    date: "2020 - 2021",
    responsibilities: [
      "Built the LunivaCare Android app with features like appointment booking, test scheduling, prescription uploads, and health record management.",
      "Used Java, SQLite, Retrofit, RxJava, and Firebase Cloud Messaging (FCM) to build a reliable health platform.",
      "Implemented Google Maps & Open Street Map APIs for location-based hospital discovery",
      "Delivered optimized UI with Android Jetpack Components (Fragments, RecyclerView, SearchView)",
    ],
  },
  {
    review: "Ashish's communication and analytical skills made him an excellent Business Analyst. He streamlined our requirements process and ensured technical teams were aligned with client needs.",
    imgPath: "/images/three.webp",
    companyName: "Three Monks",
    logoPath: "/images/threemonks.png",
    title: "Business Analyst",
    date: "2018 - 2020",
    responsibilities: [
      "Collected and analyzed client requirements for software products.",
      "Created comprehensive UML diagrams, wireframes, and functional requirement documents.",
      "Documented RESTful APIs and worked closely with development teams to ensure deliverables matched expectations.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Rajiv Singh",
    mentions: "Client",
    review:
      "Working with Ashish on our Android health app was a pleasure. He delivered robust features on time and communicated effectively throughout the project.",
    imgPath: "/images/person.png",
  },
  {
    name: "Neha Sharma",
    mentions: "Project Manager",
    review:
      "Ashish was instrumental in delivering a seamless React Native app that exceeded our expectations. His technical skills and problem-solving attitude were outstanding.",
    imgPath: "/images/person.png",
  },
  {
    name: "Madev Nepal",
    mentions: "CTO",
    review:
      "Ashish's expertise in backend integration and API development made our app scalable and reliable. Highly recommend him for any mobile or full-stack project.",
    imgPath: "/images/person.png",
  },
  {
    name: "Suresh Adhikari",
    mentions: "Team Lead",
    review:
      "His attention to detail and dedication to quality transformed our outdated website into a modern, user-friendly platform. Ashish is a top-notch developer.",
    imgPath: "/images/person.png",
  },
  {
    name: "Suman Gurung",
    mentions: "Client",
    review:
      "Ashish's professionalism and technical expertise helped us launch a complex ride-hailing app with ease. He's a dependable and talented developer",
    imgPath: "/images/person.png",
  },
  {
    name: "Ramesh Shrestha",
    mentions: "Product Owner",
    review:
      "Ashish has excellent communication skills and a strong work ethic. He managed both frontend and backend tasks with efficiency and great results",
    imgPath: "/images/person.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link: "#"
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    link: "#"
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    link: "https://twitter.com/iamashishspt"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/ashishsapkota/"
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
