export default function MobileCardSkeleton() {
	return (
		<div className="md:hidden animate-pulse">
			{Array.from({ length: 4 }).map((_, index) => (
				<div key={index} className="border-b border-gray-200 p-4">
					<div className="flex justify-between items-start mb-3">
						<div className="flex-1">
							<div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
							<div className="h-5 bg-gray-200 rounded w-20"></div>
						</div>
						<div className="flex space-x-1">
							<div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
							<div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<div className="h-6 bg-gray-200 rounded-full w-16"></div>
						<div className="h-4 bg-gray-200 rounded w-24"></div>
					</div>
				</div>
			))}
		</div>
	);
}
