export default function smoothScroll(header, popups) {
	const anchors = document.querySelectorAll('a[href*="#"]');
	
	anchors.forEach( (anchor: HTMLAnchorElement) => {
		$(anchor).click( (e) => {
			const ref = anchor.href.split('#')[1];

			const section = document.querySelector(`article[id="${ref}"]`) || null;
			if(!section) return;

			popups.closePopups();
			header.closeMenu();
			$('html, body').animate({
				scrollTop: $(section).offset().top - 100
			}, 7e2);
			e.preventDefault();
		})
	})
}