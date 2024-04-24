import { browser, expect} from '@wdio/globals';

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
        await $('#twotabsearchtextbox').addValue('macbook');
        await $('input[type="submit"]').click();


    // it('Search Content and Verify Text', async () => {
    //     await page.searchInput.addValue('macbook');
    //     await page.submitButton.click();

        //Tip: Use text containing because actual text is in quotes on the amazon page
        await expect($('.a-color-state.a-text-bold')).toHaveTextContaining('macbook');
    });


    it('It clicks on search bar and selects first auto suggestion, then verifies text', async () => {

        const searchInput = await $('#twotabsearchtextbox');
        const suggestionPane = await $('.left-pane-results-container'); 
        //after that, pick the first div, $$ would give you all of the divs that are there
        const firstSearchText= await suggestionPane.$('div');
        const expectedSeachText = await $('a-color-state a-text-bold');
        //const firstAutoSuggestion = await $('#s-suggestion-trending-container').$$('span[id*=s-heavy]').value[0];
        //firstAutoSuggestion.click();
        await searchInput.click();
        //this replaces the pauses
        await expect(suggestionPane).toBeDisplayed();
        //await browser.pause(1000);
        // await expect($('a-color-state a-text-bold')).toHaveTextContaining(firstAutoSuggestion.toString());

        await browser.keys('ArrowDown');
        const expectedText = firstSearchResult.getText();

        //TODO: await browser.pause(1000); > don't need this anymore - why?
        await browser.keys('Enter');
        //await browser.pause(5000);
        await expect(firstSearchText.toHaveTextContaining(expectedText));


    });
});

