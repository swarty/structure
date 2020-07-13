export default class DynamicContent {
	private dynamicBlock: HTMLElement | null
	private requestRoute: string
	private pageType: string

	private filterList: NodeList
	private selectedFilter: number
	private filteredItemsOffset: number

	private mobileIndicator: HTMLElement | null
	private mobileInput: HTMLInputElement | null

	private itemsContainer: HTMLElement | null
	private itemList: NodeList

	private showButton: HTMLButtonElement | null

	constructor(lightbox) {
		this.dynamicBlock = document.querySelector('.js__dynamic-content') || null;
		if(!this.dynamicBlock) return;

		// get route
		this.requestRoute = this.dynamicBlock.dataset.itemsRoute;
		this.pageType = this.dynamicBlock.dataset.type;

		// get list elements
		this.itemsContainer = document.querySelector('.js__list') || null;
		this.getItems();

		// get filter elements
		this.filterList = this.dynamicBlock.querySelectorAll('.js__filter-list button');
		this.mobileIndicator = this.dynamicBlock.querySelector('.js__mobile-indicatior');
		this.selectedFilter = 0;
		this.navigation();

		// get show more button
		this.showButton = this.dynamicBlock.querySelector('.js__show-list-button') || null;
		this.loadMoreItems();
	}

	getItems() {
		if(!this.itemsContainer) return;
		this.itemList = this.itemsContainer.querySelectorAll('[data-filter]');
	}

	navigation() {
		if(!this.filterList.length) return;
		this.mobileInput = this.mobileIndicator.nextElementSibling as HTMLInputElement;
		const that = this;

		this.filterList.forEach( (button: HTMLButtonElement) => {
			button.addEventListener('click', this.filterOnClick.bind(button, this));
		})
	}

	filterOnClick(context) {
		const that = context,
					button = this as HTMLButtonElement;
		

		let filter = button.dataset.filter;
		that.selectedFilter = Number(filter);

		// change active class on navigation
		that.filterList.forEach( (button: HTMLElement) => button.classList.remove('is-active'));
		button.classList.add('is-active');

		// filter
		that.filter(context, button);
		that.createUrl(that);
		that.mobileInput.checked = false;
	}


	filter(context = this, button = null) {
		const that = context;
		that.getItems();

		if(!that.itemList.length) return;
		that.itemList.forEach( (item: HTMLElement) => {
			// reset filter
			item.classList.remove('is-filtered');
			// filter by new value
		if(button) that.mobileIndicator.innerHTML = button.innerHTML;
			if(that.selectedFilter == 0) item.classList.remove('is-filtered')
			else if(that.selectedFilter !== +item.dataset.filter) item.classList.add('is-filtered');
		})
		
		if(that.selectedFilter == 0) { that.filteredItemsOffset = that.itemList.length; }
		else {
			that.filteredItemsOffset = Array.from(that.itemList).filter( (item:HTMLElement) => {
				return that.selectedFilter === +item.dataset.filter
			}).length;
		}
		
		// that.createUrl(that);
	}


	createUrl(context) {
		const that = context,
					length = context.filteredItemsOffset,
					exp = +length / 5,
					slug = that.selectedFilter === 0 ? '' : `slug=${that.selectedFilter}&`;
		window.location.hash = `${slug}offset=${length}`
	}


	loadMoreItems() {
		if(!this.showButton) return;
		this.showButton.addEventListener('click', this.loadItems.bind(this, this.templating));
	}

	loadItems(callback) {
		let url = this.requestRoute + '?';
		if(this.selectedFilter !== 0) url += `slug=${this.selectedFilter}&`;
		url += `offset=${this.filteredItemsOffset !== undefined ? this.filteredItemsOffset : this.itemList.length }`;
		fetch(url)
			.then( resp => resp.json())
			.then( resp => callback && callback(this, resp))
			.catch( (err) => {
				console.log('error', err)
			})
	}

	templating(context, resp) {
		const that = context,
					data = resp;
		let template = '';

		template = data.map( (item) => {
			if(that.pageType == 'projects') {
				return `
					<section data-filter-id="${item.category.id}" class="info-case intro__row">
					<a href="${item.link}" class="info-case__inner is-huge vertical is-media">
						<picture class="info-case__picture">
							<source srcset="${item.preview_mobile}" media="(max-width: 767px)">
							<img src="${item.preview}" alt="${item.name}"">
						</picture>
						<div class="media__info info-case__info dc">
							<div class="block-cat">
								<ul class="block-cat__list is-white">
									<li class="block-cat__item">
										<p title="${item.category.name}">${item.category.name}</p>
									</li>
									<li class="block-cat__item">
										<p>${item.executed_at}</p>
									</li>
								</ul>
							</div>
							<h3 class="info-case__title">${item.name}</h3>
							<div class="info-case__button dc hs ve">
								<div class="site-button is-plus">
									<p class="site-button__text">${that.itemList[0].querySelector('.site-button__text').textContent}</p>
									<span class="plus"></span>
								</div>
							</div>
						</div>
					</a>
				</section>
			`;
			} else if(that.pageType == 'blog') {
				return `
				<section data-filter-id="${item.category.id}" class="tile__item block-line">
					<a href="${item.link}" class="tile__inner block-line__inner dc hc vc">
						<div class="block-line__date">
							<time datetime="${item.executed_at}" class="block-line__time">${item.executed_at}</time>
						</div>
						<div class="block-line__short">
							<h3>${item.name}</h3>
							<div class="block-cat">
								<ul class="block-cat__list is-slash is-small is-black">
									<li class="block-cat__item">
										<p title="${item.category.name}">${item.category.name}</p>
									</li>
									<li class="block-cat__item">
										<p>Exponic</p>
									</li>
								</ul>
							</div>
						</div>
						<div class="button">
							<div class="site-button is-plus">
								<p class="site-button__text">${that.itemList[0].querySelector('.site-button__text').textContent}</p>
								<div class="plus"></div>
							</div>
						</div>
					</a>
				</section>
				`;
			} else if(that.pageType == 'reviews') {
				let partText = '';
				const fileType = item.doc.split('.')[1];
				if(fileType === 'pdf') {
					partText = `
					<a href="${item.doc}" target="_blank" class="event-view__view">
						<div class="event-view__image">
							<picture>
								<img src="${item.preview_doc}" alt="${item.project_name}">
							</picture>
							<div class="plus is-white"></div>
						</div>
					</a>
					`;
				} else {
					partText = `
					<div class="event-view__view">
						<div class="event-view__image">
							<picture>
								<img src="${item.preview_doc}" alt="${item.project_name}">
							</picture>
							<div class="plus is-white"></div>
						</div>
					</div>
				`;
				}

				return `
				<section data-filter-id="" class="intro__row">
					<div class="event-view dc">
						${partText}
						<div class="event-view__content dc">
							<blockquote class="typography bigger is-full">
								<p>${item.description}</p>
							</blockquote>
							<div class="block-cat">
								<ul class="block-cat__list is-small is-white">
									<li class="block-cat__item">
										<p>${item.autor_name}</p>
									</li>
									<li class="block-cat__item">
										<p>${item.project_name}</p>
									</li>
									<li class="block-cat__item">
										<p>${item.added_at}</p>
									</li>
								</ul>
							</div>
							<div class="block-icon is-red">
								<svg viewBox="0 0 104 104">
									<g transform="translate(-399.718 -4295.718)">
										<path class="img" d="M454.4,4363.2L454.4,4363.2v-3.3c2.8-0.1,5.5-1.3,7.3-3.5c1.6-1.8,2.6-4.1,2.8-6.6
											c0-0.9-0.2-1.8-0.8-2.5c-0.6-0.7-1.5-1.1-2.5-1c-3.8-0.1-6.9-3.2-6.8-7c-0.1-3.8,3-7,6.8-7c1.4,0,2.8,0.3,4.1,0.9
											c1.1,0.5,2.1,1.4,2.8,2.4c1.5,2.3,2.3,5,2.2,7.7c-0.1,4.8-1.6,9.4-4.3,13.4c-1.3,1.9-3,3.6-5,4.8
											C459,4362.6,456.7,4363.2,454.4,4363.2z M434.2,4363.2L434.2,4363.2v-3.3c2.8-0.1,5.5-1.3,7.3-3.5c1.6-1.8,2.6-4.1,2.8-6.6
											c0-0.9-0.2-1.8-0.8-2.5c-0.6-0.7-1.5-1.1-2.5-1c-3.8-0.1-6.9-3.2-6.8-7c-0.1-3.8,3-7,6.8-7c1.4,0,2.8,0.3,4.1,0.9
											c1.1,0.5,2.1,1.4,2.8,2.4c1.5,2.3,2.3,5,2.2,7.7c-0.1,4.8-1.6,9.4-4.3,13.4c-1.3,1.9-3,3.6-5,4.8
											C438.8,4362.6,436.5,4363.2,434.2,4363.2z"/>
										<path class="circle" d="M451.7,4399.7c-28.7,0-52-23.3-52-52s23.3-52,52-52s52,23.3,52,52S480.4,4399.7,451.7,4399.7z M451.7,4296.7
											c-28.1,0-51,22.9-51,51c0,28.1,22.9,51,51,51c28.1,0,51-22.9,51-51C502.7,4319.6,479.8,4296.7,451.7,4296.7z"/>
									</g>
								</svg>
							</div>
						</div>
					</div>
					<div class="spacer"></div>
				</section>
				`;
			}
		}).join('');

		that.itemsContainer.innerHTML += template;
		that.filter(that);
		that.createUrl(that);
	}
}