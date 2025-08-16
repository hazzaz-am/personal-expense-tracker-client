import { Calendar, DollarSign } from "lucide-react";
import State from "./State";

interface IProps {
	meta: {
		totalDocuments: number;
		totalAmount: number;
	} | null;
}

export default function HeaderStats({ meta }: IProps) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
			<State
				icon={
					<div className="p-2 bg-green-100 rounded-lg">
						<DollarSign className="h-6 w-6 text-green-600" />
					</div>
				}
				title="Total Expenses"
				subTitle={`$${meta?.totalAmount ?? 0}`}
			/>
			<State
				icon={
					<div className="p-2 bg-purple-100 rounded-lg">
						<Calendar className="h-6 w-6 text-purple-600" />
					</div>
				}
				title="Total Transactions"
				subTitle={`${meta?.totalDocuments ?? 0}`}
			/>
		</div>
	);
}
