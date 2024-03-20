const { config: baseConfig } = require('./base.conf.js');

const parallelConfig = {
  maxInstances: 10,
  commonCapabilities: {
    'bstack:options': {
      buildName: 'browserstack build',
      source: 'webdriverio:sample-master:v1.2'
    }
  },
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
  capabilities: [
    {
      browserName: 'chrome',
      'bstack:options': {
        deviceName: 'Samsung Galaxy S20',
      },
    },
  ],
};

exports.config = { ...baseConfig, ...parallelConfig };

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i]};
});
