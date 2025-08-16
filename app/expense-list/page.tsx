import ExpenseSection from "@/components/modules/expense-list/ExpenseSection";

export default function ExpenseListPage() {
	return (
		<div className="w-full max-w-6xl mx-auto p-4">
			<div className="bg-white rounded-lg shadow-lg overflow-hidden">
				<ExpenseSection />
			</div>
		</div>
	);
}
