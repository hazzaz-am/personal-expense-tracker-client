"use client";

import { useEffect, useState } from "react";
import DesktopTableView from "./DesktopTableView";
import EmptyState from "./EmptyState";
import FilterSection from "./FilterSection";
import ListHeader from "./ListHeader";
import MobileCardView from "./MobileCardView";
import { ExpenseModal } from "@/components/ui/ExpenseModal";
import { Expense } from "@/types";

export default function ExpenseSection() {
	const [showFilters, setShowFilters] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	const [startDate, setStartDate] = useState<string>("");
	const [endDate, setEndDate] = useState<string>("");
	const [expenses, setExpenses] = useState<Expense[]>([]);
	const [metaData, setMetaData] = useState<{
		totalDocuments: number;
		totalAmount: number;
	} | null>(null);
	const [formData, setFormData] = useState({
		title: "",
		amount: "",
		category: "Food",
		date: new Date().toISOString().split("T")[0],
	});

	const params = {
		category: selectedCategory,
		startDate: startDate,
		endDate: endDate,
	};

	const queryParams = new URLSearchParams(params).toString();

	useEffect(() => {
		const getAllExpenses = async () => {
			try {
				const res = await fetch(
					`${process.env.NEXT_PUBLIC_API_URL}/expenses?${queryParams}`
				);

				if (!res.ok) {
					throw new Error(`Server Error: ${res.status} ${res.statusText}`);
				}

				const result = await res.json();
				console.log(result);
				setExpenses(result.data);
				setMetaData(result.meta);
			} catch (error) {
				// console.error("Failed to fetch expenses:", error.message);
				if (error instanceof Error) {
					return { error: true, message: error.message };
				} else {
					return { error: true, message: "An unknown error occurred." };
				}
			}
		};

		getAllExpenses();
	}, [queryParams]);

	const handleExpenseSubmit = (expenseData: Expense) => {
		console.log(expenseData);
		// if (editingExpense) {
		// 	// Update existing expense
		// 	setExpenses(
		// 		expenses.map((expense) =>
		// 			expense.id === editingExpense.id ? expenseData : expense
		// 		)
		// 	);
		// 	setEditingExpense(null);
		// } else {
		// 	// Add new expense
		// 	setExpenses([...expenses, expenseData]);
		// }
	};

	const handleAddExpense = () => {
		setFormData({
			title: "",
			amount: "",
			category: "Food",
			date: new Date().toISOString().split("T")[0],
		});
		setEditingExpense(null);
		setIsModalOpen(true);
	};

	const handleEditExpense = (expense: Expense) => {
		setFormData({
			title: expense.title,
			amount: expense.amount.toString(),
			category: expense.category,
			date: expense.date?.split("T")[0],
		});
		setEditingExpense(expense);
		setIsModalOpen(true);
	};

	const handleDeleteExpense = (id: string) => {
		setExpenses(expenses.filter((expense) => expense._id !== id));
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setEditingExpense(null);
	};

	return (
		<>
			<ListHeader
				handleAddExpense={handleAddExpense}
				onShowFilters={() => setShowFilters(!showFilters)}
				expenses={expenses}
				meta={metaData}
			/>
			{showFilters && (
				<FilterSection
					selectedCategory={selectedCategory}
					startDate={startDate}
					endDate={endDate}
					onSelectedCategory={setSelectedCategory}
					onStartDate={setStartDate}
					onEndDate={setEndDate}
					expenses={expenses}
				/>
			)}
			<DesktopTableView
				expenses={expenses}
				onHandleDelete={handleDeleteExpense}
				onHandleEdit={handleEditExpense}
			/>
			{/* <MobileCardView /> */}
			<EmptyState expenses={expenses} />
			<ExpenseModal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				onSubmit={handleExpenseSubmit}
				expense={editingExpense}
				formData={formData}
				onAddFormData={setFormData}
				title={editingExpense ? "Edit Expense" : "Add New Expense"}
			/>
		</>
	);
}
