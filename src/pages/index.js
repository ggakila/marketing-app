import Howitworks from "@/components/howitworks";
import Hero from "@/components/hero";

export default function Home() {
  return (
		<main className="flex flex-col items-center justify-center bg-white w-screen h-full">
			<Hero />
			<Howitworks/>			
		</main>
	);
}
