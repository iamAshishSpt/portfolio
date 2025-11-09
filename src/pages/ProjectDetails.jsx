import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/NavBar";
import { projects } from "../constants";
import Footer from "../sections/Footer";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const sectionRef = useRef(null);
	const project = projects.find((p) => p.id === id);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [id]);

	useGSAP(() => {
		if (sectionRef.current) {
			gsap.fromTo(
				sectionRef.current,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.4 },
			);

			const elements = sectionRef.current.querySelectorAll(".fade-in");
			elements.forEach((el, index) => {
				gsap.fromTo(
					el,
					{ y: 30, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.4,
						delay: index * 0.05,
						scrollTrigger: {
							trigger: el,
							start: "top bottom-=200",
						},
					},
				);
			});
		}
	}, [id]);

	if (!project) {
		return (
			<>
				<Navbar />
				<div className="min-h-screen flex-center padding-x-lg">
					<div className="text-center">
						<h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
						<button
							onClick={() => navigate("/")}
							className="cta-wrapper mt-8 md:w-80 md:h-16 w-60 h-12"
						>
							<div className="cta-button group">
								<div className="bg-circle" />
								<p className="text">Back to Home</p>
								<div className="arrow-wrapper">
									<img src="/images/arrow-right.svg" alt="arrow" />
								</div>
							</div>
						</button>
					</div>
				</div>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Navbar />
			<div ref={sectionRef} className="min-h-screen w-full">
				{/* Hero Section */}
				<section className="padding-x-lg pt-32 md:pt-40">
					<div className="w-full">
						<a
							href="#"
							onClick={(e) => {
								e.preventDefault();
								navigate("/");
								setTimeout(() => {
									const target = document.getElementById("work");
									if (target) {
										const offset = 350; // Scroll higher to show counter
										const top =
											target.getBoundingClientRect().top +
											window.pageYOffset -
											offset;
										window.scrollTo({ top, behavior: "smooth" });
									}
								}, 100);
							}}
							className="mb-8 fade-in contact-btn group"
						>
							<div className="inner">
								<span className="flex items-center gap-2">
									<img
										src="/images/arrow-right.svg"
										alt="back"
										className="rotate-180 size-4"
									/>
									<span>Back to Projects</span>
								</span>
							</div>
						</a>

						<div className="fade-in">
							<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
								{project.title}
							</h1>
							<p className="text-xl md:text-2xl text-white-50 mb-8">
								{project.subtitle}
							</p>
						</div>
					</div>
				</section>

				{/* Main Image */}
				<section className="mb-20 w-full">
					<div className="w-full">
						<div className="fade-in w-full">
							<img
								src={project.mainImage}
								alt={project.title}
								className="w-full h-auto object-cover"
							/>
						</div>
					</div>
				</section>

				{/* Description Section */}
				<section className="padding-x-lg mb-20">
					<div className="w-full">
						<div className="grid-2-cols gap-12 items-start">
							<div className="fade-in">
								<h2 className="text-3xl md:text-4xl font-bold mb-6">
									Overview
								</h2>
								<p className="text-lg text-white-50 leading-relaxed">
									{project.description}
								</p>
							</div>
							<div className="fade-in">
								<h2 className="text-3xl md:text-4xl font-bold mb-6">About</h2>
								<p className="text-lg text-white-50 leading-relaxed">
									{project.longDescription}
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Video Section */}
				{project.video && (
					<section className="mb-20 w-full">
						<div className="w-full padding-x-lg mb-8">
							<h2 className="text-3xl md:text-4xl font-bold fade-in">
								Video Showcase
							</h2>
						</div>
						<div className="fade-in w-full padding-x-lg flex justify-center">
							<div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] mx-auto aspect-[9/16] bg-black-100 rounded-xl overflow-hidden flex items-center justify-center">
								<video
									src={project.video}
									controls
									className="w-full h-full object-contain rounded-xl"
									preload="metadata"
									playsInline
								>
									Your browser does not support the video tag.
								</video>
							</div>
						</div>
					</section>
				)}

				{/* Images Gallery */}
				{project.images && project.images.length > 1 && (
					<section className="mb-20 w-full">
						<div className="w-full padding-x-lg mb-8">
							<h2 className="text-3xl md:text-4xl font-bold fade-in">
								Image Gallery
							</h2>
						</div>
						<div className="w-full padding-x-lg">
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
								{project.images.map((img, index) => (
									<div
										key={index}
										className="fade-in rounded-xl overflow-hidden bg-black-100 aspect-[9/16] flex items-center justify-center group cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
									>
										<img
											src={img}
											alt={`${project.title} - Image ${index + 1}`}
											className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
										/>
									</div>
								))}
							</div>
						</div>
					</section>
				)}

				{/* Tech Stack Section */}
				<section className="padding-x-lg mb-20">
					<div className="w-full">
						<h2 className="text-3xl md:text-4xl font-bold mb-8 fade-in">
							Tech Stack
						</h2>
						<div className="fade-in">
							<div className="flex flex-wrap gap-4">
								{project.techStack.map((tech, index) => (
									<div
										key={index}
										className="card-border rounded-lg px-6 py-3 bg-black-100 hover:bg-black-50 transition-colors"
									>
										<span className="text-lg font-semibold">{tech}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className="padding-x-lg mb-20">
					<div className="w-full">
						<h2 className="text-3xl md:text-4xl font-bold mb-8 fade-in">
							Key Features
						</h2>
						<div className="grid-2-cols gap-6">
							{project.features.map((feature, index) => (
								<div
									key={index}
									className="fade-in card-border rounded-xl p-6 bg-black-100 hover:bg-black-50 transition-colors"
								>
									<div className="flex items-start gap-4">
										<div className="size-2 rounded-full bg-white-50 mt-2 flex-shrink-0" />
										<p className="text-lg text-white-50">{feature}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Challenges & Solutions */}
				{project.challenges && project.challenges.length > 0 && (
					<section className="padding-x-lg mb-20">
						<div className="w-full">
							<div className="grid-2-cols gap-12">
								<div className="fade-in">
									<h2 className="text-3xl md:text-4xl font-bold mb-8">
										Challenges
									</h2>
									<div className="space-y-4">
										{project.challenges.map((challenge, index) => (
											<div
												key={index}
												className="card-border rounded-xl p-6 bg-black-100"
											>
												<p className="text-lg text-white-50">{challenge}</p>
											</div>
										))}
									</div>
								</div>
								<div className="fade-in">
									<h2 className="text-3xl md:text-4xl font-bold mb-8">
										Solutions
									</h2>
									<div className="space-y-4">
										{project.solutions.map((solution, index) => (
											<div
												key={index}
												className="card-border rounded-xl p-6 bg-black-100"
											>
												<p className="text-lg text-white-50">{solution}</p>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</section>
				)}

				{/* Back to Projects Button */}
				<section className="padding-x-lg mb-20">
					<div className="w-full flex-center">
						<button
							type="button"
							onClick={() => {
								navigate("/");
								setTimeout(() => {
									const target = document.getElementById("work");
									if (target) {
										const offset = 350; // Scroll higher to show counter
										const top =
											target.getBoundingClientRect().top +
											window.pageYOffset -
											offset;
										window.scrollTo({ top, behavior: "smooth" });
									}
								}, 100);
							}}
							className="cta-wrapper fade-in md:w-80 md:h-16 w-60 h-12"
						>
							<div className="cta-button group">
								<div className="bg-circle" />
								<div className="arrow-wrapper left-arrow">
									<img
										src="/images/arrow-right.svg"
										alt="arrow"
										className="rotate-180"
									/>
								</div>
								<p className="text">Back to Projects</p>
							</div>
						</button>
					</div>
				</section>
			</div>
			<Footer />
		</>
	);
};

export default ProjectDetails;
