import { ReactNode } from "react";

interface IProps {
	icon: ReactNode;
	title: string;
	subTitle: string;
}

export default function State({ icon, title, subTitle }: IProps) {
	return (
		<div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
			<div className="flex items-center">
				{icon}
				<div className="ml-4">
					<p className="text-sm font-medium text-gray-500">{title}</p>
					<p className="text-2xl font-bold text-gray-900">
						{/* ${totalExpenses.toFixed(2)} */}
						{subTitle}
					</p>
				</div>
			</div>
		</div>
	);
}
