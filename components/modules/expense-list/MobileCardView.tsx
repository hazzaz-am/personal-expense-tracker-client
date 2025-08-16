import { formatDate } from "@/utility/formatDate";
import { Edit3, Trash2 } from "lucide-react";

export default function MobileCardView() {
	return (
		<div className="md:hidden">
			{filteredExpenses.map((expense) => (
				<div key={expense.id} className="border-b border-gray-200 p-4">
					<div className="flex justify-between items-start mb-3">
						<div className="flex-1">
							<h3 className="text-sm font-medium text-gray-900 mb-1">
								{expense.title}
							</h3>
							<p className="text-lg font-semibold text-green-600">
								{formatCurrency(expense.amount)}
							</p>
						</div>
						<div className="flex space-x-1">
							<button
								onClick={() => handleEdit(expense.id)}
								className="p-2 text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
							>
								<Edit3 className="w-4 h-4" />
							</button>
							<button
								onClick={() => handleDelete(expense.id)}
								className="p-2 text-red-600 bg-red-100 rounded-lg hover:bg-red-200 transition-colors"
							>
								<Trash2 className="w-4 h-4" />
							</button>
						</div>
					</div>
					<div className="flex justify-between items-center text-sm">
						<span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
							{expense.category}
						</span>
						<span className="text-gray-500">{formatDate(expense.date)}</span>
					</div>
				</div>
			))}
		</div>
	);
}
