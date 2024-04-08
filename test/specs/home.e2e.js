import { browser, expect} from '@wdio/globals';


describe('Amazon Home Page', () => {
    it('Access url, verify url and title', async () => {
        await browser.url('/');
        await expect(browser).toHaveUrlContaining('amazon');
        await expect(browser).toHaveTitleContaining('Amazon.com');
    });
});

