import throttle from 'lodash.throttle';
import {TweenMax} from 'gsap';

TweenMax.to(document.querySelector('h1'), .5, {x: '500px', y: '500px', ease: 'easeInOut'})