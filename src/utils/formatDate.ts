export default function formatDate(date: Date) {
	const currDate = new Date(date);

	return currDate.toLocaleDateString("en-US", { timeZone: "UTC" });
}
