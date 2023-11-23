import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="container flex flex-col items-center justify-center h-full md:h-screen w-full py-10 gap-10 sm:gap-20 mt-20">
        <div className=" flex flex-col items-center justify-center w-4/5 gap-4">
            <h1 className="text-4xl md:text-6xl font-bold w-full sm:w-1/2 text-center leading-normal tracking-normal">Unlock your Business's Potential with AI</h1>
            <div className="w-full sm:w-1/2 flex flex-col gap-4">
                {/* <p className="text-center text-gray-600 leading-loose">Create highly targeted marketing campaigns that resonate with your customers. Our personalized marketing campaigns generator uses AI to analyze your customer and business infomation to deliver tailored campaigns that drive results</p> */}
                <div className="flex justify-center gap-4">
                    <Link href="/promptpage" className="bg-black text-white px-4 py-2 hover:text-black hover:bg-white border border-black font-semibold text-lg rounded">Try for free</Link>
                    <button className="bg-white text-black px-4 py-2 hover:text-white hover:bg-black border border-black font-semibold text-lg rounded"> Join Beta</button>
                </div>
            </div>
        </div>
        <div className="hero-image relative w-4/5 h-[300px] sm:h-[600px]">
            <Image
            src="/cool-background.png"
            fill={true}
            alt="hero-image"
            priority={true}
            style={{objectFit:"cover"}}
            
            />
        </div>
    </div>
  )
}
