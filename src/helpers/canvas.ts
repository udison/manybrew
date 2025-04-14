export function drawRadialProgress(canvas: HTMLCanvasElement, progressPercent: number) {
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
		const startAngle = -0.5 * Math.PI; // Start at top (12 o'clock position)
		const endAngle = startAngle + (progressPercent / 100) * 2 * Math.PI;

		// Draw the progress arc (white, 6px width with round ends)
		ctx.beginPath();
		ctx.arc(centerX, centerY, radius, startAngle, endAngle);
		ctx.strokeStyle = 'white';
		ctx.lineWidth = 6;
		ctx.lineCap = 'round'; // Round borders
		ctx.stroke();
	}
	// TODO: Till here

	// TODO: Move this display to a HTML element
	// Display the percentage in the center
	// ctx.font = 'bold 30px Arial';
	// ctx.fillStyle = 'white';
	// ctx.textAlign = 'center';
	// ctx.textBaseline = 'middle';
	// ctx.fillText(`${Math.round(progressPercent)}%`, centerX, centerY);
}
