export const getAllExpenses = async (queryParams: string = "") => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/expenses?${queryParams}`
		);

		if (!res.ok) {
			throw new Error(`Server Error: ${res.status} ${res.statusText}`);
		}

		const data = await res.json();
		return data;
	} catch (error) {
		// console.error("Failed to fetch expenses:", error.message);
		if (error instanceof Error) {
			return { error: true, message: error.message };
		} else {
			return { error: true, message: "An unknown error occurred." };
		}
	}
};
