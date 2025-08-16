import { Filter, Plus } from "lucide-react";
import { SetStateAction } from "react";

interface IProps {
	onAddFormData: (
		value: SetStateAction<{
			title: string;
			amount: string;
			category: string;
			date: string;
		}>
	) => void;
	onShowFilters: () => void;
	meta: {
		totalDocuments: number;
		totalAmount: number;
	} | null;
	onModalOpen: () => void;
	onSetEditingExpense: () => void;
}

export default function ListHeader({
	onShowFilters,
	meta,
	onAddFormData,
	onModalOpen,
	onSetEditingExpense,
}: IProps) {
	const handleAddExpense = () => {
		onAddFormData({
			title: "",
			amount: "",
			category: "Food",
			date: new Date().toISOString().split("T")[0],
		});
		onSetEditingExpense();
		onModalOpen();
	};

	return (
		<>
			<div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
					<div className="flex-1">
						<h2 className="text-xl font-semibold text-gray-800">Expenses</h2>
						<p className="text-sm text-gray-600 mt-1">
							Manage your expense records
						</p>
					</div>
					<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
						{/* Summary Stats */}
						<div className="flex items-center gap-6 text-sm">
							<span className="text-gray-600">
								Total Expenses:{" "}
								<span className="font-semibold text-gray-900">
									{meta?.totalDocuments ?? 0}
								</span>
							</span>
							<span className="text-gray-600">
								Amount:{" "}
								<span className="font-semibold text-green-600">
									${meta?.totalAmount ?? 0}
								</span>
							</span>
						</div>
						{/* Action Buttons */}
						<div className="flex items-center gap-2">
							<button
								onClick={onShowFilters}
								className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
							>
								<Filter className="w-4 h-4 mr-2" />
								Filters
							</button>
							<button
								onClick={handleAddExpense}
								className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
							>
								<Plus className="w-4 h-4 mr-2" />
								Add Expense
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
