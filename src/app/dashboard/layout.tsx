import Navbar from "@/components/ui/header/navbar";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
		</div>
	);
}
