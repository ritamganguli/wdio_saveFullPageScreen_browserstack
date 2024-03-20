exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'mobileautoservic_w86Uka',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'SeW8HQo2LzzoUw9qsDK8',

  updateJob: false,
  specs: ['./tests/specs/test.js'],
  exclude: [],

  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  hostname: 'hub.browserstack.com',
  services: [
    [
			'image-comparison',
			{
				screenshotPath: './images',
				fullPageScrollTimeout: 750,
				hideScrollbar: true,
				blockOutStatusBar: true,
				blockOutToolBar: true,
				disableCSSAnimation: true,
				blockOutSideBar: true
			},
		]
  ],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};
