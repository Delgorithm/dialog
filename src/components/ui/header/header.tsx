import Link from "next/link";

export default function Header() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link href="/dashboard/profile">John Doe</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
