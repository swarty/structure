export default function activeMenuElement(): void {
	const url: string = window.location.pathname,
				parseUrl = new RegExp(url.replace('/', '') + '$', 'i');
	const headerList: Array<Element> = Array.from(document.querySelectorAll('.header__content .navigation__list > li'));

	headerList.forEach( (li: HTMLElement) => li.classList.remove('is-active'));
	const li: Element = headerList.find( (li: HTMLElement) => parseUrl.test(li.querySelector('a').href));
	li && li.classList.add('is-active');
}