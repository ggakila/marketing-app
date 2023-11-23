import Image from 'next/image'
import Link from 'next/link'
export default function Howitworks() {
  return (
    <div className="container h-screen py-10 px-10 flex flex-col items-center justify-center gap-10">
      <div className="w-full flex flex-col items-center justify-center gap-6 ">
        <h1 className="text-6xl w-2/3 text-center font-bold tracking-wide leading-normal">Generate Powerful AI Marketing Campaigns in Minutes</h1>
        <p className="text-xl text-gray-600 font-medium text-center w-1/2">
            Our AI powered marketing campaign generator takes the hastle out of creating effective campaigns. 
            Simply input your business name, industry and customer data, and analyze your customer demographics to generate personalized campaigns that drive results
        </p>
      </div>
      <div className="flex justify-between w-full">
      <div className="w-1/3 flex flex-col  gap-8 items-center justify-center p-6">
        <div className="relative w-12 h-12">
            <Image
                src="/cube.png"
                fill={true}
                alt="cube icon"
                priority={true}                
            />
        </div>
        <h2 className="text-4xl font-bold text-center">Input Business Details</h2>
        <p className="text-lg text-center text-gray-600 font-medium">Simply input your business detailes, industry and customer demographics.</p>
      </div>
      <div className="w-1/3 flex flex-col  gap-8 items-center justify-center p-6 ">
        <div className="relative w-12 h-12">
            <Image
                src="/cube.png"
                fill={true}
                alt="cube icon"
                priority={true}                
            />
        </div>
        <h2 className="text-4xl font-bold text-center">Analyze Customer Demographics</h2>
        <p className="text-lg text-center text-gray-600 font-medium">Our AI analyzes your customer demographics to understand their preferences and behavior</p>
      </div>
      <div className="w-1/3 flex flex-col  gap-8 items-center justify-center p-6">
        <div className="relative w-12 h-12">
            <Image
                src="/cube.png"
                fill={true}
                alt="cube icon"
                priority={true}                
            />
        </div>
        <h2 className="text-4xl font-bold text-center">Generate Personalized Campaigns</h2>
        <p className="text-lg text-center text-gray-600 font-medium">Based on your business details, industry and customer demogrphocs, our AI generates personalized marketing campaigns tailored to your target audience.</p>
      </div>
      </div>
      <Link href="/promptpage" className="bg-white text-black px-4 py-3 hover:text-white hover:bg-black border border-black font-semibold text-lg rounded">Get started</Link>
    </div>
  )
}
