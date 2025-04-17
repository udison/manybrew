import { Theme } from "@/contexts/ThemeContext";

export function drawRadialProgress(canvas: HTMLCanvasElement, progressPercent: number, theme: Theme) {
	if (!canvas) return;

	const ctx = canvas.getContext("2d");

	if (!ctx) return;

	// Clear the canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	const centerX = canvas.width / 2;
	const centerY = canvas.height / 2;
	const padding = 3; // Margin between circle and canvas edge
	const radius = Math.min(centerX, centerY) - padding;

	// Draw the background circle
	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
	ctx.strokeStyle = '#4B5563';
	ctx.lineWidth = 2;
	ctx.stroke();

	// TODO: Move this to another function (like updateProgress()) because this is the only part
	//       that should be rerendered every setInterval call
	// Calculate the progress angle
	if (progressPercent > 0) {
		const startAngle = -0.5 * Math.PI; // Start at top
		const endAngle = startAngle + (progressPercent / 100) * 2 * Math.PI;

		// Draw the progress
		ctx.beginPath();
		ctx.arc(centerX, centerY, radius, startAngle, endAngle);
		ctx.strokeStyle = theme === "dark" ? "white" : "black";
		ctx.lineWidth = 6;
		ctx.lineCap = 'round'; // Round borders
		ctx.stroke();
	}
	// TODO: Till here
}
