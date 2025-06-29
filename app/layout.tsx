import type { Metadata } from "next";
import { Poppins, Roboto, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/Navbar";
import { LoadingProvider } from "./providers/loading-context";
import LoadingOverlay from "./components/LoadingOverlay";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-roboto",
});

const urbanist = Urbanist({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-urbanist",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-roboto",
});

export const metadata: Metadata = {
	title: "Burton Electric LLC",
	description: "",
	icons: {
		icon: "/favicon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${urbanist.variable} ${roboto.variable}
				${poppins.variable} antialiased`}
			>
				<Navbar />
				<LoadingProvider>
					<LoadingOverlay />
					{children}
				</LoadingProvider>
			</body>
		</html>
	);
}
