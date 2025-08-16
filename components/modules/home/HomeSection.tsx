
"use client"
import { useEffect, useState } from "react";
import HeaderStats from "./HeaderStats";
import PieChartComponent from "./PieChartComponent";
import { Expense } from "@/types";
import { getAllExpenses } from "@/data/expense";

export default function HomeSection() {
	const [expenses, setExpenses] = useState<Expense[] | []>([]);
	const [metaData, setMetaData] = useState<null | {
		totalDocuments: number;
		totalAmount: number;
	}>(null);

	useEffect(() => {
		const fetchData = async () => {
			const result = await getAllExpenses();
			if (!result.error) {
				setExpenses(result.data);
				setMetaData(result.meta);
			}
		};
		fetchData();
	}, []);
	return (
		<>
			<HeaderStats meta={metaData} />
			<PieChartComponent expenses={expenses}/>
		</>
	);
}
