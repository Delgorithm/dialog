"use client";

import Link from "next/link";
import HouseLogo from "../logos/houseLogo";
import { usePathname } from "next/navigation";
import CalendarLogo from "../logos/calendarLogo";
import ChartLogo from "../logos/chartLogo";
import ProfileLogo from "../logos/profileLogo";
import { Button } from "../shadcn/button";
import AddLogo from "../logos/addLogo";

function Navbar() {
	const pathname = usePathname();

	return (
		<nav className="fixed bottom-0 w-full bg-blue-500 p-4">
			<ul className="flex justify-around items-center">
				<li
					className={
						pathname === "/dashboard" ? "bg-white text-blue-500 rounded-lg" : ""
					}>
					<Link href="/dashboard">
						<HouseLogo className="h-10 size-8" />
						<span className="watch-sm:hidden md:block">Accueil</span>
					</Link>
				</li>

				<li
					className={
						pathname === "/dashboard/calendar"
							? "bg-white text-blue-500 rounded-lg"
							: ""
					}>
					<Link href="/dashboard/calendar">
						<CalendarLogo className="h-10 size-8" />
						<span className="watch-sm:hidden md:block">Calendrier</span>
					</Link>
				</li>

				<li>
					<Button className="relative bottom-8">
						<AddLogo className="size-8" />
					</Button>
				</li>

				<li
					className={
						pathname === "/dashboard/charts"
							? "bg-white text-blue-500 rounded-lg"
							: ""
					}>
					<Link href="/dashboard/charts">
						<ChartLogo className="h-10 size-8" />
						<span className="watch-sm:hidden md:block">Statistiques</span>
					</Link>
				</li>

				<li
					className={
						pathname === "/dashboard/profile"
							? "bg-white text-blue-500 rounded-lg"
							: ""
					}>
					<Link href="/dashboard/profile">
						<ProfileLogo className="h-10 size-8" />
						<span className="watch-sm:hidden md:block">Profile</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
