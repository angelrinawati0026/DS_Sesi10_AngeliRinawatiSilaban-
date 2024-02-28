@saucedemo @cart
Feature: Swag Labs - Checkout

  @checkoutpage
  Scenario: As a user i want see all product in the cart
    Given Angel is on the login page
    When Angel login with "standard_user" credential
    Then Angel should see home page
    When Angel click button Add to cart at sauce-labs-bike-light
    Then Angel should get sauce-labs-bike-light already add to cart
    When Angel click icon cart
    Then Angel should navigate to cart page

  @removeproduct
  Scenario: As a user i want remove product that have been added before
    When Angel click icon remove
    Then Angel should get Sauce Labs Bike Light remove from cart

  @addmoreproduct
  Scenario: As a user i want to add more product to cart
    When Angel click continue shopping
    Then Angel should see home page
    When Angel click button Add to cart at sauce-labs-bike-light
    Then Angel should get sauce-labs-bike-light already add to cart
    When Angel click icon cart
    Then Angel should navigate to cart page
