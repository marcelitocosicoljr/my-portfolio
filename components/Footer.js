import { AiTwotoneHeart } from "react-icons/ai";
function Footer() {
	return (
		<div className="w-full h-16 bg-gray-50 flex justify-center items-center">
		
			<h1 className=" text-sm md:text-xl text-blue-900 ml-2 ">
				{" "}
				Created by{" "}
				<a
					href="#"
					className="cursor-pointer font-semibold text-indigo-900 hover:text-black"
				>
					Marcelito Cosicol
				</a>
			</h1>
		</div>
	);
}

export default Footer;