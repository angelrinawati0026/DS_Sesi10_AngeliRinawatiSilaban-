@saucedemo @sortfilter
Feature: Swag Labs - SortFilter

  @sorthighlow
  Scenario: As a user i want get homepage show all product that have been sorted from highest to lowlest price
    Given Angel is on the login page
    When Angel login with "standard_user" credential
    Then Angel should see home page
    When Angel click "Price (high to low)"
    Then Angel should get home page show all product that have been sorted

  @sortlowhigh
  Scenario: As a user i want get homepage show all product that have been sorted from lowlest to highest price
    When Angel click button filter and sort
    When Angel click "Price (low to high)"
    Then Angel should get home page show all product that have been sorted

  @sortza
  Scenario: As a user i want get homepage show all product that have been sorted from Z to A
    When Angel click button filter and sort
    When Angel click "Name (Z to A)"
    Then Angel should get home page show all product that have been sorted

  @sortaz
  Scenario: As a user i want get homepage show all product that have been sorted A to Z
    When Angel click button filter and sort
    When Angel click "Name (A to Z)"
    Then Angel should get home page show all product that have been sorted