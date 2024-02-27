const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage= require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');

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
    await HomePage.detailProduk(nameProduct)
});