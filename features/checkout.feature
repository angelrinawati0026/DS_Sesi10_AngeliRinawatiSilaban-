@saucedemo @checkout
Feature: Swag Labs - Checkout

  @fillinformation
  Scenario: As a user i want checkout product in the cart
    Given Angel is on the login page
    When Angel login with "standard_user" credential
    Then Angel should see home page
    When Angel click button Add to cart at sauce-labs-bike-light
    Then Angel should get sauce-labs-bike-light already add to cart
    When Angel click icon cart
    Then Angel should navigate to cart page
    Then Angel click button checkout
    Then Angel fill data information with identity "Angeli"
