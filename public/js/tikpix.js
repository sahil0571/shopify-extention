/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./resources/js/tikpix.js ***!
  \********************************/
// console.clear()
// if (typeof jQuery === 'undefined') {
//     TPI_loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js');
// }
// function TPI_loadScript(url) {
//     var script = document.createElement('script');
//     script.src = url;
//     var head = document.getElementsByTagName('head')[0],
//         done = false;
//     head.appendChild(script);
//     script.onload = script.onreadystatechange = function () {
//         if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
//             done = true;
//             script.onload = script.onreadystatechange = null;
//             head.removeChild(script);
//         }
//     };
// }
// let installed = false;
// function addScript(data) {
//     let scriptData = data.pixel_code;
//     window.TIKPIX_INSTALLER = scriptData;
//     jQuery('head').prepend(window.TIKPIX_INSTALLER);
//     installed = true;
//     console.log('%c------ Pixel added. ------', 'color: #00ff00');
//     triggerEvents();
// }
// function fetchData() {
//     let mixurl = process.env.MIX_APP_URL;
//     let domain = window.location.hostname;
//     fetch(mixurl + "/api/get-settings/" + domain)
//         .then((res) => {
//             res.json().then((r) => {
//                 console.log(r);
//                 if (r.success == true && r.data.pixel_tracking_enabled) {
//                     window.TIKPIX_DATA = r.data;
//                     addScript(r.data);
//                 }
//             })
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// }
// fetchData();
// function triggerEvents() {
//     if (installed) {
//         let currentUrl = location;
//         let data = window.TIKPIX_DATA;
//         // <----------------- Product Details Page View Events ------------------>
//         if (data.track_Product_details_page_view) {
//             // Products Page
//             if (currentUrl.pathname.indexOf('products') > -1 || ShopifyAnalytics.meta.page.pageType == 'product') {
//                 pageVisitedEvent();
//                 console.log('Product Details Page View Triggered');
//             }
//             // Home Page
//             if (ShopifyAnalytics.meta.page.pageType == 'home' && data.track_Product_details_page_view_homepage == true) {
//                 pageVisitedEvent();
//                 console.log('Home Page View Triggered');
//             }
//         }
//         // <----------------- Complete Payment Events --------------------------->
//         if (data.track_complate_payment) {
//             // Thank you page
//             if (location.pathname.indexOf('/thank_you') > -1) {
//                 completePaymentEvent(data.track_order_value_currency);
//             }
//         }
//         // <----------------- Add to cart event --------------------------------->
//         if (data.track_add_to_cart) {
//             let addToCartBtn = detectAddToCartButton();
//             console.log(addToCartBtn);
//             if (addToCartBtn !== null) {
//                 addToCartBtn.addEventListener('click', function () {
//                     addTocartEvent()
//                 });
//             }
//         }
//         // <----------------- Checkout event ----------------------------------->
//         if(data.track_initiate_checkout){
//             let checkoutBtn = detectCheckoutButton();
//             console.log(checkoutBtn);
//             if(checkoutBtn !== null){
//                 checkoutBtn.addEventListener('click',function(){
//                     initiateCheckout();
//                 });
//             }
//         }
//     }
// }
// // <---------------------- Events ----------------------->
// function pageVisitedEvent() {
//     window.ttq.track('ViewContent');
// }
// function completePaymentEvent(extras) {
//     if (extras) {
//         window.ttq.track('CompletePayment');
//     } else {
//         window.ttq.track('CompletePayment');
//     }
// }
// function initiateCheckout(){
//     window.ttq.track('InitiateCheckout');
// }
// function addTocartEvent() {
//     window.ttq.track('AddToCart');
// }
// // <---------------------- Helpers ---------------------->
// function detectAddToCartButton() {
//     var resultElement = null;
//     var adcButtonSelectors = [
//         '*[tpi-override="true"]:not([disabled])',
//         'input[name="add"]:not([disabled])',
//         'button[name="add"]:not([disabled])',
//         'button[id="add"]:not([disabled])',
//         'input[id="add"]:not([disabled])',
//         'button[id="addToCart"]:not([disabled])',
//         'input[id="addToCart"]:not([disabled])',
//         'input[name="AddToCart"]:not([disabled])',
//         'button[name="AddToCart"]:not([disabled])',
//         '*[data-add-to-cart]:not([disabled])',
//         'input[id="AddToCart"]:not([disabled])',
//         'button[id="AddToCart"]:not([disabled])',
//         '*[id="add-to-cart"]:not([disabled])',
//         '*[id="adbtn"]:not([disabled])',
//         '*[class*="product-form--atc-button"]:not([disabled])',
//         '*[class*="product__add-to-cart"]:not([disabled])',
//         '*[id="shopify_add_to_cart"]:not([disabled])',
//         '*[class*="product-form--add-to-cart"]:not([disabled])',
//         '*[class*="ProductForm__AddToCart"]:not([disabled])',
//         '*[class*="add-to-cart"]:not([disabled])',
//         '*[class*="addtocart"]:not([disabled])',
//         '*[class*="AddToCart"]:not([disabled])',
//         '*[class*="addToCart"]:not([disabled])',
//         '*[data-action="add-to-cart"]:not([disabled])',
//         '*[data-add-to-cart-text]:not([disabled])',
//         '*[name="add"]:not([disabled])',
//         '*[data-add-button]:not([disabled])',
//         '*[data-buy-button]:not([disabled])',
//         '*[data-lhi="trans_buynow"]:not([disabled])',
//         '*[class*="add_to_cart_button"]:not([disabled])'
//     ];
//     var cartFormSelectors = [
//         'input[type="submit"]:not([disabled])',
//         'input[type="button"]:not([disabled])'
//     ];
//     for (var selector of adcButtonSelectors) {
//         var element = document.querySelector(selector);
//         if (element !== null) {
//             return element;
//         }
//     }
//     var cartFormElement = document.querySelector('form[action="/cart/add"]');
//     for (var selector of cartFormSelectors) {
//         if (cartFormElement !== null) {
//             var element = cartFormElement.querySelector(selector);
//         }
//         if (element !== null) {
//             return element;
//         }
//     }
//     return null;
// }
// function detectCheckoutButton() {
//     var resultElement = null;
//     var checkoutButtonSelectors = [
//         '*[name="checkout"]:not([disabled])',
//         '*[name="goto_pp"]:not([disabled])',
//         '*[name="goto_gc"]:not([disabled])',
//         '*[value*="Checkout"]',
//         '*[value*="Check out"]',
//         '*[href*="/checkout"]',
//         '*[onclick*="/checkout"]'
//     ];
//     var cartFormSelectors = [
//         'input[type="submit"]:not([disabled])',
//         'input[type="button"]:not([disabled])'
//     ];
//     for (var selector of checkoutButtonSelectors) {
//         var elementSearchResult = document.querySelectorAll(selector);
//         if (elementSearchResult.length > 1) {
//             if (elementSearchResult[1].getAttribute('egw-ignore') === "true") {
//                 continue;
//             }
//             if (elementSearchResult[1].hasOwnProperty('href')) {
//                 if (elementSearchResult[1].getAttribute('href').indexOf("/front_end/login") > -1) {
//                     continue;
//                 }
//             }
//             return elementSearchResult[1];
//         } else if (elementSearchResult.length > 0) {
//             if (elementSearchResult[0].getAttribute('egw-ignore') === "true") {
//                 continue;
//             }
//             if (elementSearchResult[0].hasOwnProperty('href')) {
//                 if (elementSearchResult[0].getAttribute('href').indexOf("/front_end/login") > -1) {
//                     continue;
//                 }
//             }
//             return elementSearchResult[0];
//         }
//     }
//     var cartFormElement = document.querySelector('form[action="/cart"]');
//     if (cartFormElement !== null) {
//         for (var selector of cartFormSelectors) {
//             var element = cartFormElement.querySelector(selector);
//             if (element !== null) {
//                 return element;
//             }
//         }
//     }
//     return null;
// }
// // import axios from 'axios';
// // import Vue from 'vue'
// // import TikPix from './components/pages/TikPix/tikPix.vue'
// // function addDiv() {
// //     console.log('---------------- Tikpix adding div --------------------');
// //     let div = document.createElement('div');
// //     div.setAttribute('id', 'tikpixDiv');
// //     div.innerHTML = '<h1>Hello From Div.</h1>';
// //     document.body.insertAdjacentElement('beforeend', div)
// //     // document.body.append(div);
// //     console.log(div);
// // }
// // addDiv();
// // let url = window.location.href;
// // console.log(url);
// // const app = new Vue({
// //     el: '#tikpixDiv',
// //     render: h => h(TikPix),
// // });
// // Window.TikPix = {
// //     init: function () {
// //         app.$mount();
// //     },
// // };
/******/ })()
;