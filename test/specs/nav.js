describe('Nav', () => {

    //  1. Get text of all menu items and assert them
    it('Get text of all menu items and assert them', async () => {
        await browser.url('/');

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
            ];

            const actualLinks = [];

            const navLinks = await $('.zak-primary-nav').$$('li[id*=menu]');

            for (const link of navLinks) {
                actualLinks.push(await link.getText());
            }

        await expect(actualLinks).toEqual(expectedLinks);
    });




});