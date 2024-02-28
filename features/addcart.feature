@saucedemo @addtocart
Feature: Swag Labs - Addtocart

  @addcartfromhome
  Scenario: As a user i want product already add to cart
    Given Angel is on the login page
    When Angel login with "standard_user" credential
    Then Angel should see home page
    When Angel click button Add to cart at sauce-labs-bike-light
    Then Angel should get sauce-labs-bike-light already add to cart

  @addcartfromdetail
  Scenario: As a user i want product already add to cart
    Then Angel should see home page
    When Angel click product "Sauce Labs Backpack" should get detail product properly
    When Angel click button Add to cart at sauce Labs Backpack
    Then Angel should get auce Labs Backpack already add to cart