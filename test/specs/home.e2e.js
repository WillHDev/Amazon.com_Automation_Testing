import { browser, expect, $ } from '@wdio/globals';

// const { page } = require('./page');
// import { chromedriver_autoinstaller } from chromedriver;
// chromedriver.install()

describe('Amazon Home Page', () => {
    it('Access url, verify url and title', async () => {
        await browser.url('/');
        await expect(browser).toHaveUrlContaining('amazon');
        await expect(browser).toHaveTitleContaining('Amazon.com');
    });

    it('Search Content and Verify Text', async () => {
        const searchInput = await $('#twotabsearchtextbox');
        const searchButton =  await $('input[type="submit"]');
        const expectedSearchText =  await expect($('.a-color-state.a-text-bold'));

        await searchInput.addValue('macbook');
        await searchButton.click();
        await expect(expectedSearchText).toHaveTextContaining('macbook');

        //replaced:

        // await browser.url('/');
        // await $('#twotabsearchtextbox').addValue('macbook');
        // await $('input[type="submit"]').click();

        // //Tip: Use text containing because actual text is in quotes on the amazon page
        // await expect($('.a-color-state.a-text-bold')).toHaveTextContaining('macbook');
    });

    it.only('Auto Suggestion', async () => {
        await browser.url('/');
        const searchInput = await $('#twotabsearchtextbox');
        await browser.pause(500);
        const suggestionPane = await $('.left-pane-results-container');
        const firstSearchResult = await suggestionPane.$('div');
        const expectedSearchText = await $('.a-color-state.a-text-bold');
    
        await searchInput.click();
        await browser.pause(500);
        await expect(suggestionPane).toBeDisplayed();
        await browser.keys('ArrowDown');
        const expectedText = await firstSearchResult.getText();
        await browser.keys('Enter');
        await expect(expectedSearchText).toHaveTextContaining(expectedText);
      });

});

