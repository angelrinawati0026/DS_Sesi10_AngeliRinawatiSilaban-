@saucedemo @detailproduct
Feature: Swag Labs - DetailProduct

  @detailfromhome
  Scenario: As a user i want get detail product "Sauce Labs Backpack" page which shows product names,image,description,price properly
    Given Angel is on the login page
    When Angel login with "standard_user" credential
    Then Angel should see home page
    When Angel click product "Sauce Labs Backpack" should get detail product properly