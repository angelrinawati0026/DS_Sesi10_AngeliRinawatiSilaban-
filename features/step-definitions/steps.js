const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage= require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');
const DetailPage = require('../pageobjects/detail.page.js');
const AddCartPage = require('../pageobjects/addcart.page.js');
const CartPage = require('../pageobjects/cart.page')
const CheckoutPage = require('../pageobjects/checkout.page')

Given(/^Angel is on the login page$/ , async () => {
    await LoginPage.open()
});

When(/^Angel login with "(.*)" credential$/ , async (username) => {
    await LoginPage.login(username)
});

Then(/^Angel should see home page$/, async () => {
    await HomePage.validateHomePage()
});

Given(/^Angel is on the home page$/, async () => {
    await HomePage.open()
});

Then(/^Angel should see error "(.*)"$/, async (message) => {
    await LoginPage.validateLockedOutUserError(message)
});

When(/^Angel login with "(.*)" with invalid password$/ , async (username) => {
    await LoginPage.loginInvalidPass(username)
});

When(/^Angel login with "(.*)" with empty password$/ , async (username) => {
    await LoginPage.loginEmptyData(username)
});

//sortandfiler
When(/^Angel click button filter and sort$/ , async () => {
    await HomePage.clicksortingfilter()
});

When(/^Angel click "(.*)"$/ , async (filter) => {
    await HomePage.sortingfilter(filter)
});

Then(/^Angel should get home page show all product that have been sorted$/, async () => {
    await HomePage.validateSortingFilter()
});

//detail product
When(/^Angel click product "(.*)" should get detail product properly$/ , async (nameProduct) => {
    await DetailPage.detailProduk(nameProduct)
});
When(/^Angel click button back to home$/, async () => {
    await DetailPage.buttonBack()
});

//add to cart
When(/^Angel click button Add to cart at sauce-labs-bike-light$/, async () => {
    await AddCartPage.addToCartFromHome()
});

Then(/^Angel should get sauce-labs-bike-light already add to cart$/, async () => {
    await AddCartPage.successAddToCartHome()
});

When(/^Angel click button Add to cart at sauce Labs Backpack$/, async () => {
    await AddCartPage.addToCartFromDetail()
});

Then(/^Angel should get auce Labs Backpack already add to cart$/, async () => {
    await AddCartPage.successAddToCartDetail()
});

//cart page
When(/^Angel click icon cart$/, async () => {
    await CartPage.cartPageFromHome()
});

Then(/^Angel should navigate to cart page$/, async () => {
    await CartPage.open()
});

When(/^Angel click icon remove$/, async () => {
    await CartPage.removecartPage()
});

Then(/^Angel should get Sauce Labs Bike Light remove from cart$/, async () => {
    await CartPage.open()
});

When(/^Angel click continue shopping$/, async () => {
    await CartPage.addProductToCart()
});

//checkout
Then(/^Angel click button checkout$/, async () => {
    await CheckoutPage.checkoutStepOne()
    await CheckoutPage.open()
});

Then(/^Angel fill data information with identity "(.*)"$/ , async (firstname) => {
    await CheckoutPage.fillDataInformation(firstname)
});