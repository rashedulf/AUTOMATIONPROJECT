import {Config, browser } from "protractor";

export let config:Config= {
    framework : "jasmine",

    capabilities:{
        browserName: 'chrome'

    },

    specs: ['./specs/demoApp.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000

     
    },

    //browser.waitForAngularEnabled(false);
    ProtractorBrowser:("http://automationpractice.com/"),

    

    seleniumAddress: "http://localhost:4444/wd/hub"

    

    
    }
