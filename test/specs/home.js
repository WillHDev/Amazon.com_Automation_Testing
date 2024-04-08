//Practice E-Commerce Site - Automation Drill
//http://


describe('Home', () => {

    //  1. Test for asserting URL https://practice.sdetunicorns.com 
    it('Open URL & assert title', async () => {
        await browser.url('https://practice.sdetunicorns.com/');
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    });


    //  2. Test for clicking "Get Started" btn
    it('Click get started btn & assert url contains get-started text', async () => {
        await $('#get-started').click();
        await expect(browser).toHaveUrlContaining('get-started');
    });

    // 3.  Test for clicking logo to navigate back to home
    it('Click logo and assert url DOES NOT contain get-started text', async () => {
        await browser.url('https://practice.sdetunicorns.com/#get-started/');
       
        //Click Logo
        await $('//img[@alt="Practice E-Commerce Site"]').click();
        await expect(browser).not.toHaveUrlContaining('get-started');
    });

    // 4.  Find heading element and assert text 
    it('Find heading element and assert text', async () => {
        await browser.url('https://practice.sdetunicorns.com/');
        //  Find heading element
        const headingEl = await $('.elementor-widget-container h1');
        //  Get the text
        // const headingText = await headingEl.getText();
        //  Assert text
        await expect(headingEl).toHaveText('Think different. Make different.');
    });

});