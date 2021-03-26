const path = require('path');
const apkPath = path.resolve(__dirname, './assets/apk/eribank.apk');

const appCaps = {
        platformName: "Android",
        autoGrantPermissions: true,
        appPackage: "com.experitest.ExperiBank",
        appActivity: ".LoginActivity",
        app: apkPath
};


module.exports = {
    //
    // ======
    // Suites
    // ======
    // Define your test suites here. 
    //
    suites: [
        {
            name: '1',
            cases: [
                {
                    path: './tests/1.js'
                }
            ]        
        },
        {
            name: '2',
            cases: [
                {
                    path: './tests/2.js'
                }
            ]        
        }
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. 
    // If "concurrency" value is greater than 1, tests with different capabilities will be executed in parallel.
    //
    concurrency: 1,
    capabilities: [appCaps],
    
      
    // ============
    // Parameters
    // ============
    //
    parameters : {
        file: './assets/params.csv',
        mode: 'seq', // can be 'random' or 'all' as well
    },
    
    // ============
    // Iterations
    // ============
    //
    // Tests will run only once if iterations number is not explicitly specified.
    //
    //iterations: 1,
    
    // ============
    // Selenium & Appium server URLs
    // ============
    //
    // If not specified, the default URLs will be used
    //
    //seleniumUrl: 'http://localhost:4444/wd/hub',
    //appiumUrl: 'http://localhost:4723/wd/hub',
    
    //
    // ========
    // Services
    // ========
    // List services you want to enable during the test execution.
    // Available services: selenium-standalone | devtools
    //
    services: ['selenium-standalone', 'devtools'],   
    //
    // =======
    // Modules
    // =======
    // List modules you want to enable during the test execution.
    // Loading unnecessary modules might slow down your test execution, 
    // so only load modules that are used in the test.
    // See a list of available modules here: http://docs.oxygenhq.org/
    //
    modules: ['mob', 'db', 'log', 'assert', 'eyes', 'pdf', 'http', 'email', 'win'],
    //
    // =========
    // Framework
    // =========
    // Define a testing framework for this project. 
    // Available frameworks: oxygen | cucumber
    //
    framework: 'oxygen',
    //
    // =========
    // Reporting
    // =========
    // Define test reporter format and corresponding options. 
    // Multiple reporter formats can be specified.
    // Available reporters: json | html | junit | excel | pdf | xml
    //
    reporting: {
        //outputDir: path.join(__dirname, 'reports'),
        reporters: ['html'],
    },
    //
    // ==========
    // Applitools
    // ==========
    // Define your Applitools service API key.
    //
    applitoolsOpts: {
        key: 'QFhaDgdYdxGeiK2363PcwSrZVi34lUCx6yR1f6diFUA110'
    },
    //
    // =====
    // Hooks
    // =====
    // Oxygen provides several hooks that can be used to interfere with the test
    // execution process. 
    //
    hooks: {
        //
        // Hook that gets executed before the test starts.
        // At this point, Oxygen has been already initialized, so you
        // can access Oxygen via 'ox' global variable. 
        //
        beforeTest: function(runId, options, caps) {
            console.log('beforeTest');
        },
        beforeSuite: function(suiteDef) {
            console.log('beforeSuite');
        },
        beforeCase: function(caseDef) {
            console.log('beforeCase');
        },
        beforeCommand: function(cmdDef) {
            console.log('beforeCommand');
        },
        afterCommand: function(cmdResult) {
            console.log('afterCommand');
        },
        afterCase: function(caseDef, caseResult) {
            console.log('afterCase')
        },
        afterSuite: function(suiteDef, suiteResult) {
            console.log('afterSuite')
        },
        afterTest: function(runId, testResult) {
            console.log('afterTest')
        }
    }
};
