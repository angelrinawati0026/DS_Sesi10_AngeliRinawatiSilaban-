const { $ } = require('@wdio/globals')
const Page = require('./page');

class DetailPage extends Page {
    get iconBack () { return $('#back-to-products'); }
    productItem = (nameProduct) => $(`//div[text()="${nameProduct}"]`)
    get iconCart () { return $('.shopping_cart_link'); }
    
    // async validateDetailPage() {
    //     expect(browser).toHaveUrlContaining('/inventory-item.html?id=4')
    //     expect(this.iconBack).toBeDisplayed()  
    // }

    async detailProduk(nameProduct) {
        await this.iconCart.waitForDisplayed();
        await this.productItem(nameProduct).click()
        expect(browser).toHaveUrlContaining('/inventory-item.html?id=4')
        
    }

    async buttonBack() {
        await this.iconBack.click();
    }

    open () {
        return super.open('/inventory-item.html?id=1'); //karna url nya sama kalo di halaman login dengan base url
    }
}

module.exports = new DetailPage();
