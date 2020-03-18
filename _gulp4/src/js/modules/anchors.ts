// import ScrollMagic from 'scrollmagic';
// import platform from 'platform';


// export default class Navigation {
// 	private navigation: Array<HTMLAnchorElement> | null;
// 	private sections: NodeList;
// 	private menu: any;
// 	private popup: any;

// 	constructor(siteMenu, popup) {
// 		this.navigation = Array.from(document.querySelectorAll('.js__navigation a')) || null;
// 		this.sections = document.querySelectorAll('article[id]');
// 		this.menu = siteMenu;
// 		this.popup = popup;

// 		this.init();
// 	}

// 	init() {
// 		if(this.sections.length !== 0) {
// 			this.createTubeMenu();
// 			this.smoothNavigation();
// 		}
// 	}

// 	createTubeMenu() {
// 		const controller = new ScrollMagic.Controller();

// 		this.navigation.forEach( link => {
// 			const source = link.href.split('#')[1];
// 			const findedSection = this.sections.find(section => section.id === source) as HTMLElement;
// 			const sectionHeight = findedSection.offsetHeight ? findedSection.offsetHeight : findedSection.getBoundingClientRect().height;
// 			// console.log(findedSection.offsetHeight, findedSection.getBoundingClientRect().height)

// 			new ScrollMagic.Scene({
// 				triggerElement: findedSection
// 			})
// 			.setClassToggle(link.parentNode, "is-active") // add class toggle
// 			.duration((sectionHeight))
// 			// .addIndicators() // add indicators (requires plugin)
// 			.addTo(controller);
// 		})
// 	}

// 	smoothNavigation() {
// 		document.addEventListener('click', (event: Event) => {
// 			const target = event.target as HTMLAnchorElement,
// 						platformConditions = ['microsoft edge', 'ie', 'safari', 'ios'];

// 			let anchor: HTMLAnchorElement | null = null;
// 			if(target.nodeName.toLowerCase() == 'a') {
// 				anchor = target;
// 			} else if(target.parentNode.nodeName.toLowerCase() == 'a') {
// 				anchor = target.parentNode as HTMLAnchorElement;
// 			}

// 			if(!anchor) return;
// 			let link: string | null  = anchor.href.split('#')[1] || null;
// 			const section: Element | null = this.sections.find( node => node.id === link) || null;
// 			if(!section) return;

// 			this.menu.closeMenuOnEvent();
// 			this.popup.closePopup();
// 			if (platformConditions.includes(platform.name.toLowerCase())) return;
			
// 			window.scrollBy({
// 				top: section.getBoundingClientRect().top - 130,
// 				left: 0,
// 				behavior: 'smooth'
// 			});

// 			// make seo history and prevent for browsers that no support
// 			history.pushState(null, null, "#" + link);
// 			event.preventDefault();
// 		})
// 	}
// }