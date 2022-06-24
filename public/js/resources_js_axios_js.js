(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_axios_js"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-utils/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-utils/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./utilities */ "./node_modules/@shopify/app-bridge-utils/utilities/index.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-utils/utilities/authorization-code/authorization-code.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-utils/utilities/authorization-code/authorization-code.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAuthorizationCodePayload = void 0;
var AuthCode = __importStar(__webpack_require__(/*! @shopify/app-bridge/actions/AuthCode */ "./node_modules/@shopify/app-bridge/actions/AuthCode/index.js"));
var Error_1 = __webpack_require__(/*! @shopify/app-bridge/actions/Error */ "./node_modules/@shopify/app-bridge/actions/Error/index.js");
var uuid_1 = __importDefault(__webpack_require__(/*! @shopify/app-bridge/actions/uuid */ "./node_modules/@shopify/app-bridge/actions/uuid.js"));
function getAuthorizationCodePayload(app) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var requestId = uuid_1.default();
                    var unsubscribe = app.subscribe(AuthCode.Action.RESPOND, function (payload) {
                        switch (payload === null || payload === void 0 ? void 0 : payload.status) {
                            case 'needsExchange':
                                resolve(payload);
                                break;
                            default:
                                reject(Error_1.fromAction('Failed to retrieve an authorization code', Error_1.Action.FAILED_AUTHENTICATION));
                        }
                        unsubscribe();
                    }, requestId);
                    app.dispatch(AuthCode.request(requestId));
                })];
        });
    });
}
exports.getAuthorizationCodePayload = getAuthorizationCodePayload;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-utils/utilities/authorization-code/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-utils/utilities/authorization-code/index.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./authorization-code */ "./node_modules/@shopify/app-bridge-utils/utilities/authorization-code/authorization-code.js"), exports);
__exportStar(__webpack_require__(/*! ./user-authorized-fetch */ "./node_modules/@shopify/app-bridge-utils/utilities/authorization-code/user-authorized-fetch.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-utils/utilities/authorization-code/user-authorized-fetch.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-utils/utilities/authorization-code/user-authorized-fetch.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userAuthorizedFetch = void 0;
var authorization_code_1 = __webpack_require__(/*! ./authorization-code */ "./node_modules/@shopify/app-bridge-utils/utilities/authorization-code/authorization-code.js");
var DEFAULT_CALLBACK_URI = 'auth/shopify/callback';
function needsAuthorizationCode(response) {
    var headerValue = response.headers.get('X-Shopify-API-Request-Failure-Unauthorized');
    if (headerValue) {
        return headerValue.toLowerCase() === 'true';
    }
    return false;
}
function userAuthorizedFetch(_a) {
    var _this = this;
    var app = _a.app, _b = _a.callbackUri, callbackUri = _b === void 0 ? DEFAULT_CALLBACK_URI : _b, _c = _a.isAuthorizationCodeRequired, isAuthorizationCodeRequired = _c === void 0 ? needsAuthorizationCode : _c, fetchOperation = _a.fetchOperation;
    return function (uri, options) { return __awaiter(_this, void 0, void 0, function () {
        var response, _a, code, hmac, shop, timestamp, formattedCallbackUri, callbackResponse;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, fetchOperation(uri, options)];
                case 1:
                    response = _b.sent();
                    if (!isAuthorizationCodeRequired(response)) {
                        return [2 /*return*/, response];
                    }
                    return [4 /*yield*/, authorization_code_1.getAuthorizationCodePayload(app)];
                case 2:
                    _a = _b.sent(), code = _a.code, hmac = _a.hmac, shop = _a.shop, timestamp = _a.timestamp;
                    formattedCallbackUri = encodeURI("https://" + window.location.hostname + "/" + callbackUri + "?code=" + code + "&hmac=" + hmac + "&shop=" + shop + "&timestamp=" + timestamp);
                    return [4 /*yield*/, fetchOperation(formattedCallbackUri, {})];
                case 3:
                    callbackResponse = _b.sent();
                    if (!callbackResponse.ok) {
                        throw new Error('Failed to authorize request.');
                    }
                    return [2 /*return*/, fetchOperation(uri, options)];
            }
        });
    }); };
}
exports.userAuthorizedFetch = userAuthorizedFetch;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-utils/utilities/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-utils/utilities/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./modal */ "./node_modules/@shopify/app-bridge-utils/utilities/modal.js"), exports);
__exportStar(__webpack_require__(/*! ./platform */ "./node_modules/@shopify/app-bridge-utils/utilities/platform.js"), exports);
__exportStar(__webpack_require__(/*! ./session-token */ "./node_modules/@shopify/app-bridge-utils/utilities/session-token/index.js"), exports);
__exportStar(__webpack_require__(/*! ./authorization-code */ "./node_modules/@shopify/app-bridge-utils/utilities/authorization-code/index.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-utils/utilities/modal.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-utils/utilities/modal.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createMutationObserver = exports.setupModalAutoSizing = void 0;
var Modal_1 = __webpack_require__(/*! @shopify/app-bridge/actions/Modal */ "./node_modules/@shopify/app-bridge/actions/Modal/index.js");
var MessageTransport_1 = __webpack_require__(/*! @shopify/app-bridge/MessageTransport */ "./node_modules/@shopify/app-bridge/MessageTransport.js");
var platform_1 = __webpack_require__(/*! ./platform */ "./node_modules/@shopify/app-bridge-utils/utilities/platform.js");
var AUTO_SIZE_CLASS = 'app-bridge-utils-modal-auto-size';
var autoSizeStylesheet = createAutoSizeStylesheet();
function createAutoSizeStylesheet() {
    if (typeof document === 'undefined') {
        return null;
    }
    var autoSizeStylesheet = document.createElement('style');
    autoSizeStylesheet.type = 'text/css';
    autoSizeStylesheet.innerHTML = "." + AUTO_SIZE_CLASS + " { overflow: hidden; height: auto; min-height: auto; }";
    return autoSizeStylesheet;
}
function addAutoSizing(app, id) {
    if (!autoSizeStylesheet) {
        return function () { };
    }
    var head = document.getElementsByTagName('head')[0];
    var classList = document.body.classList;
    head.appendChild(autoSizeStylesheet);
    classList.add(AUTO_SIZE_CLASS);
    var mutationObserver = createMutationObserver(app, id);
    return function () {
        classList.remove(AUTO_SIZE_CLASS);
        if (head.contains(autoSizeStylesheet)) {
            head.removeChild(autoSizeStylesheet);
        }
        if (mutationObserver) {
            mutationObserver.disconnect();
        }
    };
}
/**
 * Automatically track changes to the document.body height and dispatch and action to update the modal size
 * @remarks This utility should only be used for an app that is meant to open inside a Modal
 * @param app App Bridge client application instance
 * @returns function to remove the auto-size tracker for the document.body
 *
 * @public
 */
function setupModalAutoSizing(app) {
    return __awaiter(this, void 0, void 0, function () {
        function cleanup() {
            if (removeAutoSizing) {
                removeAutoSizing();
                removeAutoSizing = undefined;
            }
        }
        function handleModalSizeUpdate(appState) {
            var context = appState.context, id = appState.modal.id;
            if (platform_1.isMobile() || context !== MessageTransport_1.Context.Modal) {
                cleanup();
                return cleanup;
            }
            if (!removeAutoSizing) {
                removeAutoSizing = addAutoSizing(app, id);
            }
            return cleanup;
        }
        var removeAutoSizing;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, app.getState().then(handleModalSizeUpdate)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, cleanup];
            }
        });
    });
}
exports.setupModalAutoSizing = setupModalAutoSizing;
/**
 * Sets up modal auto sizing, using a MutationObserver.
 *
 * @param app App Bridge client application instance
 * @param id Currently active modal instance ID
 *
 * @internal
 */
function createMutationObserver(app, id) {
    if (typeof document === 'undefined') {
        return;
    }
    var lastKnownWindowHeight = -1;
    var mutationTimeoutId;
    var mutationObserverConfig = {
        attributes: true,
        attributeOldValue: false,
        characterData: true,
        characterDataOldValue: false,
        childList: true,
        subtree: true,
    };
    var mutationObserver = new MutationObserver(debouncedResizeHandler);
    mutationObserver.observe(document, mutationObserverConfig);
    updateHeight();
    function debouncedResizeHandler() {
        if (mutationTimeoutId) {
            window.clearTimeout(mutationTimeoutId);
        }
        mutationTimeoutId = window.setTimeout(updateHeight, 16);
    }
    function updateHeight() {
        var height = document.body.scrollHeight;
        if (height !== lastKnownWindowHeight) {
            lastKnownWindowHeight = height;
            app.dispatch(Modal_1.updateModalSize({ id: id, height: String(height) }));
        }
    }
    return mutationObserver;
}
exports.createMutationObserver = createMutationObserver;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-utils/utilities/platform.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-utils/utilities/platform.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isShopifyPing = exports.isShopifyPOS = exports.isShopifyMobile = exports.isMobile = exports.isUnframed = void 0;
function isUnframed() {
    return (isShopifyMobile() &&
        typeof navigator !== 'undefined' &&
        navigator.userAgent.indexOf('Unframed') >= 0);
}
exports.isUnframed = isUnframed;
function isMobile() {
    return isShopifyMobile() || isShopifyPOS() || isShopifyPing();
}
exports.isMobile = isMobile;
function isShopifyMobile() {
    return typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Shopify Mobile') >= 0;
}
exports.isShopifyMobile = isShopifyMobile;
function isShopifyPOS() {
    return typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Shopify POS') >= 0;
}
exports.isShopifyPOS = isShopifyPOS;
function isShopifyPing() {
    return typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Shopify Ping') >= 0;
}
exports.isShopifyPing = isShopifyPing;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-utils/utilities/session-token/authenticated-fetch.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-utils/utilities/session-token/authenticated-fetch.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.authenticatedFetch = void 0;
var session_token_1 = __webpack_require__(/*! ./session-token */ "./node_modules/@shopify/app-bridge-utils/utilities/session-token/session-token.js");
function authenticatedFetch(app, fetchOperation) {
    var _this = this;
    if (fetchOperation === void 0) { fetchOperation = fetch; }
    return function (uri, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var sessionToken, headers, finalHeaders;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, session_token_1.getSessionToken(app)];
                    case 1:
                        sessionToken = _a.sent();
                        headers = new Headers(options.headers);
                        headers.append('Authorization', "Bearer " + sessionToken);
                        headers.append('X-Requested-With', 'XMLHttpRequest');
                        finalHeaders = {};
                        headers.forEach(function (value, key) {
                            finalHeaders[key] = value;
                        });
                        return [2 /*return*/, fetchOperation(uri, __assign(__assign({}, options), { headers: finalHeaders }))];
                }
            });
        });
    };
}
exports.authenticatedFetch = authenticatedFetch;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-utils/utilities/session-token/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-utils/utilities/session-token/index.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./session-token */ "./node_modules/@shopify/app-bridge-utils/utilities/session-token/session-token.js"), exports);
__exportStar(__webpack_require__(/*! ./authenticated-fetch */ "./node_modules/@shopify/app-bridge-utils/utilities/session-token/authenticated-fetch.js"), exports);


/***/ }),

/***/ "./node_modules/@shopify/app-bridge-utils/utilities/session-token/session-token.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge-utils/utilities/session-token/session-token.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSessionToken = void 0;
var SessionToken = __importStar(__webpack_require__(/*! @shopify/app-bridge/actions/SessionToken */ "./node_modules/@shopify/app-bridge/actions/SessionToken/index.js"));
var Error_1 = __webpack_require__(/*! @shopify/app-bridge/actions/Error */ "./node_modules/@shopify/app-bridge/actions/Error/index.js");
function getSessionToken(appBridge) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var unsubscribe = appBridge.subscribe(SessionToken.Action.RESPOND, function (_a) {
                        var sessionToken = _a.sessionToken;
                        if (sessionToken) {
                            resolve(sessionToken);
                        }
                        else {
                            reject(Error_1.fromAction('Failed to retrieve a session token', Error_1.Action.FAILED_AUTHENTICATION));
                        }
                        unsubscribe();
                    });
                    appBridge.dispatch(SessionToken.request());
                })];
        });
    });
}
exports.getSessionToken = getSessionToken;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/MessageTransport.js":
/*!**************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/MessageTransport.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createTransportListener = exports.fromWindow = exports.fromFrame = exports.Context = void 0;
var Error_1 = __webpack_require__(/*! ./actions/Error */ "./node_modules/@shopify/app-bridge/actions/Error/index.js");
var validator_1 = __webpack_require__(/*! ./actions/validator */ "./node_modules/@shopify/app-bridge/actions/validator.js");
var types_1 = __webpack_require__(/*! ./client/types */ "./node_modules/@shopify/app-bridge/client/types.js");
var collection_1 = __webpack_require__(/*! ./util/collection */ "./node_modules/@shopify/app-bridge/util/collection.js");
var env_1 = __webpack_require__(/*! ./util/env */ "./node_modules/@shopify/app-bridge/util/env.js");
var unframed_1 = __webpack_require__(/*! ./util/unframed */ "./node_modules/@shopify/app-bridge/util/unframed.js");
var Context;
(function (Context) {
    Context["Modal"] = "Modal";
    Context["Main"] = "Main";
})(Context = exports.Context || (exports.Context = {}));
/**
 * Create a MessageTransport from a Frame.
 * @remarks
 * Used on the host-side to create a postMessage MessageTransport.
 * @beta
 */
function fromFrame(frame, localOrigin, context) {
    var handlers = [];
    var host = frame.host, window = frame.window;
    if (!host) {
        throw Error_1.fromAction('App frame is undefined', Error_1.AppActionType.WINDOW_UNDEFINED);
    }
    host.addEventListener('message', function (event) {
        if (!validator_1.isAppMessage(event)) {
            return;
        }
        if (event.origin !== localOrigin) {
            var errorMessage = "Message origin '" + event.origin + "' does not match app origin '" + localOrigin + "'.";
            var payload = Error_1.invalidOriginAction(errorMessage);
            var message = {
                type: 'dispatch',
                payload: payload,
            };
            window === null || window === void 0 ? void 0 : window.postMessage(message, event.origin);
            return;
        }
        for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
            var handler = handlers_1[_i];
            handler(event);
        }
    });
    return {
        context: context,
        localOrigin: localOrigin,
        frameWindow: window,
        hostFrame: host,
        dispatch: function (message) {
            window === null || window === void 0 ? void 0 : window.postMessage(message, localOrigin);
        },
        subscribe: function (handler) {
            return collection_1.addAndRemoveFromCollection(handlers, handler);
        },
    };
}
exports.fromFrame = fromFrame;
/**
 * Create a MessageTransport from a parent window.
 * @remarks
 * Used on the client-side to create a postMessage MessageTransport.
 * @internalremarks
 * In unframed mode, message should be dispatched via MobileWebView.postMessage instead of postMessage.
 * @beta
 */
function fromWindow(contentWindow, localOrigin) {
    var handlers = [];
    if (typeof window !== undefined) {
        window.addEventListener('message', function (event) {
            if ((window === contentWindow && !env_1.isUnframed) ||
                event.source !== contentWindow ||
                !(validator_1.isAppBridgeAction(event.data.payload) || validator_1.isAppMessage(event))) {
                return;
            }
            for (var _i = 0, handlers_2 = handlers; _i < handlers_2.length; _i++) {
                var handler = handlers_2[_i];
                handler(event);
            }
        });
    }
    return {
        localOrigin: localOrigin,
        hostFrame: contentWindow,
        dispatch: function (message) {
            var _a;
            if (!((_a = message.source) === null || _a === void 0 ? void 0 : _a.host)) {
                return;
            }
            if (env_1.isUnframed && window && window.MobileWebView) {
                var payloadWithContext = unframed_1.parsePayloadWithContext({
                    id: 'unframed://fromClient',
                    origin: localOrigin,
                    data: message,
                });
                window.MobileWebView.postMessage(payloadWithContext);
                return;
            }
            var messageOrigin = new URL("https://" + message.source.host).origin;
            contentWindow.postMessage(message, messageOrigin);
        },
        subscribe: function (handler) {
            return collection_1.addAndRemoveFromCollection(handlers, handler);
        },
    };
}
exports.fromWindow = fromWindow;
function createTransportListener() {
    var listeners = [];
    var actionListeners = {};
    function createSubscribeHandler(dispatcher) {
        function subscribe() {
            if (arguments.length < 2) {
                // eslint-disable-next-line prefer-rest-params
                return collection_1.addAndRemoveFromCollection(listeners, { callback: arguments[0] });
            }
            // eslint-disable-next-line prefer-rest-params
            var _a = Array.from(arguments), type = _a[0], callback = _a[1], id = _a[2];
            var actionCallback = { callback: callback, id: id };
            var payload = { type: type, id: id };
            if (!Object.prototype.hasOwnProperty.call(actionListeners, type)) {
                actionListeners[type] = [];
            }
            if (dispatcher) {
                dispatcher(types_1.MessageType.Subscribe, payload);
            }
            return collection_1.addAndRemoveFromCollection(actionListeners[type], actionCallback, function () {
                if (dispatcher) {
                    dispatcher(types_1.MessageType.Unsubscribe, payload);
                }
            });
        }
        return subscribe;
    }
    return {
        createSubscribeHandler: createSubscribeHandler,
        handleMessage: function (message) {
            listeners.forEach(function (listener) { return listener.callback(message); });
        },
        handleActionDispatch: function (_a) {
            var type = _a.type, payload = _a.payload;
            var hasCallback = false;
            if (Object.prototype.hasOwnProperty.call(actionListeners, type)) {
                for (var _i = 0, _b = actionListeners[type]; _i < _b.length; _i++) {
                    var listener = _b[_i];
                    var id = listener.id, callback = listener.callback;
                    var matchId = payload && payload.id === id;
                    if (matchId || !id) {
                        callback(payload);
                        hasCallback = true;
                    }
                }
            }
            return hasCallback;
        },
    };
}
exports.createTransportListener = createTransportListener;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/AuthCode/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/AuthCode/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.respond = exports.request = exports.Action = void 0;
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var Action;
(function (Action) {
    Action["REQUEST"] = "APP::AUTH_CODE::REQUEST";
    Action["RESPOND"] = "APP::AUTH_CODE::RESPOND";
})(Action = exports.Action || (exports.Action = {}));
function request(id) {
    return helper_1.actionWrapper({
        group: types_1.Group.AuthCode,
        type: Action.REQUEST,
        payload: { id: id },
    });
}
exports.request = request;
function respond(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.AuthCode,
        type: Action.RESPOND,
    });
}
exports.respond = respond;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Button/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Button/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.create = exports.Button = exports.isValidButtonProps = exports.update = exports.clickButton = exports.Style = exports.Icon = exports.Action = void 0;
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var Action;
(function (Action) {
    Action["CLICK"] = "CLICK";
    Action["UPDATE"] = "UPDATE";
})(Action = exports.Action || (exports.Action = {}));
var Icon;
(function (Icon) {
    Icon["Print"] = "print";
})(Icon = exports.Icon || (exports.Icon = {}));
var Style;
(function (Style) {
    Style["Danger"] = "danger";
})(Style = exports.Style || (exports.Style = {}));
function clickButton(group, component, payload) {
    var id = component.id;
    var action = helper_1.getEventNameSpace(group, Action.CLICK, component);
    var buttonPayload = {
        id: id,
        payload: payload,
    };
    return helper_1.actionWrapper({ type: action, group: group, payload: buttonPayload });
}
exports.clickButton = clickButton;
function update(group, component, props) {
    var id = component.id;
    var label = props.label;
    var action = helper_1.getEventNameSpace(group, Action.UPDATE, component);
    var buttonPayload = __assign(__assign({}, props), { id: id,
        label: label });
    return helper_1.actionWrapper({ type: action, group: group, payload: buttonPayload });
}
exports.update = update;
function isValidButtonProps(button) {
    return typeof button.id === 'string' && typeof button.label === 'string';
}
exports.isValidButtonProps = isValidButtonProps;
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(app, options) {
        var _this = _super.call(this, app, types_1.ComponentType.Button, types_1.Group.Button) || this;
        _this.disabled = false;
        _this.loading = false;
        _this.plain = false;
        _this.set(options, false);
        return _this;
    }
    Object.defineProperty(Button.prototype, "options", {
        get: function () {
            return {
                disabled: this.disabled,
                icon: this.icon,
                label: this.label,
                style: this.style,
                loading: this.loading,
                plain: this.plain,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { id: this.id });
        },
        enumerable: false,
        configurable: true
    });
    Button.prototype.set = function (options, shouldUpdate) {
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var label = mergedOptions.label, disabled = mergedOptions.disabled, icon = mergedOptions.icon, style = mergedOptions.style, loading = mergedOptions.loading, plain = mergedOptions.plain;
        this.label = label;
        this.disabled = Boolean(disabled);
        this.icon = icon;
        this.style = style;
        this.loading = Boolean(loading);
        this.plain = Boolean(plain);
        if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
        }
        return this;
    };
    Button.prototype.dispatch = function (action, payload) {
        switch (action) {
            case Action.CLICK:
                this.app.dispatch(clickButton(this.group, this.component, payload));
                break;
            case Action.UPDATE: {
                var updateAction = update(this.group, this.component, this.payload);
                this.app.dispatch(updateAction);
                break;
            }
        }
        return this;
    };
    return Button;
}(helper_1.ActionSet));
exports.Button = Button;
function create(app, options) {
    return new Button(app, options);
}
exports.create = create;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Error/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Error/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.throwError = exports.fromAction = exports.AppBridgeError = exports.invalidOriginAction = exports.isErrorEventName = exports.permissionAction = exports.networkAction = exports.persistenceAction = exports.unsupportedOperationAction = exports.unexpectedAction = exports.invalidAction = exports.invalidActionType = exports.invalidPayload = exports.Message = exports.AppActionType = exports.Action = void 0;
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
// Errors triggered in response to an action
var Action;
(function (Action) {
    Action["INVALID_ACTION"] = "APP::ERROR::INVALID_ACTION";
    Action["INVALID_ACTION_TYPE"] = "APP::ERROR::INVALID_ACTION_TYPE";
    Action["INVALID_PAYLOAD"] = "APP::ERROR::INVALID_PAYLOAD";
    Action["INVALID_OPTIONS"] = "APP::ERROR::INVALID_OPTIONS";
    Action["UNEXPECTED_ACTION"] = "APP::ERROR::UNEXPECTED_ACTION";
    Action["PERSISTENCE"] = "APP::ERROR::PERSISTENCE";
    Action["UNSUPPORTED_OPERATION"] = "APP::ERROR::UNSUPPORTED_OPERATION";
    Action["NETWORK"] = "APP::ERROR::NETWORK";
    Action["PERMISSION"] = "APP::ERROR::PERMISSION";
    Action["FAILED_AUTHENTICATION"] = "APP::ERROR::FAILED_AUTHENTICATION";
    Action["INVALID_ORIGIN"] = "APP::ERROR::INVALID_ORIGIN";
})(Action = exports.Action || (exports.Action = {}));
// Errors thrown in response to app setup
var AppActionType;
(function (AppActionType) {
    AppActionType["INVALID_CONFIG"] = "APP::ERROR::INVALID_CONFIG";
    AppActionType["MISSING_CONFIG"] = "APP::APP_ERROR::MISSING_CONFIG";
    AppActionType["MISSING_APP_BRIDGE_MIDDLEWARE"] = "APP::APP_ERROR::MISSING_APP_BRIDGE_MIDDLEWARE";
    AppActionType["WINDOW_UNDEFINED"] = "APP::APP_ERROR::WINDOW_UNDEFINED";
    AppActionType["REDUX_REINSTANTIATED"] = "APP::APP_ERROR::REDUX_REINSTANTIATED";
    AppActionType["MISSING_LOCAL_ORIGIN"] = "APP::APP_ERROR::MISSING_LOCAL_ORIGIN";
    AppActionType["MISSING_HOST_PROVIDER"] = "APP::APP_ERROR::MISSING_HOST_PROVIDER";
    AppActionType["MISSING_ROUTER_CONTEXT"] = "APP::APP_ERROR::MISSING_ROUTER_CONTEXT";
    AppActionType["MISSING_HISTORY_BLOCK"] = "APP::APP_ERROR::MISSING_HISTORY_BLOCK";
})(AppActionType = exports.AppActionType || (exports.AppActionType = {}));
function errorActionWrapperWithId(type, action, message) {
    var castPayload = action.payload;
    return helper_1.actionWrapper({
        type: type,
        group: types_1.Group.Error,
        payload: {
            action: action,
            message: message,
            type: type,
            id: castPayload && castPayload.id ? castPayload.id : undefined,
        },
    });
}
var Message;
(function (Message) {
    Message["MISSING_PAYLOAD"] = "Missing payload";
    Message["INVALID_PAYLOAD_ID"] = "Id in payload is missing or invalid";
})(Message = exports.Message || (exports.Message = {}));
function invalidPayload(action, message) {
    return errorActionWrapperWithId(Action.INVALID_PAYLOAD, action, message || "The action's payload is missing required properties or has invalid properties");
}
exports.invalidPayload = invalidPayload;
function invalidActionType(action, message) {
    return helper_1.actionWrapper({
        group: types_1.Group.Error,
        payload: {
            action: action,
            message: message || 'The action type is invalid or unsupported',
            type: Action.INVALID_ACTION_TYPE,
        },
        type: Action.INVALID_ACTION_TYPE,
    });
}
exports.invalidActionType = invalidActionType;
function invalidAction(action, message) {
    return helper_1.actionWrapper({
        group: types_1.Group.Error,
        payload: {
            action: action,
            message: message || "The action's has missing/invalid values for `group`, `type` or `version`",
            type: Action.INVALID_ACTION,
        },
        type: Action.INVALID_ACTION,
    });
}
exports.invalidAction = invalidAction;
function unexpectedAction(action, message) {
    return helper_1.actionWrapper({
        group: types_1.Group.Error,
        payload: {
            action: action,
            message: message || 'Action cannot be called at this time',
            type: Action.UNEXPECTED_ACTION,
        },
        type: Action.UNEXPECTED_ACTION,
    });
}
exports.unexpectedAction = unexpectedAction;
function unsupportedOperationAction(action, message) {
    return errorActionWrapperWithId(Action.UNSUPPORTED_OPERATION, action, message || 'The action type is unsupported');
}
exports.unsupportedOperationAction = unsupportedOperationAction;
function persistenceAction(action, message) {
    return errorActionWrapperWithId(Action.PERSISTENCE, action, message || 'Action cannot be persisted on server');
}
exports.persistenceAction = persistenceAction;
function networkAction(action, message) {
    return errorActionWrapperWithId(Action.NETWORK, action, message || 'Network error');
}
exports.networkAction = networkAction;
function permissionAction(action, message) {
    return errorActionWrapperWithId(Action.PERMISSION, action, message || 'Action is not permitted');
}
exports.permissionAction = permissionAction;
function isErrorEventName(eventName) {
    var match = helper_1.findMatchInEnum(Action, eventName);
    return typeof match === 'string';
}
exports.isErrorEventName = isErrorEventName;
function invalidOriginAction(message) {
    return helper_1.actionWrapper({
        group: types_1.Group.Error,
        payload: {
            message: message,
            type: Action.INVALID_ORIGIN,
        },
        type: Action.INVALID_ORIGIN,
    });
}
exports.invalidOriginAction = invalidOriginAction;
var AppBridgeError = /** @class */ (function () {
    function AppBridgeError(message) {
        this.name = 'AppBridgeError';
        this.message = message;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        }
        else {
            this.stack = new Error(this.message).stack;
        }
    }
    return AppBridgeError;
}());
exports.AppBridgeError = AppBridgeError;
AppBridgeError.prototype = Object.create(Error.prototype);
function fromAction(message, type, action) {
    var errorMessage = message ? type + ": " + message : type;
    var error = new AppBridgeError(errorMessage);
    error.action = action;
    error.type = type;
    return error;
}
exports.fromAction = fromAction;
function throwError() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var type = args[0];
    var message;
    var action;
    if (typeof args[1] === 'string') {
        message = args[1];
    }
    else {
        action = args[1];
        message = args[2] || '';
    }
    throw fromAction(message, type, action);
}
exports.throwError = throwError;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/Modal/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/Modal/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.create = exports.ModalIframe = exports.ModalMessage = exports.Modal = exports.isMessageModal = exports.isIframeModal = exports.data = exports.update = exports.clickFooterButton = exports.updateModalSize = exports.closeModal = exports.openModal = exports.Size = exports.Action = void 0;
var buttonHelper_1 = __webpack_require__(/*! ../buttonHelper */ "./node_modules/@shopify/app-bridge/actions/buttonHelper.js");
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var Button_1 = __webpack_require__(/*! ../Button */ "./node_modules/@shopify/app-bridge/actions/Button/index.js");
var Action;
(function (Action) {
    Action["OPEN"] = "APP::MODAL::OPEN";
    Action["CLOSE"] = "APP::MODAL::CLOSE";
    Action["UPDATE"] = "APP::MODAL::UPDATE";
    Action["UPDATE_CONTENT"] = "APP::MODAL::CONTENT::UPDATE";
    Action["FOOTER_BUTTON_CLICK"] = "APP::MODAL::FOOTER::BUTTON::CLICK";
    Action["FOOTER_BUTTON_UPDATE"] = "APP::MODAL::FOOTER::BUTTON::UPDATE";
    Action["UPDATE_SIZE"] = "APP::MODAL::UPDATE_SIZE";
    Action["DATA"] = "APP::MODAL::DATA";
})(Action = exports.Action || (exports.Action = {}));
/**
 * Options available to the Modal `size` param
 * @public
 */
var Size;
(function (Size) {
    /** Small modal size */
    Size["Small"] = "small";
    /** Medium modal size */
    Size["Medium"] = "medium";
    /** Large modal size (wider than medium) */
    Size["Large"] = "large";
    /** @deprecated as of 1.6.5 */
    Size["Full"] = "full";
    /**
     * @deprecated as of 1.12.x
     * @remarks
     * This option has been removed in favour of the `setUpModalAutoSizing` utility.
     * See `app-bridge-utils` package for more information
     */
    Size["Auto"] = "auto";
})(Size = exports.Size || (exports.Size = {}));
var FOOTER_BUTTON_PROPS = {
    group: types_1.Group.Modal,
    subgroups: ['Footer'],
    type: types_1.ComponentType.Button,
};
function openModal(modalPayload) {
    return helper_1.actionWrapper({
        group: types_1.Group.Modal,
        payload: modalPayload,
        type: Action.OPEN,
    });
}
exports.openModal = openModal;
function closeModal(modalClosePayload) {
    return helper_1.actionWrapper({
        group: types_1.Group.Modal,
        payload: modalClosePayload,
        type: Action.CLOSE,
    });
}
exports.closeModal = closeModal;
/**
 * Action creator for modal update size action
 * @internal
 */
function updateModalSize(updateSizePayload) {
    return helper_1.actionWrapper({
        group: types_1.Group.Modal,
        payload: updateSizePayload,
        type: Action.UPDATE_SIZE,
    });
}
exports.updateModalSize = updateModalSize;
function clickFooterButton(id, payload) {
    var component = __assign({ id: id }, FOOTER_BUTTON_PROPS);
    return Button_1.clickButton(types_1.Group.Modal, component, payload);
}
exports.clickFooterButton = clickFooterButton;
function update(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Modal,
        type: Action.UPDATE,
    });
}
exports.update = update;
function data(payload) {
    return helper_1.actionWrapper({
        payload: payload,
        group: types_1.Group.Modal,
        type: Action.DATA,
    });
}
exports.data = data;
function isIframeModal(options) {
    return (typeof options.url === 'string' ||
        typeof options.path === 'string');
}
exports.isIframeModal = isIframeModal;
function isMessageModal(options) {
    return typeof options.message === 'string';
}
exports.isMessageModal = isMessageModal;
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = Size.Small;
        return _this;
    }
    Object.defineProperty(Modal.prototype, "footer", {
        get: function () {
            if (!this.footerPrimary && !this.footerSecondary) {
                return undefined;
            }
            return {
                buttons: {
                    primary: this.footerPrimary,
                    secondary: this.footerSecondary,
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Modal.prototype, "footerOptions", {
        get: function () {
            if (!this.footerPrimaryOptions && !this.footerSecondaryOptions) {
                return undefined;
            }
            return {
                buttons: {
                    primary: this.footerPrimaryOptions,
                    secondary: this.footerSecondaryOptions,
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    Modal.prototype.close = function () {
        this.app.dispatch(closeModal({ id: this.id }));
    };
    Modal.prototype.setFooterPrimaryButton = function (newOptions, updateCb) {
        var _this = this;
        var subgroups = FOOTER_BUTTON_PROPS.subgroups;
        this.footerPrimaryOptions = this.getChildButton(newOptions, this.footerPrimaryOptions);
        this.footerPrimary = this.footerPrimaryOptions
            ? buttonHelper_1.getSingleButton(this, this.footerPrimaryOptions, subgroups, function (newPayload) {
                _this.updatePrimaryFooterButton(newPayload, updateCb);
            })
            : undefined;
    };
    Modal.prototype.setFooterSecondaryButtons = function (newOptions, updateCb) {
        var _this = this;
        var subgroups = FOOTER_BUTTON_PROPS.subgroups;
        var newButtons = newOptions || [];
        var currentOptions = (this.footerOptions && this.footerOptions.buttons.secondary) || [];
        this.footerSecondaryOptions = this.getUpdatedChildActions(newButtons, currentOptions);
        this.footerSecondary = this.footerSecondaryOptions
            ? this.footerSecondaryOptions.map(function (action) {
                return buttonHelper_1.getSingleButton(_this, action, subgroups, function (newPayload) {
                    _this.updateSecondaryFooterButton(newPayload, updateCb);
                });
            })
            : undefined;
    };
    Modal.prototype.getChildButton = function (newAction, currentAction) {
        var newButtons = newAction ? [newAction] : [];
        var currentButtons = currentAction ? [currentAction] : [];
        var updatedButton = this.getUpdatedChildActions(newButtons, currentButtons);
        return updatedButton ? updatedButton[0] : undefined;
    };
    Modal.prototype.updatePrimaryFooterButton = function (newPayload, updateCb) {
        if (!this.footer || !this.footer.buttons.primary) {
            return;
        }
        if (helper_1.updateActionFromPayload(this.footer.buttons.primary, newPayload)) {
            updateCb();
        }
    };
    Modal.prototype.updateSecondaryFooterButton = function (newPayload, updateCb) {
        if (!this.footer || !this.footer.buttons || !this.footer.buttons.secondary) {
            return;
        }
        var updated;
        for (var _i = 0, _a = this.footer.buttons.secondary; _i < _a.length; _i++) {
            var action = _a[_i];
            updated = helper_1.updateActionFromPayload(action, newPayload);
            if (updated) {
                break;
            }
        }
        if (updated) {
            updateCb();
        }
    };
    return Modal;
}(helper_1.ActionSetWithChildren));
exports.Modal = Modal;
var ModalMessage = /** @class */ (function (_super) {
    __extends(ModalMessage, _super);
    function ModalMessage(app, options) {
        var _this = _super.call(this, app, types_1.Group.Modal, types_1.Group.Modal) || this;
        _this.set(options, false);
        return _this;
    }
    Object.defineProperty(ModalMessage.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { footer: this.footer, id: this.id });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModalMessage.prototype, "options", {
        get: function () {
            return {
                footer: this.footerOptions,
                message: this.message,
                size: this.size,
                title: this.title,
            };
        },
        enumerable: false,
        configurable: true
    });
    ModalMessage.prototype.set = function (options, shouldUpdate) {
        var _this = this;
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var title = mergedOptions.title, footer = mergedOptions.footer, message = mergedOptions.message, size = mergedOptions.size;
        this.title = title;
        this.message = message;
        this.size = size;
        this.setFooterPrimaryButton(footer ? footer.buttons.primary : undefined, function () {
            _this.dispatch(Action.UPDATE);
        });
        this.setFooterSecondaryButtons(footer ? footer.buttons.secondary : undefined, function () {
            _this.dispatch(Action.UPDATE);
        });
        if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
        }
        return this;
    };
    ModalMessage.prototype.dispatch = function (action) {
        switch (action) {
            case Action.OPEN:
                this.app.dispatch(openModal(this.payload));
                break;
            case Action.CLOSE:
                this.close();
                break;
            case Action.UPDATE:
                this.app.dispatch(update(this.payload));
                break;
        }
        return this;
    };
    return ModalMessage;
}(Modal));
exports.ModalMessage = ModalMessage;
var ModalIframe = /** @class */ (function (_super) {
    __extends(ModalIframe, _super);
    function ModalIframe(app, options) {
        var _this = _super.call(this, app, types_1.Group.Modal, types_1.Group.Modal) || this;
        _this.set(options, false);
        return _this;
    }
    Object.defineProperty(ModalIframe.prototype, "payload", {
        get: function () {
            return __assign(__assign({}, this.options), { footer: this.footer, id: this.id });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ModalIframe.prototype, "options", {
        get: function () {
            return {
                footer: this.footerOptions,
                path: this.path,
                size: this.size,
                title: this.title,
                url: this.url,
                loading: this.loading,
            };
        },
        enumerable: false,
        configurable: true
    });
    ModalIframe.prototype.set = function (options, shouldUpdate) {
        var _this = this;
        if (shouldUpdate === void 0) { shouldUpdate = true; }
        var mergedOptions = helper_1.getMergedProps(this.options, options);
        var title = mergedOptions.title, footer = mergedOptions.footer, path = mergedOptions.path, url = mergedOptions.url, size = mergedOptions.size, loading = mergedOptions.loading;
        this.title = title;
        this.url = url;
        this.path = path;
        this.size = size;
        this.loading = loading;
        this.setFooterPrimaryButton(footer ? footer.buttons.primary : undefined, function () {
            _this.dispatch(Action.UPDATE);
        });
        this.setFooterSecondaryButtons(footer ? footer.buttons.secondary : undefined, function () {
            _this.dispatch(Action.UPDATE);
        });
        if (shouldUpdate) {
            this.dispatch(Action.UPDATE);
        }
        return this;
    };
    ModalIframe.prototype.dispatch = function (action, payload) {
        switch (action) {
            case Action.OPEN:
                this.app.dispatch(openModal(this.payload));
                break;
            case Action.CLOSE:
                this.close();
                break;
            case Action.UPDATE:
                this.app.dispatch(update(this.payload));
                break;
            case Action.DATA:
                this.app.dispatch(data(payload || {}));
                break;
        }
        return this;
    };
    return ModalIframe;
}(Modal));
exports.ModalIframe = ModalIframe;
exports.create = function (app, options) {
    if (isIframeModal(options)) {
        return new ModalIframe(app, options);
    }
    return new ModalMessage(app, options);
};


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/SessionToken/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/SessionToken/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.respond = exports.request = exports.Action = void 0;
var helper_1 = __webpack_require__(/*! ../helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
var types_1 = __webpack_require__(/*! ../types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var Action;
(function (Action) {
    Action["REQUEST"] = "APP::SESSION_TOKEN::REQUEST";
    Action["RESPOND"] = "APP::SESSION_TOKEN::RESPOND";
})(Action = exports.Action || (exports.Action = {}));
function request() {
    return helper_1.actionWrapper({
        group: types_1.Group.SessionToken,
        type: Action.REQUEST,
    });
}
exports.request = request;
function respond(sessionToken) {
    return helper_1.actionWrapper({
        payload: sessionToken,
        group: types_1.Group.SessionToken,
        type: Action.RESPOND,
    });
}
exports.respond = respond;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/buttonHelper.js":
/*!******************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/buttonHelper.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSingleButton = void 0;
var Button_1 = __webpack_require__(/*! ./Button */ "./node_modules/@shopify/app-bridge/actions/Button/index.js");
function getSingleButton(action, button, subgroups, updateCb) {
    action.addChild(button, action.group, subgroups);
    action.subscribeToChild(button, Button_1.Action.UPDATE, updateCb);
    return button.payload;
}
exports.getSingleButton = getSingleButton;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/constants.js":
/*!***************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/constants.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SEPARATOR = exports.PREFIX = void 0;
exports.PREFIX = 'APP';
exports.SEPARATOR = '::';


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/helper.js":
/*!************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/helper.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NonSnakeCaseGroup = exports.findMatchInEnum = exports.forEachInEnum = exports.getMergedProps = exports.updateActionFromPayload = exports.ActionSetWithChildren = exports.ActionSet = exports.isValidOptionalString = exports.isValidOptionalNumber = exports.getEventNameSpace = exports.getVersion = exports.actionWrapper = void 0;
var types_1 = __webpack_require__(/*! ../client/types */ "./node_modules/@shopify/app-bridge/client/types.js");
var collection_1 = __webpack_require__(/*! ../util/collection */ "./node_modules/@shopify/app-bridge/util/collection.js");
var Error_1 = __webpack_require__(/*! ./Error */ "./node_modules/@shopify/app-bridge/actions/Error/index.js");
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/@shopify/app-bridge/actions/constants.js");
var merge_1 = __importDefault(__webpack_require__(/*! ./merge */ "./node_modules/@shopify/app-bridge/actions/merge.js"));
var types_2 = __webpack_require__(/*! ./types */ "./node_modules/@shopify/app-bridge/actions/types.js");
var uuid_1 = __importDefault(__webpack_require__(/*! ./uuid */ "./node_modules/@shopify/app-bridge/actions/uuid.js"));
// eslint-disable-next-line @typescript-eslint/no-var-requires
var packageJson = __webpack_require__(/*! ../package.json */ "./node_modules/@shopify/app-bridge/package.json");
function actionWrapper(action) {
    return __assign(__assign({}, action), { version: getVersion(), clientInterface: {
            name: packageJson.name,
            version: getVersion(),
        } });
}
exports.actionWrapper = actionWrapper;
function getVersion() {
    return packageJson.version;
}
exports.getVersion = getVersion;
/**
 * Returns full event name with prefix, group, subgroups and type formatted with separators
 * @internal
 * */
function getEventNameSpace(group, eventName, component) {
    if (eventName.startsWith("" + constants_1.PREFIX + constants_1.SEPARATOR)) {
        return eventName;
    }
    var eventNameSpace = groupToEventNameSpace(group);
    if (component) {
        var subgroups_1 = component.subgroups, type = component.type;
        if (subgroups_1 && subgroups_1.length > 0) {
            eventNameSpace += eventNameSpace.length > 0 ? constants_1.SEPARATOR : '';
            subgroups_1.forEach(function (subgroup, index) {
                eventNameSpace += "" + subgroup.toUpperCase() + (index < subgroups_1.length - 1 ? constants_1.SEPARATOR : '');
            });
        }
        if (type !== group && type) {
            eventNameSpace += "" + (eventNameSpace.length > 0 ? constants_1.SEPARATOR : '') + type.toUpperCase();
        }
    }
    if (eventNameSpace) {
        eventNameSpace += "" + (eventNameSpace.length > 0 ? constants_1.SEPARATOR : '') + eventName.toUpperCase();
    }
    return "" + constants_1.PREFIX + constants_1.SEPARATOR + eventNameSpace;
}
exports.getEventNameSpace = getEventNameSpace;
function isValidOptionalNumber(value) {
    return value === null || value === undefined || typeof value === 'number';
}
exports.isValidOptionalNumber = isValidOptionalNumber;
function isValidOptionalString(value) {
    return value === null || value === undefined || typeof value === 'string';
}
exports.isValidOptionalString = isValidOptionalString;
var ActionSet = /** @class */ (function () {
    function ActionSet(app, type, group, id) {
        var _this = this;
        this.app = app;
        this.type = type;
        this.group = group;
        this.subgroups = [];
        this.subscriptions = [];
        if (!app) {
            Error_1.throwError(Error_1.Action.INVALID_ACTION, 'Missing required `app`');
        }
        this.id = id || uuid_1.default();
        this.defaultGroup = group;
        var defaultSet = this.set;
        this.set = function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!_this.app.hooks) {
                return defaultSet.apply(_this, args);
            }
            return (_a = _this.app.hooks).run.apply(_a, __spreadArrays([types_1.LifecycleHook.UpdateAction, defaultSet, _this], args));
        };
    }
    ActionSet.prototype.set = function () {
        var _ = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _[_i] = arguments[_i];
        }
    };
    Object.defineProperty(ActionSet.prototype, "component", {
        get: function () {
            return {
                id: this.id,
                subgroups: this.subgroups,
                type: this.type,
            };
        },
        enumerable: false,
        configurable: true
    });
    ActionSet.prototype.updateSubscription = function (subscriptionToRemove, group, subgroups) {
        var eventType = subscriptionToRemove.eventType, callback = subscriptionToRemove.callback, component = subscriptionToRemove.component;
        var currentIndex;
        currentIndex = this.subscriptions.findIndex(function (subscription) { return subscription === subscriptionToRemove; });
        if (currentIndex >= 0) {
            this.subscriptions[currentIndex].unsubscribe();
        }
        else {
            currentIndex = undefined;
        }
        this.group = group;
        this.subgroups = subgroups;
        Object.assign(component, { subgroups: this.subgroups });
        return this.subscribe(eventType, callback, component, currentIndex);
    };
    ActionSet.prototype.error = function (callback) {
        var _this = this;
        var subscriptionIndices = [];
        forEachInEnum(Error_1.Action, function (eventNameSpace) {
            // Keep track of subscription index so we can call unsubscribe later
            // This ensure it will continue to work even when the subscription has been updated
            subscriptionIndices.push(_this.subscriptions.length);
            _this.subscribe(eventNameSpace, callback);
        });
        return function () {
            var subscriptionsToRemove = subscriptionIndices.map(function (index) { return _this.subscriptions[index]; });
            subscriptionsToRemove.forEach(function (toRemove) {
                collection_1.removeFromCollection(_this.subscriptions, toRemove, function (removed) {
                    removed.unsubscribe();
                });
            });
        };
    };
    ActionSet.prototype.subscribe = function (eventName, callback, component, currentIndex) {
        var _this = this;
        var eventComponent = component || this.component;
        var eventType = eventName.toUpperCase();
        var boundedCallback = typeof currentIndex === 'number' ? callback : callback.bind(this);
        var eventNameSpace;
        if (Error_1.isErrorEventName(eventName)) {
            eventNameSpace = getEventNameSpace(types_2.Group.Error, eventName, __assign(__assign({}, eventComponent), { type: '' }));
        }
        else {
            eventNameSpace = getEventNameSpace(this.group, eventName, eventComponent);
        }
        var unsubscribe = this.app.subscribe(eventNameSpace, boundedCallback, component ? component.id : this.id);
        var subscription = {
            eventType: eventType,
            unsubscribe: unsubscribe,
            callback: boundedCallback,
            component: eventComponent,
            updateSubscribe: function (group, subgroups) {
                return _this.updateSubscription(subscription, group, subgroups);
            },
        };
        if (typeof currentIndex === 'number' &&
            currentIndex >= 0 &&
            currentIndex < this.subscriptions.length) {
            this.subscriptions[currentIndex] = subscription;
        }
        else {
            this.subscriptions.push(subscription);
        }
        return unsubscribe;
    };
    ActionSet.prototype.unsubscribe = function (resetOnly) {
        if (resetOnly === void 0) { resetOnly = false; }
        unsubscribeActions(this.subscriptions, this.defaultGroup, resetOnly);
        return this;
    };
    return ActionSet;
}());
exports.ActionSet = ActionSet;
var ActionSetWithChildren = /** @class */ (function (_super) {
    __extends(ActionSetWithChildren, _super);
    function ActionSetWithChildren() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = [];
        return _this;
    }
    ActionSetWithChildren.prototype.unsubscribe = function (unsubscribeChildren, resetParentOnly) {
        if (unsubscribeChildren === void 0) { unsubscribeChildren = true; }
        if (resetParentOnly === void 0) { resetParentOnly = false; }
        unsubscribeActions(this.subscriptions, this.defaultGroup, resetParentOnly);
        this.children.forEach(function (child) {
            if (child instanceof ActionSetWithChildren) {
                child.unsubscribe(unsubscribeChildren, !unsubscribeChildren);
            }
            else {
                child.unsubscribe(!unsubscribeChildren);
            }
        });
        return this;
    };
    ActionSetWithChildren.prototype.getChild = function (id) {
        var childIndex = this.children.findIndex(function (child) { return child.id === id; });
        return childIndex >= 0 ? this.children[childIndex] : undefined;
    };
    ActionSetWithChildren.prototype.getChildIndex = function (id) {
        return this.children.findIndex(function (child) { return child.id === id; });
    };
    ActionSetWithChildren.prototype.getChildSubscriptions = function (id, eventType) {
        return this.subscriptions.filter(function (sub) { return sub.component.id === id && (!eventType || eventType === sub.eventType); });
    };
    ActionSetWithChildren.prototype.addChild = function (child, group, subgroups) {
        var _this = this;
        var subscriptions = child.subscriptions;
        var existingChild = this.getChild(child.id);
        // Add child if it doesn't already exist
        if (!existingChild) {
            this.children.push(child);
        }
        if (!subscriptions || (group === child.group && subgroups === child.subgroups)) {
            return this;
        }
        subscriptions.forEach(function (subscription) {
            var updateSubscribe = subscription.updateSubscribe;
            updateSubscribe(group, subgroups);
        });
        // Update child's group and subgroups
        Object.assign(child, { group: group, subgroups: subgroups });
        // Update child's children subscriptions
        if (child instanceof ActionSetWithChildren) {
            child.children.forEach(function (childIter) {
                return _this.addChild(childIter, group, subgroups);
            });
        }
        return this;
    };
    ActionSetWithChildren.prototype.removeChild = function (id) {
        var _this = this;
        collection_1.removeFromCollection(this.children, this.getChild(id), function () {
            var toBeRemoved = _this.subscriptions.filter(function (subs) { return subs.component.id === id; });
            toBeRemoved.forEach(function (toRemove) {
                collection_1.removeFromCollection(_this.subscriptions, toRemove, function (removed) {
                    removed.unsubscribe();
                });
            });
        });
        return this;
    };
    ActionSetWithChildren.prototype.subscribeToChild = function (child, eventName, callback) {
        var _this = this;
        var boundedCallback = callback.bind(this);
        if (eventName instanceof Array) {
            eventName.forEach(function (eventNameIter) { return _this.subscribeToChild(child, eventNameIter, callback); });
            return this;
        }
        if (typeof eventName !== 'string') {
            return this;
        }
        var eventType = eventName.toUpperCase();
        var currentSubscriptions = this.getChildSubscriptions(child.id, eventType);
        if (currentSubscriptions.length > 0) {
            // Subscription is already there, simply update it
            currentSubscriptions.forEach(function (subs) { return subs.updateSubscribe(_this.group, child.subgroups); });
        }
        else {
            var childComponent = {
                id: child.id,
                subgroups: child.subgroups,
                type: child.type,
            };
            this.subscribe(eventType, boundedCallback, childComponent);
        }
        return this;
    };
    ActionSetWithChildren.prototype.getUpdatedChildActions = function (newActions, currentActions) {
        if (newActions.length === 0) {
            while (currentActions.length > 0) {
                var action = currentActions.pop();
                if (!action) {
                    break;
                }
                this.removeChild(action.id);
            }
            return undefined;
        }
        // Only allow unique actions
        var uniqueActions = newActions.filter(function (action, index, actionsArr) { return index === actionsArr.indexOf(action); });
        var newActionIds = uniqueActions.map(function (action) { return action.id; });
        // Remove unused actions
        var unusedActions = currentActions.filter(function (action) {
            return newActionIds.indexOf(action.id) < 0;
        });
        while (unusedActions.length > 0) {
            var action = unusedActions.pop();
            if (!action) {
                break;
            }
            this.removeChild(action.id);
        }
        return uniqueActions;
    };
    return ActionSetWithChildren;
}(ActionSet));
exports.ActionSetWithChildren = ActionSetWithChildren;
function unsubscribeActions(subscriptions, defaultGroup, reassign) {
    if (reassign === void 0) { reassign = false; }
    subscriptions.forEach(function (subscription) {
        if (reassign) {
            var updateSubscribe = subscription.updateSubscribe;
            // eslint-disable-next-line no-warning-comments
            // TODO: Support cases where we don't wipe out group and subgroups to defaults
            updateSubscribe(defaultGroup, []);
        }
        else {
            var unsubscribe = subscription.unsubscribe;
            unsubscribe();
        }
    });
    if (!reassign) {
        subscriptions.length = 0;
    }
}
function updateActionFromPayload(action, newProps) {
    var id = action.id;
    if (id === newProps.id) {
        // Merge new properties
        Object.assign(action, getMergedProps(action, newProps));
        return true;
    }
    return false;
}
exports.updateActionFromPayload = updateActionFromPayload;
function getMergedProps(props, newProps) {
    var merged = merge_1.default(props, newProps);
    if (!merged) {
        // tslint:disable-next-line:prefer-object-spread
        var cloned = Object.assign(props, newProps);
        return cloned;
    }
    return merged;
}
exports.getMergedProps = getMergedProps;
function forEachInEnum(types, callback) {
    Object.keys(types).forEach(function (key) {
        callback(types[key]);
    });
}
exports.forEachInEnum = forEachInEnum;
function findMatchInEnum(types, lookup) {
    var match = Object.keys(types).find(function (key) {
        return lookup === types[key];
    });
    return match ? types[match] : undefined;
}
exports.findMatchInEnum = findMatchInEnum;
function camelCaseToSnakeCase(value) {
    return value.replace(/([A-Z])/g, function (matcher, _val, index) {
        return "" + (index === 0 ? '' : '_') + matcher[0].toLowerCase();
    });
}
exports.NonSnakeCaseGroup = [
    types_2.Group.AuthCode,
    types_2.Group.Button,
    types_2.Group.ButtonGroup,
    types_2.Group.Cart,
    types_2.Group.Error,
    types_2.Group.Features,
    types_2.Group.Fullscreen,
    types_2.Group.Link,
    types_2.Group.Loading,
    types_2.Group.Menu,
    types_2.Group.Modal,
    types_2.Group.Navigation,
    types_2.Group.Pos,
    types_2.Group.Print,
    types_2.Group.ResourcePicker,
    types_2.Group.Scanner,
    types_2.Group.SessionToken,
    types_2.Group.Share,
    types_2.Group.TitleBar,
    types_2.Group.Toast,
];
/**
 * Maps the group name to its event name
 * @internal
 * @remarks - This method is necessary for the new pattern of using snake case
 * which makes it more readable and easier to reconstruct the group from an event name.
 * Example: `ContextualSaveBar` becomes `CONTEXTUAL_SAVE_BAR`
 * */
function groupToEventNameSpace(group) {
    if (exports.NonSnakeCaseGroup.includes(group)) {
        return group.toUpperCase();
    }
    return camelCaseToSnakeCase(group).toUpperCase();
}


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/merge.js":
/*!***********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/merge.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Returns a deeply merged object with properties from the 2 provided objects
 * @remarks - Only deeply merge objects. The second argument overrides the
 * first if it is provided as `null`, `undefined` or an array.
 * @public
 * */
function mergeProps(obj, newObj) {
    if (newObj == null) {
        return newObj;
    }
    // If setting to a different prototype or a non-object or non-array, don't merge any props
    if (typeof obj === 'undefined' ||
        !Object.prototype.isPrototypeOf.call(Object.getPrototypeOf(obj), newObj) ||
        (newObj.constructor.name !== 'Object' && newObj.constructor.name !== 'Array')) {
        return newObj;
    }
    var clone = {};
    Object.keys(newObj).forEach(function (key) {
        var exists = Object.prototype.hasOwnProperty.call(obj, key);
        if (!exists) {
            clone[key] = newObj[key];
        }
        else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            clone[key] = mergeProps(obj[key], newObj[key]);
        }
        else {
            clone[key] = newObj[key];
        }
    });
    // Copy old props that are not present in new object only if this is a simple object
    Object.keys(obj).forEach(function (key) {
        var exists = Object.prototype.hasOwnProperty.call(newObj, key);
        if (!exists) {
            clone[key] = obj[key];
        }
    });
    // Set prototype of cloned object to match original
    Object.setPrototypeOf(clone, Object.getPrototypeOf(obj));
    return clone;
}
exports["default"] = mergeProps;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/types.js":
/*!***********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/types.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ComponentType = exports.Group = void 0;
/**
 * Various action groups.
 * @public
 */
var Group;
(function (Group) {
    Group["AuthCode"] = "AuthCode";
    Group["Button"] = "Button";
    Group["ButtonGroup"] = "ButtonGroup";
    Group["Cart"] = "Cart";
    Group["Client"] = "Client";
    Group["ContextualSaveBar"] = "ContextualSaveBar";
    Group["Error"] = "Error";
    Group["Features"] = "Features";
    Group["FeedbackModal"] = "FeedbackModal";
    Group["Fullscreen"] = "Fullscreen";
    Group["LeaveConfirmation"] = "LeaveConfirmation";
    Group["Link"] = "Link";
    Group["Loading"] = "Loading";
    Group["Menu"] = "Menu";
    Group["Modal"] = "Modal";
    Group["Navigation"] = "Navigation";
    Group["Performance"] = "Performance";
    Group["Pos"] = "Pos";
    Group["Print"] = "Print";
    Group["ResourcePicker"] = "Resource_Picker";
    Group["Scanner"] = "Scanner";
    Group["SessionToken"] = "SessionToken";
    Group["Share"] = "Share";
    Group["TitleBar"] = "TitleBar";
    Group["Toast"] = "Toast";
    Group["MarketingExternalActivityTopBar"] = "MarketingExternalActivityTopBar";
})(Group = exports.Group || (exports.Group = {}));
/**
 * @internal
 */
var ComponentType;
(function (ComponentType) {
    ComponentType["Button"] = "Button";
    ComponentType["ButtonGroup"] = "ButtonGroup";
})(ComponentType = exports.ComponentType || (exports.ComponentType = {}));


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/uuid.js":
/*!**********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/uuid.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateUuid = void 0;
/**
 * Convert a number or array of integers to a string of padded hex octets.
 */
function asHex(value) {
    return Array.from(value)
        .map(function (i) { return ("00" + i.toString(16)).slice(-2); })
        .join('');
}
/**
 * Attempt to securely generate random bytes/
 */
function getRandomBytes(size) {
    // SPRNG
    if (typeof Uint8Array === 'function' && typeof window === 'object' && window.crypto) {
        var buffer = new Uint8Array(size);
        var randomValues = window.crypto.getRandomValues(buffer);
        if (randomValues) {
            return randomValues;
        }
    }
    // Insecure random
    return Array.from(new Array(size), function () { return (Math.random() * 255) | 0; });
}
/**
 * Generate a RFC4122-compliant v4 UUID.
 *
 * @see http://www.ietf.org/rfc/rfc4122.txt
 */
function generateUuid() {
    var version = 64;
    var clockSeqHiAndReserved = getRandomBytes(1);
    var timeHiAndVersion = getRandomBytes(2);
    clockSeqHiAndReserved[0] &= 63 | 128;
    // tslint:disable-next-line:binary-expression-operand-order
    timeHiAndVersion[0] &= 15 | version;
    return [
        // time-low
        asHex(getRandomBytes(4)),
        '-',
        // time-mid
        asHex(getRandomBytes(2)),
        '-',
        // time-high-and-version
        asHex(timeHiAndVersion),
        '-',
        // clock-seq-and-reserved
        asHex(clockSeqHiAndReserved),
        // clock-seq-loq
        asHex(getRandomBytes(1)),
        '-',
        // node
        asHex(getRandomBytes(6)),
    ].join('');
}
exports.generateUuid = generateUuid;
// Default
exports["default"] = generateUuid;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/actions/validator.js":
/*!***************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/actions/validator.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isAppMessage = exports.isPermitted = exports.getPermissionKey = exports.isFromApp = exports.isAppBridgeAction = void 0;
var types_1 = __webpack_require__(/*! ../client/types */ "./node_modules/@shopify/app-bridge/client/types.js");
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/@shopify/app-bridge/actions/constants.js");
var helper_1 = __webpack_require__(/*! ./helper */ "./node_modules/@shopify/app-bridge/actions/helper.js");
/**
 * Predicate to determine if an action is an App Bridge action.
 * @public
 */
function isAppBridgeAction(action) {
    return (action instanceof Object &&
        Object.prototype.hasOwnProperty.call(action, 'type') &&
        action.type.toString().startsWith(constants_1.PREFIX));
}
exports.isAppBridgeAction = isAppBridgeAction;
/**
 * Predicate to determine if an action originated from an application.
 * @internal
 */
function isFromApp(action) {
    if (typeof action !== 'object' || typeof action.source !== 'object') {
        return false;
    }
    return typeof action.source.apiKey === 'string';
}
exports.isFromApp = isFromApp;
/**
 * Returns the action type without the prefix and group
 * @internal
 */
function getPermissionKey(type) {
    return type.replace(new RegExp("^" + constants_1.PREFIX + constants_1.SEPARATOR + "\\w+" + constants_1.SEPARATOR), '');
}
exports.getPermissionKey = getPermissionKey;
/**
 * Predicate to determine if an action is permitted
 * @internal
 */
function isPermitted(features, _a, permissionType) {
    var group = _a.group, type = _a.type;
    if (!group || !Object.prototype.hasOwnProperty.call(features, group)) {
        return false;
    }
    var feature = features[group];
    if (!feature) {
        return false;
    }
    var actionType = getPermissionKey(type);
    return feature[actionType] ? feature[actionType][permissionType] === true : false;
}
exports.isPermitted = isPermitted;
/**
 * Predicate to determine if an event originated from an application.
 * @internal
 */
function isAppMessage(event) {
    if (typeof event !== 'object' || !event.data || typeof event.data !== 'object') {
        return false;
    }
    var data = event.data;
    return (Object.prototype.hasOwnProperty.call(data, 'type') &&
        helper_1.findMatchInEnum(types_1.MessageType, data.type) !== undefined);
}
exports.isAppMessage = isAppMessage;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/client/types.js":
/*!**********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/client/types.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LifecycleHook = exports.MessageType = exports.PermissionType = exports.isV1Config = void 0;
/**
 * @internal
 * @param config
 */
function isV1Config(config) {
    return config.shopOrigin !== undefined;
}
exports.isV1Config = isV1Config;
/**
 * @internal
 */
var PermissionType;
(function (PermissionType) {
    PermissionType["Dispatch"] = "Dispatch";
    PermissionType["Subscribe"] = "Subscribe";
})(PermissionType = exports.PermissionType || (exports.PermissionType = {}));
/**
 * @internal
 */
var MessageType;
(function (MessageType) {
    MessageType["GetState"] = "getState";
    MessageType["Dispatch"] = "dispatch";
    MessageType["Subscribe"] = "subscribe";
    MessageType["Unsubscribe"] = "unsubscribe";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
/**
 *
 * There are two types of hooks: `LifecycleHook.DispatchAction` and `LifecycleHook.UpdateAction`.
 *
 * @remarks
 * `DispatchAction` hooks are run when an action is dispatched with the `.dispatch()` function:
 *
 * ```js
 * const toastNotice = Toast.create(app, {message: 'Product saved'});
 * toastNotice.dispatch(Toast.Action.SHOW);
 * ```
 *
 * `UpdateAction` hooks are run when an action is updated, using the `.set()` function:
 *
 * ```js
 * toastNotice.set({message: 'Product could not be saved', isError: true});
 * ```
 *
 * @public
 */
var LifecycleHook;
(function (LifecycleHook) {
    LifecycleHook["UpdateAction"] = "UpdateAction";
    LifecycleHook["DispatchAction"] = "DispatchAction";
})(LifecycleHook = exports.LifecycleHook || (exports.LifecycleHook = {}));


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/util/collection.js":
/*!*************************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/util/collection.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeFromCollection = exports.addAndRemoveFromCollection = void 0;
/**
 * Add an item to a collection, return a function that can then be used to
 * remove the item from the collection. Optionally accepting a callback that is
 * invoked when the item is removed from the collection.
 *
 * @internal
 */
function addAndRemoveFromCollection(collection, item, then) {
    collection.push(item);
    return function () {
        return removeFromCollection(collection, item, then);
    };
}
exports.addAndRemoveFromCollection = addAndRemoveFromCollection;
/**
 * Remove the item from the collection. Optionally accepting a callback that is
 * invoked when the item is removed from the collection.
 *
 * @internal
 */
function removeFromCollection(collection, item, then) {
    var idx = collection.findIndex(function (i) { return i === item; });
    if (idx >= 0) {
        collection.splice(idx, 1);
        if (then) {
            then(item);
        }
        return true;
    }
    return false;
}
exports.removeFromCollection = removeFromCollection;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/util/env.js":
/*!******************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/util/env.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");

var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isUnframed = exports.isDevelopmentClient = exports.isProduction = exports.isDevelopment = exports.isClient = exports.isServer = void 0;
exports.isServer = typeof window === 'undefined';
exports.isClient = !exports.isServer;
exports.isDevelopment = typeof process !== 'undefined' && process.env && "development" === 'development';
exports.isProduction = !exports.isDevelopment;
exports.isDevelopmentClient = exports.isDevelopment && exports.isClient;
exports.isUnframed = exports.isClient && ((_b = (_a = window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) === null || _b === void 0 ? void 0 : _b.indexOf('Unframed')) > 0;


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/util/unframed.js":
/*!***********************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/util/unframed.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parsePayloadWithContext = void 0;
var merge_1 = __importDefault(__webpack_require__(/*! ../actions/merge */ "./node_modules/@shopify/app-bridge/actions/merge.js"));
/**
 * Adds context to the MessageTransport payload to distinguish whether an action
 * is dispatched from Main or Modal.
 */
function parsePayloadWithContext(payload) {
    var context = typeof window.MobileWebView.context === 'function'
        ? window.MobileWebView.context()
        : window.__context__;
    if (!context) {
        return JSON.stringify(payload);
    }
    var dataWithContext = merge_1.default(payload, {
        id: payload.id,
        context: context,
        data: {
            payload: {
                context: context,
            },
            context: context,
        },
    });
    return JSON.stringify(dataWithContext);
}
exports.parsePayloadWithContext = parsePayloadWithContext;


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var validator = __webpack_require__(/*! ../helpers/validator */ "./node_modules/axios/lib/helpers/validator.js");

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      forcedJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      clarifyTimeoutError: validators.transitional(validators.boolean, '1.0.0')
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");
var enhanceError = __webpack_require__(/*! ./core/enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var pkg = __webpack_require__(/*! ./../../package.json */ "./node_modules/axios/package.json");

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};
var currentVerArr = pkg.version.split('.');

/**
 * Compare package versions
 * @param {string} version
 * @param {string?} thanVersion
 * @returns {boolean}
 */
function isOlderVersion(version, thanVersion) {
  var pkgVersionArr = thanVersion ? thanVersion.split('.') : currentVerArr;
  var destVer = version.split('.');
  for (var i = 0; i < 3; i++) {
    if (pkgVersionArr[i] > destVer[i]) {
      return true;
    } else if (pkgVersionArr[i] < destVer[i]) {
      return false;
    }
  }
  return false;
}

/**
 * Transitional option validator
 * @param {function|boolean?} validator
 * @param {string?} version
 * @param {string} message
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  var isDeprecated = version && isOlderVersion(version);

  function formatMessage(opt, desc) {
    return '[Axios v' + pkg.version + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed in ' + version));
    }

    if (isDeprecated && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  isOlderVersion: isOlderVersion,
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./resources/js/axios.js":
/*!*******************************!*\
  !*** ./resources/js/axios.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_app_bridge_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-utils */ "./node_modules/@shopify/app-bridge-utils/index.js");
/* harmony import */ var _shopify_app_bridge_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_utils__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var instance = axios__WEBPACK_IMPORTED_MODULE_1___default().create(); // Here window.shopify_app_bridge is App.

instance.interceptors.request.use( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(config) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_shopify_app_bridge_utils__WEBPACK_IMPORTED_MODULE_2__.getSessionToken)(window.shopify_app_bridge).then(function (token) {
              // console.log(token)
              config.headers["Authorization"] = "Bearer ".concat(token);
              return config;
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}()); // Export your Axios instance to use within your app

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/@shopify/app-bridge/package.json":
/*!*******************************************************!*\
  !*** ./node_modules/@shopify/app-bridge/package.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"@shopify/app-bridge","version":"2.0.13","types":"index.d.ts","main":"index.js","unpkg":"umd/index.js","jsdelivr":"umd/index.js","files":["/actions/","/client/","/umd/","/util/","/validate/","/development.d.ts","/development.js","/index.d.ts","/index.js","/MessageTransport.d.ts","/MessageTransport.js","/production.d.ts","/production.js"],"private":false,"publishConfig":{"access":"public","@shopify:registry":"https://registry.npmjs.org"},"repository":"git@github.com:Shopify/app-bridge.git","homepage":"https://shopify.dev/tools/app-bridge","author":"Shopify Inc.","license":"MIT","scripts":{"build":"yarn build:tsc && yarn build:npm && yarn build:umd","build:tsc":"NODE_ENV=production tsc","build:umd":"NODE_ENV=production webpack -p","build:npm":"shx cp -r ./npm/index.js ./index.js","check":"tsc","clean":"cat package.json | node -pe \\"JSON.parse(require(\'fs\').readFileSync(\'/dev/stdin\').toString()).files.map(f => \'./\'+f).join(\' \')\\" | xargs rm -rf","pack":"yarn pack","size":"size-limit"},"sideEffects":false,"size-limit":[{"limit":"17 KB","path":"production.js"}],"dependencies":{"base64url":"^3.0.1"},"devDependencies":{"@types/node":"^10.12.5","shx":"^0.3.3"},"gitHead":"6d3066203c2126a028e41c60fcc3266769fde0c5"}');

/***/ }),

/***/ "./node_modules/axios/package.json":
/*!*****************************************!*\
  !*** ./node_modules/axios/package.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}');

/***/ })

}]);