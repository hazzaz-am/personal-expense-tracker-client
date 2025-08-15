import { Calendar, DollarSign, TrendingUp } from "lucide-react";
import State from "./State";

export default function HeaderStats() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
			<State
				icon={
					<div className="p-2 bg-green-100 rounded-lg">
						<DollarSign className="h-6 w-6 text-green-600" />
					</div>
				}
				title="Total Expenses"
				subTitle="$100"
			/>
			<State
				icon={
					<div className="p-2 bg-blue-100 rounded-lg">
						<TrendingUp className="h-6 w-6 text-blue-600" />
					</div>
				}
				title="This Month"
				subTitle="$100"
			/>
			<State
				icon={
					<div className="p-2 bg-purple-100 rounded-lg">
						<Calendar className="h-6 w-6 text-purple-600" />
					</div>
				}
				title="Total Transactions"
				subTitle="5"
			/>
		</div>
	);
}
