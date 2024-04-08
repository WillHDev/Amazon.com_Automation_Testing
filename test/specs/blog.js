describe('Blog', () => {

    //  Get the list of all Recent Posts and assert the length of each post is greater than 10
    it('Get the list of all Recent Posts and assert the length of each post is greater than 10', async () => {
        await browser.url('/blog');

    //  There is a child in between recent-posts-3 and ul
        const recentPostList = await $$('.recent-posts-3 ul li');

    //  Loop through list of posts and assert the text length is greater than 10

        for (const item of recentPostList) {
            const text = item.getText();
            await expect(text.length).toBeGreaterThan(10);
        }
        
    });




});