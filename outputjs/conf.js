"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    framework: "jasmine",
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./specs/demoApp.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    //browser.waitForAngularEnabled(false);
    ProtractorBrowser: ("http://automationpractice.com/"),
    seleniumAddress: "http://localhost:4444/wd/hub"
};
