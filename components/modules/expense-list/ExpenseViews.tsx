import { Expense } from "@/types";
import DesktopTableView from "./DesktopTableView";
import MobileCardView from "./MobileCardView";

interface IProps {
	expenses: Expense[];
	onHandleEdit: (expense: Expense) => void;
}

export default function ExpenseViews({ expenses, onHandleEdit }: IProps) {
	return (
		<>
			<DesktopTableView expenses={expenses} onHandleEdit={onHandleEdit} />
			<MobileCardView expenses={expenses} onHandleEdit={onHandleEdit} />
		</>
	);
}
