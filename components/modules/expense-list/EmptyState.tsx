import { Expense } from "@/types";

export default function EmptyState({ expenses }: { expenses: Expense[] }) {
	return (
		<>
			{expenses.length === 0 && (
				<div className="text-center py-12">
				<div className="text-gray-500">
					{expenses.length === 0 ? (
						<>
							<p className="text-lg font-medium">No expenses found</p>
							<p className="text-sm mt-1">
								Add your first expense to get started
							</p>
						</>
					) : (
						<>
							<p className="text-lg font-medium">
								No expenses match your filters
							</p>
							<p className="text-sm mt-1">Try adjusting your filter criteria</p>
						</>
					)}
				</div>
			</div>
			)}
		</>
	);
}
