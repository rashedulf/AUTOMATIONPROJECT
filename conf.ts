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

    

    seleniumAddress: "http://localhost:4444/wd/hub"

    
    }
