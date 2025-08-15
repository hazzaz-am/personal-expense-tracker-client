import HeaderStats from "@/components/modules/home/HeaderStats";
import PieChartComponent from "@/components/modules/home/PieChartComponent";

const ExpenseTrackerHomepage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
			<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
				<HeaderStats />
				<PieChartComponent />
			</div>
		</div>
	);
};

export default ExpenseTrackerHomepage;
