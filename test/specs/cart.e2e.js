import { browser, expect, $ } from '@wdio/globals';

describe('Cart Flow', () => {

  before(async () => {
    await browser.url('/');
    const searchInput = await $('#twotabsearchtextbox');
    const searchButton =  await $('input[type="submit"]');
    await searchInput.addValue('macbook');
    await searchButton.click();


  });

  it('Add item to Cart', async () => {

    await $('.s-product-image-container').click();

    const devicePrice = (await $('#a-price-whole')).getText();
    await $('#add-to-cart-button').click();
     

    await browser.pause(5000);
    //await $$('.s-product-image-container')[0]
    //return first node

    // await $('.s-product-image-container').click();
    // devicePrice = await $('#corePrice_desktop span[aria-hidden="true"]')
    //   .getText();
    // await $('#add-to-cart-button').click();
    // await expect($('#NATC_SMART_WAGON_CONF_MSG_SUCCESS span'))
    //   .toHaveText('Added to Cart');

    // const subtotal = await browser.execute(() => {
    //   return document.querySelector('#sw-subtotal span[class="a-offscreen"]').textContent
    // })
    // await expect(subtotal).toEqual(devicePrice);

  });
});


// describeAndIt('Cart Flow', () => {
//   it('', () => {

//   })
// })




// import { browser, expect } from '@wdio/globals';

// describe('Adds item to cart and verfies cart contents', () => {
//     before('Cart Flow', async () => {

//       //   await browser.url('/');
//       //  // await browser.pause(5000);
//       //   const searchInput = await $('#twotabsearchtextbox');
//       //   const searchButton = await $('input[type="submit"]');
//       //   await searchInput.addValue('macbook');
//       //   await searchButton.click();

//         await browser.url('/');
//         await browser.pause(500);
//         await $('#twotabsearchtextbox').addValue('macbook');
//         await $('input[type="submit"]').click();

//         //const firstSearchResult = await suggestionPane.$('div');

//     });




// //    it('Selects item to add to cart', async () => {

// //         //await $$('.s-product-image-container')[0] // 19 nodes
// //         await $('.s-product-image-container').click()
// //         //add closing bracket
        
// //        const devicePrice =  await $('#data-cy="price-recipe"[class="a-price-symbol"]').getText();

// //       const addToCartButton = await $('#buybox.addToCart[id=add-to-cart-button]');
// //       await addToCartButton.click();

// //     });

// //  a-price-whole

// it('Add to Cart', async () => {
//     await $('.s-product-image-container').click();
//     //'#data-cy="price-recipe"[class="a-price-symbol"]'
//     //span[class="a-price-whole"]
//     devicePrice = await $('.a-section.a-spacing-none.a-spacing-top-micro.s-price-instructions-style ').getText();
//       //'#corePrice_desktop span[aria-hidden="true"]'
//     await $('#add-to-cart-button').click();
//     await expect($('#NATC_SMART_WAGON_CONF_MSG_SUCCESS span'))
//       .toHaveText('Added to Cart');

//     const subtotal = await browser.execute(() => {
//       return document.querySelector('#sw-subtotal span[class="a-offscreen"]').textContent
//     })
//     await expect(subtotal).toEqual(devicePrice);
//   });

// });

 