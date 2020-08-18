import aos from '../../../node_modules/aos/dist/aos'

export default function aosAnimation() {
	aos.init({
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
		once: true,
		offset: 50,
		easing: "ease",
		duration: 700
	})
}