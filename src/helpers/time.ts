export function formatToFullMinute(totalSeconds: number) {
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = (totalSeconds - minutes * 60).toFixed(1).padStart(4, "0");

	return `${minutes.toString().padStart(2, "0")}:${seconds}`;
}
