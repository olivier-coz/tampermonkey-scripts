// ==UserScript==
// @name         Enable Text Copying on All Websites
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Allows copying of selectable text on websites (especially for those for shitty websites that block it)
// @author       Olivier Coz
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Remove event listeners that block copying
    const allowCopy = () => {
        document.body && ['copy', 'cut', 'contextmenu', 'selectstart', 'mousedown'].forEach(event => {
            document.body.addEventListener(event, e => {
                e.stopPropagation();
            }, true);
        });
    };

    // Override document methods that disable copy
    const overrideDocumentMethods = () => {
        const blockEvents = ['oncopy', 'oncut', 'oncontextmenu', 'onselectstart', 'onmousedown'];
        blockEvents.forEach(event => {
            Object.defineProperty(document, event, {
                get: () => null,
                set: () => {}
            });
            Object.defineProperty(document.body || {}, event, {
                get: () => null,
                set: () => {}
            });
        });
    };

    // Allow text selection and copying
    const allowStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            * {
                -webkit-user-select: text !important;
                -moz-user-select: text !important;
                -ms-user-select: text !important;
                user-select: text !important;
            }
        `;
        document.head.appendChild(style);
    };

    const init = () => {
        allowCopy();
        overrideDocumentMethods();
        allowStyles();
    };

    document.addEventListener('DOMContentLoaded', init);
})();
