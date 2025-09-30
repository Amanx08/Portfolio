"use client";
import Image from "next/image";
import { useState } from "react";
import { aboutImg2 } from "@/public";
import { LinkHover } from "@/animation";
import { footerItems } from "@/constants";
import { Heading, RoundButton } from "@/components";

export default function About() {
	const [hovered, setHovered] = useState(false);

	// As a freelance web developer, I help businesses of all sizes build professional, user-friendly websites that communicate clearly, attract customers, and support growth — all with clean, responsive design and reliable code.

	return (
		<section className="w-full bg-about padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
				<h2 className="sub-heading font-medium font-NeueMontreal text-secondry">
					As a freelance web developer, I help businesses of all sizes build professional, user-friendly websites that communicate clearly, attract customers, and support growth — all with clean, responsive design and reliable code.
					{/* <br className="sm:hidden xm:hidden" /> build professional, user-friendly websites&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						that communicate clearly,
					</span>
					&nbsp;attract customers,&nbsp;
					<br className="sm:hidden xm:hidden" />
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						and support growth,
					</span>
					&nbsp;and&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						responsive design and reliable code.
					</span> */}
				</h2>
			</div>
			<div className="w-full border-y border-[#21212155] my-[50px] py-[20px]">
				<div className="padding-x pb-[50px] w-full flex sm:flex-col xm:flex-col gap-[30px] justify-between">
					<div className="w-[50%] sm:w-full xm:w-full">
						<h3 className="sub-paragraph font-medium text-secondry font-NeueMontreal ">
							What you can expect?
						</h3>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full">
						<div className="w-full flex gap-[30px] h-full items-end sm:items-start sm:flex-col xm:items-start xm:flex-col">
							<div className="w-[80%] sm:w-[100%] xm:w-[100%]">
								<p className="sub-paragraph font-medium font-NeueMontreal text-secondry tracking-wide">
									I don’t just build websites — I create digital experiences that tell your story, earn trust, and move people to action. Whether it’s for a bold startup pitch, an online store, or a growing brand, your site should work hard and look good doing it.
								</p>
								<p className="sub-paragraph font-medium font-NeueMontreal text-secondry pt-[30px] tracking-wide">
									I mix thoughtful strategy, intentional design, and clean development (fueled by strong coffee(chai) and stronger curiosity) to turn ideas into engaging, high-performing websites.
								</p>
							</div>

							{/* <div className="w-[60%] flex justify-end flex-col  sm:w-full xm:w-full">
								<h1 className="sub-paragraph font-medium font-NeueMontreal text-secondry pb-[20px]">
									S:
								</h1>
								<div className="flex flex-col">
									{footerItems.map((item) => (
										<LinkHover
											key={item.id}
											className="w-fit sub-paragraph font-medium capitalize before:h-[1px] after:h-[1px] before:bottom-[1px] after:bottom-[1px]"
											title={item.title}
											href={"/"}
										/>
									))}
								</div>
							</div> */}

						</div>
					</div>
				</div>
			</div>

			<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
				<div className="flex flex-col gap-[30px]">
					<Heading title="About:" />
					<div
						className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group"
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}>
						<RoundButton
							href="/about"
							title="read more"
							bgcolor="#000"
							className="bg-white text-black"
							style={{ color: "#fff" }}
						/>
					</div>
				</div>

				<div
					className={`w-[50%] sm:w-full xm:w-full transition transform duration-[1.5s] ease-[.215,.61,.355,1] rounded-[15px] overflow-hidden ${hovered && "scale-[0.96]"
						}`}>
					<Image
						// src={aboutImg}
						src={aboutImg2}
						alt="about-img"
						className={`w-full h-full transition transform duration-[2s] ease-[.215,.61,.355,1] ${hovered && "scale-[1.09]"
							}`}
					/>
				</div>

			</div>

		</section>
	);
}
