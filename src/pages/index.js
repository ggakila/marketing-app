import Hero from "@/components/hero";
import Howitworks from "@/components/howitworks";

export default function Home() {
  return (
		<main className="flex flex-col items-center justify-center bg-white w-screen h-full">
			<Hero />
			<Howitworks/>			
		</main>
	);
}
