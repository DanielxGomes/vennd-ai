"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/layout",{

/***/ "(app-pages-browser)/./app/ui/dashboard/nav-links.tsx":
/*!****************************************!*\
  !*** ./app/ui/dashboard/nav-links.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavLinks)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-20240704/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/.pnpm/@heroicons+react@2.1.4_react@19.0.0-rc-f38c22b244-20240704/node_modules/@heroicons/react/24/outline/esm/HomeIcon.js\");\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/.pnpm/@heroicons+react@2.1.4_react@19.0.0-rc-f38c22b244-20240704/node_modules/@heroicons/react/24/outline/esm/DocumentDuplicateIcon.js\");\n/* harmony import */ var _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=DocumentDuplicateIcon,HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/.pnpm/@heroicons+react@2.1.4_react@19.0.0-rc-f38c22b244-20240704/node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-20240704/node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/.pnpm/next@15.0.0-canary.56_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-20240704/node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// ...\nfunction NavLinks() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const links = [\n        {\n            name: 'Dashboard',\n            href: '/dashboard',\n            icon: _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n        },\n        {\n            name: 'Invoices',\n            href: '/dashboard/invoices',\n            icon: _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n        },\n        {\n            name: 'Customers',\n            href: '/dashboard/customers',\n            icon: _barrel_optimize_names_DocumentDuplicateIcon_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: links.map((link)=>{\n            const LinkIcon = link.icon;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                href: link.href,\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3', {\n                    'bg-sky-100 text-blue-600': pathname === link.href\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkIcon, {\n                        className: \"w-6\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Daniel Gomes\\\\nextjs-dashboard\\\\app\\\\ui\\\\dashboard\\\\nav-links.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"hidden md:block\",\n                        children: link.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Daniel Gomes\\\\nextjs-dashboard\\\\app\\\\ui\\\\dashboard\\\\nav-links.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, link.name, true, {\n                fileName: \"C:\\\\Users\\\\Daniel Gomes\\\\nextjs-dashboard\\\\app\\\\ui\\\\dashboard\\\\nav-links.tsx\",\n                lineNumber: 41,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false);\n}\n_s(NavLinks, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = NavLinks;\nvar _c;\n$RefreshReg$(_c, \"NavLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9kYXNoYm9hcmQvbmF2LWxpbmtzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBT3FDO0FBQ1I7QUFDaUI7QUFDdEI7QUFHeEIsTUFBTTtBQUVTLFNBQVNNOztJQUN0QixNQUFNQyxXQUFXSCw0REFBV0E7SUFDNUIsTUFBTUksUUFBUTtRQUNaO1lBQ0VDLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxNQUFNVixzSUFBUUE7UUFDaEI7UUFDQTtZQUNFUSxNQUFNO1lBQ05DLE1BQU07WUFDTkMsTUFBTVQsc0lBQXFCQTtRQUM3QjtRQUNBO1lBQ0VPLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxNQUFNWCxzSUFBYUE7UUFDckI7S0FDRDtJQUVELHFCQUNFO2tCQUNHUSxNQUFNSSxHQUFHLENBQUMsQ0FBQ0M7WUFDVixNQUFNQyxXQUFXRCxLQUFLRixJQUFJO1lBQzFCLHFCQUNFLDhEQUFDUixpREFBSUE7Z0JBRUhPLE1BQU1HLEtBQUtILElBQUk7Z0JBQ2ZLLFdBQVdWLGdEQUFJQSxDQUNiLHdMQUNBO29CQUNFLDRCQUE0QkUsYUFBYU0sS0FBS0gsSUFBSTtnQkFDcEQ7O2tDQUdGLDhEQUFDSTt3QkFBU0MsV0FBVTs7Ozs7O2tDQUNwQiw4REFBQ0M7d0JBQUVELFdBQVU7a0NBQW1CRixLQUFLSixJQUFJOzs7Ozs7O2VBVnBDSSxLQUFLSixJQUFJOzs7OztRQWFwQjs7QUFHTjtHQTFDd0JIOztRQUNMRix3REFBV0E7OztLQURORSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdWkvZGFzaGJvYXJkL25hdi1saW5rcy50c3g/NTVlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cblxuaW1wb3J0IHtcbiAgVXNlckdyb3VwSWNvbixcbiAgSG9tZUljb24sXG4gIERvY3VtZW50RHVwbGljYXRlSWNvbixcbn0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcblxuIFxuLy8gLi4uXG4gXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZMaW5rcygpIHtcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICBjb25zdCBsaW5rcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnRGFzaGJvYXJkJyxcbiAgICAgIGhyZWY6ICcvZGFzaGJvYXJkJyxcbiAgICAgIGljb246IEhvbWVJY29uLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0ludm9pY2VzJyxcbiAgICAgIGhyZWY6ICcvZGFzaGJvYXJkL2ludm9pY2VzJyxcbiAgICAgIGljb246IERvY3VtZW50RHVwbGljYXRlSWNvbixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDdXN0b21lcnMnLFxuICAgICAgaHJlZjogJy9kYXNoYm9hcmQvY3VzdG9tZXJzJyxcbiAgICAgIGljb246IFVzZXJHcm91cEljb24sXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bGlua3MubWFwKChsaW5rKSA9PiB7XG4gICAgICAgIGNvbnN0IExpbmtJY29uID0gbGluay5pY29uO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBrZXk9e2xpbmsubmFtZX1cbiAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICAgICAgJ2ZsZXggaC1bNDhweF0gZ3JvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgcm91bmRlZC1tZCBiZy1ncmF5LTUwIHAtMyB0ZXh0LXNtIGZvbnQtbWVkaXVtIGhvdmVyOmJnLXNreS0xMDAgaG92ZXI6dGV4dC1ibHVlLTYwMCBtZDpmbGV4LW5vbmUgbWQ6anVzdGlmeS1zdGFydCBtZDpwLTIgbWQ6cHgtMycsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAnYmctc2t5LTEwMCB0ZXh0LWJsdWUtNjAwJzogcGF0aG5hbWUgPT09IGxpbmsuaHJlZixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmtJY29uIGNsYXNzTmFtZT1cInctNlwiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj57bGluay5uYW1lfTwvcD5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn0iXSwibmFtZXMiOlsiVXNlckdyb3VwSWNvbiIsIkhvbWVJY29uIiwiRG9jdW1lbnREdXBsaWNhdGVJY29uIiwiTGluayIsInVzZVBhdGhuYW1lIiwiY2xzeCIsIk5hdkxpbmtzIiwicGF0aG5hbWUiLCJsaW5rcyIsIm5hbWUiLCJocmVmIiwiaWNvbiIsIm1hcCIsImxpbmsiLCJMaW5rSWNvbiIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/dashboard/nav-links.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clsx: () => (/* binding */ clsx),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction r(e){var t,f,n=\"\";if(\"string\"==typeof e||\"number\"==typeof e)n+=e;else if(\"object\"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=\" \"),n+=f)}else for(f in e)e[f]&&(n&&(n+=\" \"),n+=f);return n}function clsx(){for(var e,t,f=0,n=\"\",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=\" \"),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jbHN4QDIuMS4xL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxjQUFjLGFBQWEsK0NBQStDLGdEQUFnRCxlQUFlLFFBQVEsSUFBSSwwQ0FBMEMseUNBQXlDLFNBQWdCLGdCQUFnQix3Q0FBd0MsSUFBSSxtREFBbUQsU0FBUyxpRUFBZSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jbHN4QDIuMS4xL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tanM/OTcyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiByKGUpe3ZhciB0LGYsbj1cIlwiO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlfHxcIm51bWJlclwiPT10eXBlb2YgZSluKz1lO2Vsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIGUpaWYoQXJyYXkuaXNBcnJheShlKSl7dmFyIG89ZS5sZW5ndGg7Zm9yKHQ9MDt0PG87dCsrKWVbdF0mJihmPXIoZVt0XSkpJiYobiYmKG4rPVwiIFwiKSxuKz1mKX1lbHNlIGZvcihmIGluIGUpZVtmXSYmKG4mJihuKz1cIiBcIiksbis9Zik7cmV0dXJuIG59ZXhwb3J0IGZ1bmN0aW9uIGNsc3goKXtmb3IodmFyIGUsdCxmPTAsbj1cIlwiLG89YXJndW1lbnRzLmxlbmd0aDtmPG87ZisrKShlPWFyZ3VtZW50c1tmXSkmJih0PXIoZSkpJiYobiYmKG4rPVwiIFwiKSxuKz10KTtyZXR1cm4gbn1leHBvcnQgZGVmYXVsdCBjbHN4OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs\n"));

/***/ })

});