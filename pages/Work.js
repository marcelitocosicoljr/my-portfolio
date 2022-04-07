import Image from "next/image";
import One from "../public/images/1.png";
import Two from "../public/images/2.png";
import Three from "../public/images/3.png";
import Four from "../public/images/4.png";
import Five from "../public/images/5.png";
import Six from "../public/images/6.png";
import Seven from "../public/images/7.png";
import Eight from "../public/images/8.png";
import Nine from "../public/images/9.png";
import Ten from "../public/images/10.png";
import Eleven from "../public/images/11.png";
import Twelve from "../public/images/12.png";
import Thirteen from "../public/images/13.png";
import Fourteen from "../public/images/14.png";
import Fifteen from "../public/images/15.png";

import ReactPlayer from 'react-player/youtube'
import App1 from "../public/images/app1.jpg";
import App2 from "../public/images/app2.jpg";
import App2a from "../public/images/app2a.jpg";
import { Element } from "react-scroll";


function works() {
	
	return (
		<Element id="work" name="work">
			<div className="w-full my-20 h-auto flex flex-col justify-center items-center  ">
				<p className="text-sm uppercase text-gray-400">Portfolio</p>
				<h1 className="text-indigo-900 text-4xl md:text-6xl font-bold text-center">
					All Creative Works
				</h1>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
					<div className="rounded w-80 my-10 md:my-0 h-60 shadow-xl relative">
						<a href="https://gratenewcastle.co.uk/" target='_blank'>
						<Image
							src={One}
							alt="One"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
						</a>
					</div>
					<div className="rounded w-80 h-60 my-10 md:my-0  shadow-xl relative">
					<a href="https://scottbros.com/" target='_blank'>
						<Image
							src={Two}
							alt="two"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
						</a>
					</div>
					<div className="rounded w-80 h-60 my-10 md:my-0 shadow-xl relative">
						<a href="http://82.165.151.114/dev/newhousination" target='_blank'>
						<Image
							src={Three}
							alt="three"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
						</a>
					</div>
				</div>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-start sm:pb-10 md:gap-10 md:mt-10">
					<div className="rounded w-80 h-60 my-10 md:my-0 shadow-xl relative">
						<a href="https://thisislivingcompetitions.com/" target='_blank'>
						<Image
							src={Four}
							alt="four"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
						</a>
					</div>
					<div className="rounded w-80 h-60 my-10 md:my-0 shadow-xl relative">
						<a href="https://australiaworkers.com/" target='_blank'>
						<Image
							src={Five}
							alt="five"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
						</a>
					</div>
					<div className="rounded w-80 h-60 my-10 md:my-0 shadow-xl relative">
						<a href="https://nextgensportscamps.co.uk/" target='_blank'>
						<Image
							src={Six}
							alt="six"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
						</a>
					</div>
					
				</div>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
					<div className="rounded w-80 my-10 md:my-0 h-60 shadow-xl relative">
						<a href="https://babylondurham.com/" target='_blank'>
						<Image
							src={Seven}
							alt="One"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
						</a>
					</div>
					<div className="rounded w-80 h-60 my-10 md:my-0  shadow-xl relative">
						<a href="http://82.165.151.114/dev/basilico/" target='_blank'>
						<Image
							src={Eight}
							alt="two"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
						</a>
					</div>
					<div className="rounded w-80 h-60 my-10 md:my-0 shadow-xl relative">
						<a href="https://carwangallery.com/" target='_blank'>
						<Image
							src={Nine}
							alt="three"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
						</a>
					</div>
				</div>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
					<div className="rounded w-80 my-10 md:my-0 h-60 shadow-xl relative">
						<a href="http://82.165.151.114/dev/remora/about/" target='_blank'>
						<Image
							src={Ten}
							alt="One"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
						</a>
					</div>
					<div className="rounded w-80 h-60 my-10 md:my-0  shadow-xl relative">
						<a href="https://www.wilderevents.co.uk/" target='_blank'>
						<Image
							src={Eleven}
							alt="two"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
						</a>
					</div>
					<div className="rounded w-80 h-60 my-10 md:my-0 shadow-xl relative">
						<a href="https://ghb2.midassites.co.uk/" target='_blank'>
						<Image
							src={Twelve}
							alt="three"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
						</a>
					</div>
				</div>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
					<div className="rounded w-80 my-10 md:my-0 h-60 shadow-xl relative">
						<a href="https://staging2.superstardjgame.com/" target='_blank'>
						<Image
							src={Thirteen}
							alt="One"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
						</a>
					</div>
					<div className="rounded w-80 h-60 my-10 md:my-0  shadow-xl relative">
						<a href="https://loftdurham.co.uk/" target='_blank'>
						<Image
							src={Fourteen}
							alt="two"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
						</a>
					</div>
					<div className="rounded w-80 h-60 my-10 md:my-0 shadow-xl relative">
						<a href="http://orizonliving.co.uk/" target='_blank'>
						<Image
							src={Fifteen}
							alt="three"
							layout="fill"
							objectFit="cover"
							className="p-2 rounded cursor-pointer"
						/>
						</a>
					</div>
				</div>
				<div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
					<div className="rounded w-80 my-10 md:my-0 h-96 shadow-xl relative">
					
						<a href="https://www.youtube.com/watch?v=0y9aTp9tXuY" target='_blank'>
						<Image
							src={App1}
							alt="One"
							layout="fill"
							objectFit="contain"
							className="p-2 rounded cursor-pointer"
						/>
						</a>
					</div>
					<div className="rounded w-80 h-96 my-10 md:my-0  shadow-xl relative">
						<Image
							src={App2}
							alt="two"
							layout="fill"
							objectFit="contain"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
					<div className="rounded w-80 h-96 my-10 md:my-0 shadow-xl relative">
						<Image
							src={App2a}
							alt="three"
							layout="fill"
							objectFit="contain"
							className="p-2 rounded cursor-pointer"
						/>
					</div>
				</div>
				{/* <div className="md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10">
					<ReactPlayer url='https://www.youtube.com/watch?v=0y9aTp9tXuY' />
				</div> */}
				

				<h1 className="text-blue-900 text-base my-10">
					Discover all projects here on{" "}
					<a href="#" className="text-black font-semibold">
						MyPortfolio{" "}
					</a>
				</h1>
			</div>
		</Element>
	);
}

export default works;