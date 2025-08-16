import { Expense } from "@/types";
import { toast } from "sonner";

export const getAllExpenses = async (queryParams: string = "") => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/expenses?${queryParams}`
		);

		if (!res.ok) {
			throw new Error(`Server Error: ${res.status} ${res.statusText}`);
		}

		const result = await res.json();
		return result;
	} catch (error) {
		// console.error("Failed to fetch expenses:", error.message);
		if (error instanceof Error) {
			return { error: true, message: error.message };
		} else {
			return { error: true, message: "An unknown error occurred." };
		}
	}
};

export const handleAddExpense = async (
	expenseData: Partial<Expense>
) => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/expenses`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(expenseData),
			}
		);
		if (!res.ok) {
			throw new Error(`Server Error: ${res.status} ${res.statusText}`);
		}
		const result = await res.json();
		return result;
	} catch (error) {
		if (error instanceof Error) {
			return { error: true, message: error.message };
		} else {
			return { error: true, message: "An unknown error occurred." };
		}
	}
};

export const handleUpdateExpense = async (
	id: string,
	expenseData: Partial<Expense>
) => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/expenses/${id}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(expenseData),
			}
		);
		if (!res.ok) {
			throw new Error(`Server Error: ${res.status} ${res.statusText}`);
		}
		const result = await res.json();
		return result;
	} catch (error) {
		if (error instanceof Error) {
			return { error: true, message: error.message };
		} else {
			return { error: true, message: "An unknown error occurred." };
		}
	}
};

export const handleDeleteExpense = async (id: string) => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/expenses/${id}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		if (!res.ok) {
			throw new Error(`Server Error: ${res.status} ${res.statusText}`);
		}
		const result = await res.json();
		return result;
	} catch (error) {
		if (error instanceof Error) {
			return { error: true, message: error.message };
		} else {
			return { error: true, message: "An unknown error occurred." };
		}
	}
};
