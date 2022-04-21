export const copyElementText = (ele: Node) => {
	const range = document.createRange();
	range.selectNodeContents(ele);

	const selection = window.getSelection();
	if (!selection) return;
	selection.removeAllRanges();
	selection.addRange(range);
	document.execCommand('copy');
};
