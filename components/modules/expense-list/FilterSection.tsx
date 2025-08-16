import { Expense } from "@/types";
import { X } from "lucide-react";

interface IProps {
	onSelectedCategory: (category: string) => void;
	onStartDate: (date: string) => void;
	onEndDate: (date: string) => void;
	selectedCategory: string;
	startDate: string;
	endDate: string;
	expenses: Expense[];
}

export default function FilterSection({
	onSelectedCategory,
	onStartDate,
	onEndDate,
	selectedCategory,
	startDate,
	endDate,
	expenses,
}: IProps) {
	// Get unique categories for filter dropdown
	const categories = [...new Set(expenses.map((expense) => expense.category))];

	const clearFilters = () => {
		onSelectedCategory("");
		onStartDate("");
		onEndDate("");
	};

	return (
		<>
			<div className="bg-white px-6 py-4 border-b border-gray-200">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Category
						</label>
						<select
							value={selectedCategory}
							onChange={(e) => onSelectedCategory(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						>
							<option value="">All Categories</option>
							{categories.map((category) => (
								<option key={category} value={category}>
									{category}
								</option>
							))}
						</select>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Start Date
						</label>
						<input
							type="date"
							value={startDate}
							onChange={(e) => onStartDate(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 select-none"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							End Date
						</label>
						<input
							type="date"
							value={endDate}
							onChange={(e) => onEndDate(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						/>
					</div>
					<div className="flex items-end">
						<button
							onClick={clearFilters}
							className="w-full inline-flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
						>
							<X className="w-4 h-4 mr-2" />
							Clear Filters
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
