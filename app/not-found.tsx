"use client";

import { ArrowLeft, Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8 text-center">
				{/* 404 Number */}
				<div className="space-y-4">
					<div className="text-8xl sm:text-9xl font-bold text-gray-300 select-none">
						404
					</div>
					<div className="text-2xl sm:text-3xl font-semibold text-gray-700">
						Page Not Found
					</div>
				</div>

				{/* Icon */}
				<div className="flex justify-center">
					<div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
						<Search className="w-12 h-12 text-gray-400" />
					</div>
				</div>

				{/* Description */}
				<div className="space-y-2">
					<p className="text-lg text-gray-600">
						Oops! The page you're looking for doesn't exist.
					</p>
					<p className="text-sm text-gray-500">
						It might have been moved, deleted, or you entered the wrong URL.
					</p>
				</div>

				{/* Action Buttons */}
				<div className="space-y-4 pt-6">
					<Link
						href="/"
						className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
					>
						<Home className="w-5 h-5 mr-2" />
						Go Home
					</Link>

					<button
						onClick={() => window.history.back()}
						className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
					>
						<ArrowLeft className="w-5 h-5 mr-2" />
						Go Back
					</button>
				</div>
			</div>
		</div>
	);
}
