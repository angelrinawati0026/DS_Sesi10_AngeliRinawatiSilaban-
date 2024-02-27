const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class HomePage extends Page {
    get iconCart () { return $('.shopping_cart_link'); }
    get iconFilterNull() { return $('.product_sort_container'); }
    get pageFilter() { return $('#inventory_container.inventory_container'); }
    get productName () { return $('.inventory_item_name'); }
    productItem = (nameProduct) => $(`//div[text()="${nameProduct}"]`)

    async validateHomePage() {
        await expect(browser).toHaveUrlContaining('/inventory.html')
        await expect(this.iconCart).toBeDisplayed()
    }

    async clicksortingfilter () {
        await this.iconFilterNull.click();
    }

    async sortingfilter (filter) {
        (await this.iconFilterNull).selectByVisibleText(filter);
    }

    async validateSortingFilter () {
        await this.pageFilter.waitForDisplayed();
    }

    async detailProduk(nameProduct) {
        await this.iconCart.waitForDisplayed();
        await this.productItem(nameProduct).click()
        await browser.pause(2000)
        await browser.url(`/inventory-item.html?id=${await this.productItem(nameProduct).getAttribute('id')}`);
        await browser.pause(3000)
    }
    
    open () {
        return super.open('/inventory.html');
    }
}

module.exports = new HomePage();
