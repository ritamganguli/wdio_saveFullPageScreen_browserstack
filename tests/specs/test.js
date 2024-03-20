const assert = require('assert');

describe('Google Search Function', () => {
  it('can find search results', async () => {
    await browser.url('https://www.bounteous.com/about/');
		/* Do some things on a page. */
		await browser.saveFullPageScreen(`SomeImageName`);
    await browser.saveScreen('screenshot.png');

		/*
			The saveFullPageScreen() can also take in options as a second parameter where `options` is an object that can contain items like:
			'hideAfterFirstScroll' - array of selectors.
			await browser.saveFullPageScreen(`SomeImageName`, options);
		*/
  });
});