"use client";
import { Expense } from "@/types";
import {
	Cell,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
} from "recharts";
type TooltipPayload = ReadonlyArray<any>;

type Coordinate = {
	x: number;
	y: number;
};

type PieSectorData = {
	percent?: number;
	category?: string;
	midAngle?: number;
	middleRadius?: number;
	tooltipPosition?: Coordinate;
	value?: number;
	paddingAngle?: number;
	dataKey?: string;
	payload?: any;
	tooltipPayload?: ReadonlyArray<TooltipPayload>;
};

type GeometrySector = {
	cx: number;
	cy: number;
	innerRadius: number;
	outerRadius: number;
	startAngle: number;
	endAngle: number;
};

type PieLabelProps = PieSectorData &
	GeometrySector & {
		tooltipPayload?: any;
	};

const COLORS = [
	"#8884d8",
	"#82ca9d",
	"#ffc658",
	"#ff7c7c",
	"#8dd1e1",
	"#d084d0",
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
}: PieLabelProps) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
	const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill="white"
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline="central"
		>
			{`${((percent ?? 1) * 100).toFixed(0)}%`}
		</text>
	);
};

export default function PieChartComponent({expenses}: {expenses: Expense[]}) {
	// Calculate category totals for pie chart
	const categoryTotals = expenses.reduce(
		(acc: Record<string, number>, expense) => {
			acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
			return acc;
		},
		{}
	);
	// const categoryTotals = {
	// 	Entertainment: 28,
	// 	Food: 90.25,
	// 	Transportation: 45,
	// 	Utilities: 120.3,
	// };

	const pieData = Object.entries(categoryTotals).map(([category, amount]) => ({
		name: category,
		value: amount,
	}));

	return (
		<div className="max-w-2xl mx-auto">
			<div className="bg-white rounded-xl shadow-lg border border-gray-200">
				<div className="px-6 py-4 border-b border-gray-200">
					<h2 className="text-lg font-semibold text-gray-900">
						Expense Categories Overview
					</h2>
				</div>
				<div className="p-6">
					<div className="h-80">
						<ResponsiveContainer width="100%" height="100%">
							<PieChart>
								<Pie
									data={pieData}
									cx="50%"
									cy="50%"
									labelLine={false}
									label={renderCustomizedLabel}
									outerRadius={100}
									fill="#8884d8"
									dataKey="value"
								>
									{pieData.map((entry, index) => (
										<Cell
											key={`cell-${index}`}
											fill={COLORS[index % COLORS.length]}
										/>
									))}
								</Pie>
								<Tooltip
									formatter={(value) => [
										`$${typeof value === "number" ? value.toFixed(2) : value}`,
										"Amount",
									]}
								/>
								<Legend />
							</PieChart>
						</ResponsiveContainer>
					</div>
				</div>
			</div>
		</div>
	);
}
