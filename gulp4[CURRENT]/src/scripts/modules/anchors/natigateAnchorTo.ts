import platform from 'platform'

export default function navigateAnchorTo(anchor) {
	const browserList: Array<string> = ['microsoft edge', 'ie', 'safari', 'ios'];
	
	if (browserList.includes(platform.name.toLowerCase())) return;
	const link: string | null  = anchor.href.split('#')[1],
				section = document.querySelector(`#${link}`) || null;
	if(!section) return;

	window.scrollBy({
		top: section.getBoundingClientRect().top,
		left: 0,
		behavior: 'smooth'
	});

	// make seo history and prevent for browsers that no support
	history.pushState(null, null, "#" + link);
	event.preventDefault();
}