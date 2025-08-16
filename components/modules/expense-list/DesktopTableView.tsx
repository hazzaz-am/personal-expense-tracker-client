import { Expense } from "@/types";
import { formatDate } from "@/utility/formatDate";
import { Edit3, Trash2 } from "lucide-react";

interface IProps {
	expenses: Expense[];
	onHandleEdit: (expense: Expense) => void;
	onHandleDelete: (id: string) => void;
}

export default function DesktopTableView({expenses, onHandleEdit, onHandleDelete}: IProps) {
	return (
		<div className="hidden md:block overflow-x-auto">
			<table className="w-full">
				<thead className="bg-gray-50">
					<tr>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Title
						</th>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Amount
						</th>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Category
						</th>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Date
						</th>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Actions
						</th>
					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200">
					{expenses.map((expense) => (
						<tr key={expense._id} className="hover:bg-gray-50 transition-colors">
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="text-sm font-medium text-gray-900">
									{expense.title}
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="text-sm font-semibold text-green-600">
									{expense.amount}
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
									{expense.category}
								</span>
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								{formatDate(expense.date)}
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="flex space-x-2">
									<button
										onClick={() => onHandleEdit(expense)}
										className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors"
									>
										<Edit3 className="w-3 h-3 mr-1" />
										Edit
									</button>
									<button
										onClick={() => onHandleDelete(expense._id)}
										className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-md text-red-600 bg-red-100 hover:bg-red-200 transition-colors"
									>
										<Trash2 className="w-3 h-3 mr-1" />
										Delete
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
