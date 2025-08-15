"use client";
import { navItems } from "@/data/navItems";
import { cn } from "@/lib/utils";
import { DollarSign, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	const renderDesktopNavigationLinks = navItems.map((navLink) => (
		<Link
			href={navLink.href}
			key={navLink.href}
			className={cn(
				"text-gray-700 hover:text-indigo-800 px-3 py-2 text-sm font-medium transition-colors",
				{
					"text-indigo-600 border-b-2 border-indigo-600":
						pathname === navLink.href,
				}
			)}
		>
			{navLink.title}
		</Link>
	));

	const renderMobileNavigationLinks = navItems.map((navLink) => (
		<Link
			href={navLink.href}
			key={navLink.href}
			onClick={() => setMobileMenuOpen(false)}
			className={cn(
				"text-gray-700 hover:bg-indigo-100 block px-3 py-2 rounded-md text-base font-medium transition-colors w-full text-left",
				{
					"bg-indigo-100": pathname === navLink.href,
				}
			)}
		>
			{navLink.title}
		</Link>
	));

	return (
		<nav className="bg-white shadow-lg border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<DollarSign className="h-8 w-8 text-indigo-600 mr-2" />
						<span className="text-xl font-bold text-gray-900">
							ExpenseTracker
						</span>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							{renderDesktopNavigationLinks}
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className="text-gray-700 hover:text-indigo-600 p-2 rounded-md transition-colors cursor-pointer"
						>
							{mobileMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{mobileMenuOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
							{renderMobileNavigationLinks}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}
