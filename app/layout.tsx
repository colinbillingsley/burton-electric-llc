import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/Navbar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-roboto",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} antialiased`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
