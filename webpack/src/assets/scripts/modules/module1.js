import throttle from 'lodash.throttle';
import {TweenMax} from 'gsap';

TweenMax.to(document.querySelector('img'), .5, {x: '500px', y: '500px', ease: 'easeInOut'})