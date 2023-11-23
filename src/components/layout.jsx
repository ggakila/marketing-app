import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
	return (
		<div className="flex flex-col items-center">
			<Navbar />
			<main className="container flex items-center justify-center">{children}</main>
			<Footer />
		</div>
	);
}
