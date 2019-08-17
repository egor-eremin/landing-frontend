import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'slick-carousel';
import 'magnific-popup';
import 'jquery-validation';
import 'focus-visible';
import objectFitImages from 'object-fit-images';
svg4everybody();
objectFitImages();

window.$ = $;
window.jQuery = $;

require('ninelines-ua-parser');
