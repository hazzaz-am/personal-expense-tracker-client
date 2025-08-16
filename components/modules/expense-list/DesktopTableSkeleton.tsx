export default function DesktopTableSkeleton() {
	return (
		<div className="hidden md:block overflow-x-auto animate-pulse">
			<table className="w-full">
				<thead className="bg-gray-50">
					<tr>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							<div className="h-4 bg-gray-300 rounded w-12"></div>
						</th>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							<div className="h-4 bg-gray-300 rounded w-16"></div>
						</th>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							<div className="h-4 bg-gray-300 rounded w-20"></div>
						</th>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							<div className="h-4 bg-gray-300 rounded w-12"></div>
						</th>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							<div className="h-4 bg-gray-300 rounded w-16"></div>
						</th>
					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200">
					{Array.from({ length: 5 }).map((_, index) => (
						<tr key={index} className="hover:bg-gray-50">
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="h-4 bg-gray-200 rounded w-32"></div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="h-4 bg-gray-200 rounded w-20"></div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="h-6 bg-gray-200 rounded-full w-16"></div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="h-4 bg-gray-200 rounded w-24"></div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="flex space-x-2">
									<div className="h-6 bg-gray-200 rounded w-12"></div>
									<div className="h-6 bg-gray-200 rounded w-14"></div>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
