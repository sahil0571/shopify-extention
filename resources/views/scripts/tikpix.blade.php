@if (isset($settingsData) && $settingsData['pixel_tracking_enabled'] == true)
    if (window.TIKPIX_DATA == undefined) {
        window.TIKPIX_DATA = @json($settingsData);
        // console.log(window.TIKPIX_DATA);
        // console.clear()


        if (typeof jQuery === 'undefined') {
            loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js');
        } else {
            addScript(window.TIKPIX_DATA);
        }

        function loadScript(url) {
            var script = document.createElement('script');
            script.src = url;
            var head = document.getElementsByTagName('head')[0];
            head.appendChild(script);

            script.addEventListener('load', (e) => {
                // console.log('jquery loaded');
                addScript(window.TIKPIX_DATA);
            })
        }

        // let installed = false;

        function addScript(data) {

            let scriptData = data.pixel_code;
            window.TIKPIX_INSTALLER = scriptData;
            jQuery('head').prepend(window.TIKPIX_INSTALLER);
            let installed = true;
            // console.log('%c------ Pixel added. ------', 'color: #00ff00');
            triggerEvents();

            function triggerEvents() {
                if (installed) {
                    let currentUrl = location;
                    let data = window.TIKPIX_DATA;

                    // <----------------- Product Details Page View Events ------------------>
                    if (data.track_Product_details_page_view) {
                        // Products Page
                        if (currentUrl.pathname.indexOf('products') > -1 || ShopifyAnalytics.meta.page.pageType == 'product') {
                            pageVisitedEvent();
                            // console.log('Product Details Page View Triggered');
                        }
                        // Home Page
                        if (ShopifyAnalytics.meta.page.pageType == 'home' && data.track_Product_details_page_view_homepage == true) {
                            pageVisitedEvent();
                            // console.log('Home Page View Triggered');
                        }
                    }

                    // <----------------- Complete Payment Events --------------------------->
                    if (data.track_complate_payment) {
                        // Thank you page
                        if (location.pathname.indexOf('/thank_you') > -1) {
                            completePaymentEvent(data.track_order_value_currency);
                        }
                    }

                    // <----------------- Add to cart event --------------------------------->
                    if (data.track_add_to_cart) {
                        let addToCartBtn = detectAddToCartButton();
                        // console.log(addToCartBtn);
                        if (addToCartBtn !== null) {
                            addToCartBtn.addEventListener('click', function () {
                                addTocartEvent()
                            });
                        }
                    }

                    // <----------------- Checkout event ----------------------------------->
                    if (data.track_initiate_checkout) {
                        let checkoutBtn = detectCheckoutButton();
                        // console.log(checkoutBtn);
                        if (checkoutBtn !== null) {
                            checkoutBtn.addEventListener('click', function () {
                                initiateCheckout();
                            });
                        }
                    }

                }
            }


            // <---------------------- Events ----------------------->
            function pageVisitedEvent() {
                window.ttq.track('ViewContent');
            }

            function completePaymentEvent(extras) {
                if (extras) {
                    window.ttq.track('CompletePayment', {
                        currency: Shopify.checkout.currency,
                        value: Shopify.checkout.total_price,
                        content_id: Shopify.checkout.order_id
                    });
                } else {
                    window.ttq.track('CompletePayment');
                }
            }

            function initiateCheckout() {
                window.ttq.track('InitiateCheckout');
            }

            function addTocartEvent() {
                window.ttq.track('AddToCart');
            }

            // <---------------------- Helpers ---------------------->

            function detectAddToCartButton() {
                var resultElement = null;
                var adcButtonSelectors = [
                    '*[tpi-override="true"]:not([disabled])',
                    'input[name="add"]:not([disabled])',
                    'button[name="add"]:not([disabled])',
                    'button[id="add"]:not([disabled])',
                    'input[id="add"]:not([disabled])',
                    'button[id="addToCart"]:not([disabled])',
                    'input[id="addToCart"]:not([disabled])',
                    'input[name="AddToCart"]:not([disabled])',
                    'button[name="AddToCart"]:not([disabled])',
                    '*[data-add-to-cart]:not([disabled])',
                    'input[id="AddToCart"]:not([disabled])',
                    'button[id="AddToCart"]:not([disabled])',
                    '*[id="add-to-cart"]:not([disabled])',
                    '*[id="adbtn"]:not([disabled])',
                    '*[class*="product-form--atc-button"]:not([disabled])',
                    '*[class*="product__add-to-cart"]:not([disabled])',
                    '*[id="shopify_add_to_cart"]:not([disabled])',
                    '*[class*="product-form--add-to-cart"]:not([disabled])',
                    '*[class*="ProductForm__AddToCart"]:not([disabled])',
                    '*[class*="add-to-cart"]:not([disabled])',
                    '*[class*="addtocart"]:not([disabled])',
                    '*[class*="AddToCart"]:not([disabled])',
                    '*[class*="addToCart"]:not([disabled])',
                    '*[data-action="add-to-cart"]:not([disabled])',
                    '*[data-add-to-cart-text]:not([disabled])',
                    '*[name="add"]:not([disabled])',
                    '*[data-add-button]:not([disabled])',
                    '*[data-buy-button]:not([disabled])',
                    '*[data-lhi="trans_buynow"]:not([disabled])',
                    '*[class*="add_to_cart_button"]:not([disabled])'
                ];
                var cartFormSelectors = [
                    'input[type="submit"]:not([disabled])',
                    'input[type="button"]:not([disabled])'
                ];
                for (var selector of adcButtonSelectors) {
                    var element = document.querySelector(selector);
                    if (element !== null) {
                        return element;
                    }
                }
                var cartFormElement = document.querySelector('form[action="/cart/add"]');
                for (var selector of cartFormSelectors) {
                    if (cartFormElement !== null) {
                        var element = cartFormElement.querySelector(selector);
                    }
                    if (element !== null) {
                        return element;
                    }
                }
                return null;
            }

            function detectCheckoutButton() {
                var resultElement = null;
                var checkoutButtonSelectors = [
                    '*[name="checkout"]:not([disabled])',
                    '*[name="goto_pp"]:not([disabled])',
                    '*[name="goto_gc"]:not([disabled])',
                    '*[value*="Checkout"]',
                    '*[value*="Check out"]',
                    '*[href*="/checkout"]',
                    '*[onclick*="/checkout"]'
                ];
                var cartFormSelectors = [
                    'input[type="submit"]:not([disabled])',
                    'input[type="button"]:not([disabled])'
                ];
                for (var selector of checkoutButtonSelectors) {
                    var elementSearchResult = document.querySelectorAll(selector);
                    if (elementSearchResult.length > 1) {
                        if (elementSearchResult[1].getAttribute('egw-ignore') === "true") {
                            continue;
                        }
                        if (elementSearchResult[1].hasOwnProperty('href')) {
                            if (elementSearchResult[1].getAttribute('href').indexOf("/front_end/login") > -1) {
                                continue;
                            }
                        }
                        return elementSearchResult[1];
                    } else if (elementSearchResult.length > 0) {
                        if (elementSearchResult[0].getAttribute('egw-ignore') === "true") {
                            continue;
                        }
                        if (elementSearchResult[0].hasOwnProperty('href')) {
                            if (elementSearchResult[0].getAttribute('href').indexOf("/front_end/login") > -1) {
                                continue;
                            }
                        }
                        return elementSearchResult[0];
                    }
                }
                var cartFormElement = document.querySelector('form[action="/cart"]');
                if (cartFormElement !== null) {
                    for (var selector of cartFormSelectors) {
                        var element = cartFormElement.querySelector(selector);
                        if (element !== null) {
                            return element;
                        }
                    }
                }
                return null;
            }

            // Alerts
            function previewAlert() {
                const urlParams = new URLSearchParams(window.location.search);
                const preview = urlParams.get('pixelPreview');
                if (preview) {
                    jQuery("head").prepend('<style>.swal-confirm-btn {font-size:22px !important; }</style>');
                    // document.head.appendChild(document.createElement('script').setAttribute('src', 'https://cdn.jsdelivr.net/npm/sweetalert2@9'));

                    var head = document.getElementsByTagName('head')[0];
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@9';
                    head.appendChild(script);
                    script.addEventListener('load', (e) => {
                        if (window.ttq != undefined) {
                            let id = '{{$settingsData["p_id"]}}'
                            Swal.fire({
                                title: '<strong style="font-family: \'Arial\'; font-size: 26px;">Success</strong>',
                                icon: 'success',
                                customClass: {
                                    confirmButton: 'swal-confirm-btn',
                                },
                                html: '<p style="font-size: 22px">The TikTok Pixel with ID <b><font style="color:green;">' + id + '</font></b> is up and running!<br /> You may close this window now and click \'Next\'.</p>',
                                showCloseButton: false,
                                showCancelButton: false,
                                showConfirmButton: true,
                                confirmButtonText: 'Close',
                                width: 600,
                                focusConfirm: true,
                                allowOutsideClick: false
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    window.close();
                                }
                            });
                        } else {
                            Swal.fire({
                                title: '<strong style="font-family: \'Arial\'; font-size: 26px;">TikTok Pixel Not Detected</strong>',
                                icon: 'error',
                                customClass: {
                                    confirmButton: 'swal-confirm-btn',
                                },
                                html: '<p style="font-size: 22px">A TikTok Pixel was not detected in the code you\'ve pasted. Please copy and paste the exact code from TikTok and try again.</p>',
                                showCloseButton: false,
                                showCancelButton: false,
                                showConfirmButton: true,
                                confirmButtonText: 'Close',
                                width: 600,
                                focusConfirm: true,
                                allowOutsideClick: false
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    window.close();
                                }
                            });
                        }
                    })
                }
            }

            previewAlert();
        }
    }
@endif
