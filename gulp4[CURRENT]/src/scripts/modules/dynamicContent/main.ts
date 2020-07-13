export default class DynamicContent {
	private container: HTMLElement | null
	private requestRoute: string
	private pageType: string
	private items: NodeList
	private displayedItems: number
	private showMoreButton: HTMLButtonElement | null
	private step: number

	constructor() {
		this.container = document.querySelector('.js__dynamic-content') || null;
		if(!this.container) return;

		// get route and page type from data attrs
		this.requestRoute = this.container.dataset.itemsRoute;
		this.pageType = this.container.dataset.type;
		this.step = +this.container.dataset.step || 6;
		if(!this.requestRoute || !this.pageType) return;

		this.getItems();
		this.loadMoreOnButton();
	}

	getItems() {
		const container: HTMLElement = this.container.querySelector('.js__list') || null;
		if(!container) {
			this.displayedItems = 0;
			return;
		}

		this.items = container.querySelectorAll('.catalog-item');
		this.displayedItems = this.items.length;
	}

	loadMoreOnButton() {
		this.showMoreButton = this.container.querySelector('.js__show-more') || null;
		if(!this.showMoreButton) return;

		this.showMoreButton.addEventListener('click', this.loadItems.bind(this, this.showMoreButton));
	}

	loadItems() {
		const container: HTMLElement = this.container.querySelector('.js__list') || null;
		fetch(this.requestRoute + this.getUrlProprs())
			.then( resp => resp.json())
			.then( resp => {
				this.templating(resp, container);
				this.createUrl();
				this.hideButtonOnEnd(resp.length);
				this.getItems();
			})
			.catch( (err) => {
				console.log('error', err)
			})
	}

	templating(resp, container) {
		container.innerHTML += resp.map( (item) => {
			if(this.pageType == 'news') {
				return `
				<section class="catalog-item is-topic">
					<div class="catalog-item__inner shadow">
						<div class="catalog-item__media">
							<picture>
								<img src="${item.preview}" alt="${item.title}">
							</picture>
						</div>
						<div class="catalog-item__content">
							<div class="catalog-item__descr">
								<h3>${item.title}</h3>
								<p>${item.description}</p>
							</div>
							<div class="catalog-item__button">
								<a class="site-button is-white shadow more-shadow" href="${item.link}">
									<span class="site-button__text">${this.container.querySelector('.site-button__text').textContent}</span>
									<span class="site-button__arrow">
										<svg class="icon-button-arrow">
											<use xlink:href="./img/sprite.svg#button-arrow"></use>
										</svg>
									</span>
								</a>
							</div>
						</div>
					</div>
				</section>
			`;
			} else if(this.pageType == 'catalog') {
				return `
				<a class="catalog-item" href="${item.link}">
					<figure class="catalog-item__inner shadow">
						<div class="catalog-item__media">
							<picture>
								<img src="${item.preview}" alt="${item.title}">
							</picture>
						</div>
						<div class="catalog-item__content">
							<figcaption class="catalog-item__descr">
								<h3>${item.title}</h3>
								${item.sizes ? `<p>${item.sizes}</p>` : ''}
							</figcaption>
							<div class="catalog-item__button">
								<div class="site-button is-white shadow more-shadow">
									<span class="site-button__text">${this.container.querySelector('.site-button__text').textContent}</span>
									<span class="site-button__arrow">
										<svg class="icon-button-arrow">
											<use xlink:href="./img/sprite.svg#button-arrow"></use>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</figure>
				</a>`;
			}
		}).join('')
	}

	getUrlProprs() {
		let slug = '';
		window.location.pathname.split('/news/')[1]
			? slug = `slug=${window.location.pathname.split('/news/')[1]}&`
			: window.location.pathname.split('/catalog/')[1]
				? slug = `slug=${window.location.pathname.split('/catalog/')[1]}&`
				: slug = ''
		const offset = `offset=${this.displayedItems}`;
		return '?' + slug + offset;
	}

	createUrl() {
		window.history.pushState(null, '', window.location.pathname + this.getUrlProprs())
	}


	hideButtonOnEnd(length) {
		if(length < this.step) this.showMoreButton.classList.add('is-hidden');
	}
}