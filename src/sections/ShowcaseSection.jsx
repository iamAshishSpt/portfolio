import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
	const navigate = useNavigate();
	const sectionRef = useRef(null);
	const rydeRef = useRef(null);
	const libraryRef = useRef(null);
	const ycDirectoryRef = useRef(null);

	useGSAP(() => {
		// Animation for the main section
		gsap.fromTo(
			sectionRef.current,
			{ opacity: 0 },
			{ opacity: 1, duration: 1.5 },
		);

		// Animations for each app showcase
		const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

		cards.forEach((card, index) => {
			gsap.fromTo(
				card,
				{
					y: 50,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 1,
					delay: 0.3 * (index + 1),
					scrollTrigger: {
						trigger: card,
						start: "top bottom-=100",
					},
				},
			);
		});
	}, []);

	return (
		<div
			id="work"
			ref={sectionRef}
			className="app-showcase"
			style={{ scrollMarginTop: "100px" }}
		>
			<div className="w-full">
				<div className="showcaselayout">
					<div ref={rydeRef} className="first-project-wrapper">
						<div className="image-wrapper">
							<img
								src="/images/realstate-banner.webp"
								alt="Real Estate App Interface"
							/>
						</div>
						<div className="text-content">
							<h2>
								Modern Property Discovery and Management Platform - Real Estate
								App
							</h2>
							<p className="text-white-50 md:text-xl">
								A comprehensive real estate mobile application built with Expo,
								React Native, TypeScript, and Appwrite for seamless property
								discovery and management.
							</p>
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									navigate("/project/real-estate");
								}}
								className="mt-6 contact-btn group w-fit"
							>
								<div className="inner">
									<span className="flex items-center gap-2">
										<span>See Details</span>
										<img
											src="/images/arrow-right.svg"
											alt="arrow"
											className="size-4"
										/>
									</span>
								</div>
							</a>
						</div>
					</div>

					<div className="project-list-wrapper overflow-hidden">
						<div className="project" ref={libraryRef}>
							<div className="image-wrapper bg-[#EF621A]">
								<img
									src="/images/foodordering-banner.webp"
									alt="Food Ordering App"
								/>
							</div>
							<h2>Food Ordering App</h2>
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									navigate("/project/food-ordering");
								}}
								className="mt-4 contact-btn group w-fit"
							>
								<div className="inner">
									<span className="flex items-center gap-2">
										<span>See Details</span>
										<img
											src="/images/arrow-right.svg"
											alt="arrow"
											className="size-4"
										/>
									</span>
								</div>
							</a>
						</div>

						<div className="project" ref={ycDirectoryRef}>
							<div className="image-wrapper bg-[#0C6BEA]">
								<img src="/images/ryde-banner.webp" alt="Ryde App" />
							</div>
							<h2>Ryde</h2>
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									navigate("/project/ryde");
								}}
								className="mt-4 contact-btn group w-fit"
							>
								<div className="inner">
									<span className="flex items-center gap-2">
										<span>See Details</span>
										<img
											src="/images/arrow-right.svg"
											alt="arrow"
											className="size-4"
										/>
									</span>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppShowcase;
