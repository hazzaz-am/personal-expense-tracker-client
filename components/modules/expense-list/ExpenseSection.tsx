"use client";

import { ExpenseModal } from "@/components/ui/ExpenseModal";
import {
	getAllExpenses,
	handleAddExpense,
	handleUpdateExpense,
} from "@/data/expense";
import { Expense } from "@/types";
import { useEffect, useState } from "react";
import DesktopTableView from "./DesktopTableView";
import EmptyState from "./EmptyState";
import ExpenseListSkeleton from "./ExpenseListSkeleton";
import FilterSection from "./FilterSection";
import ListHeader from "./ListHeader";
import MobileCardView from "./MobileCardView";

export default function ExpenseSection() {
	const [showFilters, setShowFilters] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
	const [selectedCategory, setSelectedCategory] = useState<string>("");
	const [startDate, setStartDate] = useState<string>("");
	const [endDate, setEndDate] = useState<string>("");
	const [expenses, setExpenses] = useState<Expense[]>([]);
	const [isLoading, setIsLoading] = useState(true);
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
		const fetchData = async () => {
			setIsLoading(true);
			const result = await getAllExpenses(queryParams);
			if (result && !result.error) {
				setExpenses(result.data);
				setMetaData(result.meta);
			}
			setIsLoading(false);
		};
		fetchData();
	}, [queryParams]);

	const handleExpenseSubmit = async (expenseData: Partial<Expense>) => {
		console.log(expenseData);
		setIsLoading(true);

		if (editingExpense) {
			// Update existing expense
			await handleUpdateExpense(editingExpense._id, expenseData);
			setEditingExpense(null);
		} else {
			// Add new expense
			await handleAddExpense(expenseData);
			console.log(expenseData);
		}

		// Refresh data after submission
		const result = await getAllExpenses(queryParams);
		if (result && !result.error) {
			setExpenses(result.data);
			setMetaData(result.meta);
		}
		setIsLoading(false);
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

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setEditingExpense(null);
	};

	return (
		<>
			<ListHeader
				onShowFilters={() => setShowFilters(!showFilters)}
				onModalOpen={() => setIsModalOpen(true)}
				onSetEditingExpense={() => setEditingExpense(null)}
				onAddFormData={setFormData}
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

			{isLoading ? (
				<ExpenseListSkeleton />
			) : (
				<>
					<DesktopTableView
						expenses={expenses}
						onHandleEdit={handleEditExpense}
					/>
					<MobileCardView
						expenses={expenses}
						onHandleEdit={handleEditExpense}
					/>
				</>
			)}

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
