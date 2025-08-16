import { handleDeleteExpense } from "@/data/expense";
import { toast } from "sonner";

export const deleteExpenseToast = (id: string, title: string) => {
	toast("Are you sure you want to delete this expense?", {
		description: `This will permanently delete "${title}"`,
		action: {
			label: "Delete",
			onClick: () => {
				handleDeleteExpense(id);
				toast.success("Expense deleted successfully");
			},
		},
		cancel: {
			label: "Cancel",
			onClick: () => {
				toast.dismiss();
			},
		},
	});
};
