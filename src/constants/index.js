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
		review:
			"Ashish continues to excel in building innovative mobile and web applications with modern technologies. His expertise in React Native, TypeScript, and backend integration has been crucial in delivering high-quality solutions.",
		imgPath: "/images/bht-logo.png",
		companyName: "Beyond Himalayan Tech",
		logoPath: "/images/bht-logo.png",
		title: "Frontend Engineer (React and React Native)",
		date: "2025 - Present",
		responsibilities: [
			"Building cross-platform mobile applications using React Native and Expo.",
			"Developing scalable web applications with modern frameworks and technologies.",
			"Collaborating with cross-functional teams to deliver high-quality software solutions.",
		],
	},
	{
		review:
			"Ashish's ability to build full-featured mobile apps using both React Native and native technologies has been instrumental in bringing our ideas to life. His attention to detail and ability to integrate third-party tools like Stripe and Google Maps helped us launch with confidence.",
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
		review:
			"Ashish brought a strong foundation in native development that proved invaluable. His ability to deliver consistent and smooth Android app experiences is exceptional.",
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
		review:
			"Ashish's communication and analytical skills made him an excellent Business Analyst. He streamlined our requirements process and ensured technical teams were aligned with client needs.",
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
		link: "#",
	},
	{
		name: "fb",
		imgPath: "/images/fb.png",
		link: "#",
	},
	{
		name: "x",
		imgPath: "/images/x.png",
		link: "https://twitter.com/iamashishspt",
	},
	{
		name: "linkedin",
		imgPath: "/images/linkedin.png",
		link: "https://www.linkedin.com/in/ashishsapkota/",
	},
];

const projects = [
	{
		id: "real-estate",
		title: "Real Estate App",
		subtitle: "Modern Property Discovery and Management Platform",
		description:
			"A comprehensive real estate mobile application built with Expo and React Native that revolutionizes property discovery and management. The app provides users with an intuitive platform to search, explore, and manage properties with powerful filtering capabilities, seamless authentication, and a beautiful user interface.",
		longDescription:
			"This Real Estate application is a full-featured mobile platform designed to transform how users discover and interact with properties. Built using modern technologies like Expo, React Native, TypeScript, and Appwrite, the app delivers a seamless experience across Android, iOS, and web platforms. The application features a robust architecture with centralized data fetching inspired by TanStack's useQuery, ensuring efficient API calls and optimal performance. With features like Google authentication, advanced search and filtering, property details pages, and user profile management, the app provides everything needed for a complete real estate experience. The codebase emphasizes reusability, maintainability, and scalability, making it a production-ready solution for property management and discovery.",
		mainImage: "/images/realstate-banner.webp",
		images: [
			"/images/realstate-1.png",
			"/images/realstate-2.png",
			"/images/realstate-3.png",
			"/images/realstate-4.png",
			"/images/realstate-5.png",
			"/images/realstate-6.png",
		],
		video: "/images/realstate-video.mp4",
		techStack: [
			"Expo",
			"React Native",
			"TypeScript",
			"Appwrite",
			"NativeWind",
			"Tailwind CSS",
			"Expo Router",
		],
		features: [
			"Authentication with Google: Secure and seamless user sign-ins using Google's authentication service",
			"Home Page: Displays the latest and recommended properties with powerful search and filter functionality",
			"Explore Page: Allows users to browse all types of properties with a clean and intuitive interface",
			"Property Details Page: Provides comprehensive information about individual properties, including images and key details",
			"Profile Page: Customizable user settings and profile management",
			"Centralized Data Fetching: Custom-built solution inspired by TanStack's useQuery for efficient API calls",
			"Code Architecture: Well-structured, reusable components and maintainable codebase",
			"Cross-platform Support: Works seamlessly on Android, iOS, and web platforms",
		],
		challenges: [
			"Implementing efficient data fetching and caching to minimize API calls and improve performance",
			"Creating a scalable architecture that supports multiple property types and complex filtering",
			"Ensuring seamless authentication flow with Google OAuth integration",
			"Building a responsive UI that works across different screen sizes and platforms",
		],
		solutions: [
			"Developed a custom data fetching solution inspired by TanStack Query for centralized API management and caching",
			"Designed a modular component architecture with reusable components for better maintainability",
			"Integrated Appwrite's secure authentication system with Google OAuth for seamless sign-in experience",
			"Used NativeWind and Tailwind CSS for consistent, responsive styling across all platforms",
		],
		year: "2024",
		category: "Mobile App",
	},
	{
		id: "food-ordering",
		title: "Food Ordering App",
		subtitle: "Modern Food Delivery and Ordering Platform",
		description:
			"A comprehensive food ordering mobile application built with Expo and React Native that revolutionizes how users discover, order, and manage food deliveries. The app provides users with an intuitive platform to browse restaurants, search for food items, manage cart, and place orders with seamless authentication and real-time updates.",
		longDescription:
			"This Food Ordering application is a full-featured mobile platform designed to transform the food delivery experience. Built using modern technologies like Expo, React Native, TypeScript, Appwrite, and Zustand, the app delivers a seamless experience across Android, iOS, and web platforms. The application features a robust architecture with efficient state management using Zustand, ensuring optimal performance and smooth user interactions. With features like Google authentication, advanced search and filtering, product details pages, cart management, and user profile management, the app provides everything needed for a complete food ordering experience. The codebase emphasizes reusability, maintainability, and scalability, with error tracking via Sentry for production-ready reliability.",
		mainImage: "/images/foodordering-banner.webp",
		images: [
			"/images/foodordering-1.png",
			"/images/foodordering-2.png",
			"/images/foodordering-3.png",
			"/images/foodordering-4.png",
		],
		video: "/images/foodordering-video.mp4",
		techStack: [
			"Appwrite",
			"Expo",
			"NativeWind",
			"React Native",
			"Tailwind CSS",
			"TypeScript",
			"Zustand",
			"Sentry",
		],
		features: [
			"Google Authentication: Secure and seamless user sign-ins using Google",
			"Home Page: Showcases the latest offers and directs users to filtered search results",
			"Search Page: Lets users explore all foods with category filters and keyword search",
			"Product Details Page: Displays food images, key details, and allows adding items to the cart",
			"Cart Page: Review selected items and see the total price",
			"Profile Page: Manage user settings and preferences",
			"Appwrite Integration: Handles backend database and file storage for food items",
			"Code Architecture: Well-structured, reusable components and maintainable codebase",
		],
		challenges: [
			"Implementing efficient state management for cart and user data across multiple screens",
			"Creating a scalable architecture that supports multiple restaurants and food categories",
			"Ensuring seamless authentication flow with Google OAuth integration",
			"Managing real-time updates for order status and inventory changes",
		],
		solutions: [
			"Leveraged Zustand for minimal, performant state management with selective subscriptions",
			"Designed a modular component architecture with reusable components for better maintainability",
			"Integrated Appwrite's secure authentication system with Google OAuth for seamless sign-in experience",
			"Implemented Sentry for error tracking and performance monitoring to ensure app stability",
		],
		year: "2024",
		category: "Mobile App",
	},
	{
		id: "ryde",
		title: "Ryde",
		subtitle: "Uber Clone - Perfect Mobile App",
		description:
			"Built with React Native for handling the user interface, Google Maps for rendering maps with directions, stripe for handling payments, serverless Postgres for managing databases, and styled with TailwindCSS, Uber Clone is a perfect mobile app.",
		longDescription:
			"Ryde is a comprehensive ride-hailing application built with modern technologies to deliver a seamless transportation experience. The app provides users with an intuitive platform to book rides, track drivers in real-time, and make secure payments. Built using React Native and Expo, the app ensures cross-platform compatibility for both Android and iOS devices. With features like Google Maps integration for live location tracking, Stripe for secure payment processing, and Clerk for authentication, Ryde offers a complete ride-hailing solution. The app's architecture emphasizes code reusability, maintainability, and scalability, making it a production-ready solution for transportation services.",
		mainImage: "/images/ryde-banner.webp",
		images: [
			"/images/ryde-1.jpg",
			"/images/ryde-2.jpg",
			"/images/ryde-3.jpg",
			"/images/ryde-4.jpg",
			"/images/ryde-5.jpg",
			"/images/ryde-6.jpg",
			"/images/ryde-8.jpg",
			"/images/ryde-9.jpg",
			"/images/ryde-10.jpg",
			"/images/ryde-11.jpg",
		],
		video: "/images/ryde-video.mp4",
		techStack: [
			"React Native",
			"Expo",
			"Stripe",
			"PostgreSQL",
			"Google Maps",
			"zustand",
			"Clerk",
			"Tailwind CSS",
		],
		features: [
			"Onboarding Flow: Seamless user registration and setup process",
			"Email Password Authentication with Verification: Secure login with email verification",
			"oAuth Using Google: Easy login using Google credentials",
			"Authorization: Secure access control for different user roles",
			"Home Screen with Live Location & Google Map: Real-time location tracking with markers on a map",
			"Recent Rides: View a list of recent rides at a glance",
			"Google Places Autocomplete: Search any place on Earth with autocomplete suggestions",
			"Find Rides: Search for rides by entering 'From' and 'To' locations",
			"Select Rides from Map: Choose available cars near your location from the map",
			"Confirm Ride with Detailed Information: View complete ride details, including time and fare price",
			"Pay for Ride Using Stripe: Make payments using multiple methods like cards and others",
			"Create Rides After Successful Payment: Book a ride after confirming payment",
			"Profile: Manage account details in the profile screen",
			"History: Review all rides booked so far",
			"Responsive on Android and iOS: Optimized for both Android and iOS devices",
			"Code architecture and reusability: Well-structured, maintainable codebase",
		],
		challenges: [
			"Implementing real-time location tracking and map rendering with Google Maps",
			"Integrating Stripe payment gateway for secure transaction processing",
			"Managing complex ride booking flow with multiple state updates",
			"Ensuring seamless authentication flow with multiple providers (Email, Google OAuth)",
		],
		solutions: [
			"Leveraged Google Maps API for real-time location tracking and route visualization",
			"Integrated Stripe SDK for secure payment processing with multiple payment methods",
			"Used Zustand for efficient state management across the application",
			"Implemented Clerk for robust authentication with email verification and Google OAuth",
		],
		year: "2024",
		category: "Mobile App",
	},
];

export {
	abilities,
	counterItems,
	expCards,
	expLogos,
	logoIconsList,
	navLinks,
	projects,
	socialImgs,
	techStackIcons,
	techStackImgs,
	testimonials,
	words,
};
