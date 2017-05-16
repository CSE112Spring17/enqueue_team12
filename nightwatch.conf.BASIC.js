// we use a nightwatch.conf.js file so we can include comments and helper functions
module.exports = {
  "src_folders": [
    "test/e2e/"// Where you are storing your Nightwatch e2e tests
  ],
  "output_folder": "./reports", // reports (test outcome) output by nightwatch
  "selenium": { // downloaded by selenium-download module (see readme)
    "start_process": true, // tells nightwatch to start/stop the selenium process
    "server_path": "./bin/selenium-server-standalone-2.53.0.jar",
    "host": "127.0.0.1",
    "port": 4444, // standard selenium port
    "cli_args": { // chromedriver is downloaded by selenium-download (see readme)
      "webdriver.chrome.driver" : "./node_modules/nightwatch/bin/chromedriver"
    }
  },
  "test_settings": {
    "default": {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots": {
        "enabled": false, // if you want to keep screenshots
        "path": './screenshots' // save screenshots here
      },
      "globals": {
        "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
      },
      "desiredCapabilities": { // use Chrome as the default browser for tests
        "browserName": "chrome"
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true // turn off to test progressive enhancement
      }
    },
     "phantomjs":{
      "selenium_port": 4444,
      "selenium_host": "localhost",
      "desiredCapabilities" : {
        "browserName" : "phantomjs",
        "javascriptEnabled" : true,
        "acceptSslCerts" : true,
        "phantomjs.binary.path" : "./node_modules/phantomjs/bin/phantomjs",
        "phantomjs.cli.args" : ["--ignore-ssl-errors=true"]
      }
    }
  }
}
