import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/Navbar";
import { LoadingProvider } from "./providers/loading-context";
import LoadingOverlay from "./components/LoadingOverlay";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Choose the weights you want
	variable: "--font-montserrat", // Optional: use as a CSS variable
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
			<body className={`${montserrat.variable} antialiased`}>
				<Navbar />
				<LoadingProvider>
					<LoadingOverlay />
					{children}
				</LoadingProvider>
			</body>
		</html>
	);
}
