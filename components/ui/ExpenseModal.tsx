"use client";
import { Expense } from "@/types";
import { X } from "lucide-react";
import { SetStateAction } from "react";
import { toast } from "sonner";

interface ExpenseModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (expense: Partial<Expense>) => void;
	expense?: Expense | null;
	title: string;
	formData: {
		title: string;
		amount: string;
		category: string;
		date: string;
	};
	onAddFormData: (
		value: SetStateAction<{
			title: string;
			amount: string;
			category: string;
			date: string;
		}>
	) => void;
}

// Reusable Modal Component
export const ExpenseModal = ({
	isOpen,
	onClose,
	onSubmit,
	expense = null,
	title,
	formData,
	onAddFormData,
}: ExpenseModalProps) => {
	const handleSubmit = () => {
		if (expense) {
			if (
				formData.title === "" ||
				formData.amount === "" ||
				formData.category === "" ||
				formData.date === ""
			) {
				toast.error("Please fill in all fields.");
				return;
			}
			onSubmit({
				...formData,
				amount: parseFloat(formData.amount),
				_id: expense._id,
			});

			onAddFormData({
				title: "",
				amount: "",
				category: "Food",
				date: new Date().toISOString().split("T")[0],
			});

			onClose();
		} else {
			if (
				formData.title === "" ||
				formData.amount === "" ||
				formData.category === "" ||
				formData.date === ""
			) {
				toast.error("Please fill in all fields.");
				return;
			}
			onSubmit({
				...formData,
				amount: parseFloat(formData.amount),
			});
		}
		onClose();
	};

	const handleClose = () => {
		onClose();
		if (!expense) {
			onAddFormData({
				title: "",
				amount: "",
				category: "Food",
				date: new Date().toISOString().split("T")[0],
			});
		}
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center p-4 z-50">
			<div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
				<div className="flex items-center justify-between p-6 border-b border-gray-200">
					<h2 className="text-lg font-semibold text-gray-900">{title}</h2>
					<button
						onClick={handleClose}
						className="text-gray-400 hover:text-gray-600 transition-colors"
					>
						<X className="h-6 w-6" />
					</button>
				</div>
				<div className="p-6">
					<div className="space-y-4">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Title
							</label>
							<input
								type="text"
								value={formData.title}
								onChange={(e) =>
									onAddFormData({ ...formData, title: e.target.value })
								}
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
								placeholder="Enter expense title"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Amount
							</label>
							<input
								type="number"
								step="0.01"
								value={formData.amount}
								onChange={(e) =>
									onAddFormData({ ...formData, amount: e.target.value })
								}
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
								placeholder="0.00"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Category
							</label>
							<select
								value={formData.category}
								onChange={(e) =>
									onAddFormData({ ...formData, category: e.target.value })
								}
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
							>
								<option value="Food">Food</option>
								<option value="Transportation">Transportation</option>
								<option value="Entertainment">Entertainment</option>
								<option value="Utilities">Utilities</option>
								<option value="Shopping">Shopping</option>
								<option value="Healthcare">Healthcare</option>
							</select>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Date
							</label>
							<input
								type="date"
								value={formData.date}
								onChange={(e) =>
									onAddFormData({ ...formData, date: e.target.value })
								}
								className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
							/>
						</div>
					</div>
					<div className="flex gap-3 mt-6">
						<button
							onClick={handleClose}
							className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
						>
							Cancel
						</button>
						<button
							onClick={handleSubmit}
							className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
						>
							{expense ? "Update" : "Add"} Expense
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
