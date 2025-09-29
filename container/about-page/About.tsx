import { backgroundAbout } from "@/public";
import { BackgroundImg } from "@/components";

export default function About() {
	return (
		<section className="w-full padding-y">
			<div className="w-full flex flex-col bg-background">
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
						<div>
							<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
								Technical Skills
							</h3>
						</div>
						<div className="w-[48%] sm:w-full xm:w-full flex justify-between">
							<div className="w-[70%] sm:w-full xm:w-full flex flex-col gap-y-[40px]">
								<div className="flex flex-col gap-y-[20px]">
									<p className="paragraph font-NeueMontreal text-secondry">
										My technological expertise is focused on the JavaScript ecosystem, including frameworks like React, Angular and Next.js. I specialize in modern animation using tools such as GSAP and Framer Motion, and I also possess skills in 3D web graphics, leveraging React Three Fiber and Three.js.
									</p>
								</div>
								<div className="flex flex-col gap-y-[20px]">
									<p className="paragraph font-NeueMontreal text-secondry">
										Additionally, my versatility includes hands-on experience with low-code and no-code platforms like Wix and WordPress
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="padding-x pt-[100px] lg:pt-[80px] md:pt-[60px] sm:pt-[40px] xm:pt-[40px]">
				<BackgroundImg src={backgroundAbout} />
			</div> */}

		</section>
	);
}
