describe('Contact', () => {

    
    //  1. Fill all input fields, submit form, and assert success message
    it('Fill all input fields, submit form, and assert success message', async () => {
        await browser.url('/contact');

        //  Fill out input fields and click submit
        await $('.contact-name input').setValue('Test Name');
        await $('.contact-email input').setValue('testEmail@gmail.com');
        await $('.contact-phone input').setValue('888-888-8888');
        await $('.contact-message textarea').setValue('This is a test message');
        await $('button[type=submit]').click();
        
        //  Assert success message
        const successAlert = $("[role='alert']");
        expect(successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    });


});