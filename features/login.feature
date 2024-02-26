@saucedemo @login
Feature: Swag Labs - Login
  Background: User on the login page
    Given Angel is on the login page

  @positive
  Scenario: As a standard_user, I want to log in successfully
    When Angel login with "standard_user" credential
    Then Angel should see home page

  @negative
  Scenario: As a locked_out_user, I should get error message
    When Angel login with "locked_out_user" credential
    Then Angel should see error "Epic sadface: Sorry, this user has been locked out."

  @negativeinvalidpass
  Scenario: As a problem_user, I should get error message
    When Angel login with "problem_user" with invalid password
    Then Angel should see error "Epic sadface: Username and password do not match any user in this service"

 @negativeemptydata
  Scenario: As a "", I should get error message
    When Angel login with "" with empty password
    Then Angel should see error "Epic sadface: Username is required"

 