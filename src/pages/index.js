import Hero from "@/components/Hero";
import Howitworks from "@/components/HowItWorks";

export default function Home() {
  return (
		<main className="flex flex-col items-center justify-center bg-white w-screen h-full">
			<Hero />
			<Howitworks/>			
		</main>
	);
}
