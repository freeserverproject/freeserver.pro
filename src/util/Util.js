export const copyElementText = ele => {
	const range = document.createRange();
	range.selectNodeContents(ele);

	const selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);
	document.execCommand('copy');
};
