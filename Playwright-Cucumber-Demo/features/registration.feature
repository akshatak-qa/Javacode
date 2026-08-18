Feature: User Registration functionality

  Scenario: Successful registration with valid details
    Given I open the registration page
    When I enter firstname "John"
    And I enter lastname "Doe"
    And I enter email "john.doe@example.com"
    And I enter password "SecurePass123!"
    And I confirm password "SecurePass123!"
    And I accept the terms and conditions
    And I click on the Register button
    Then I should see the confirmation message "Registration successful"
    And I should be redirected to the login page

  Scenario: Registration with missing required fields
    Given I open the registration page
    When I leave firstname empty
    And I enter lastname "Doe"
    And I enter email "john.doe@example.com"
    And I enter password "SecurePass123!"
    And I confirm password "SecurePass123!"
    And I click on the Register button
    Then I should see an error message "Firstname is required"

  Scenario: Registration with mismatched passwords
    Given I open the registration page
    When I enter firstname "John"
    And I enter lastname "Doe"
    And I enter email "john.doe@example.com"
    And I enter password "SecurePass123!"
    And I confirm password "DifferentPass123!"
    And I click on the Register button
    Then I should see an error message "Passwords do not match"

  Scenario: Registration with invalid email format
    Given I open the registration page
    When I enter firstname "John"
    And I enter lastname "Doe"
    And I enter email "invalid-email"
    And I enter password "SecurePass123!"
    And I confirm password "SecurePass123!"
    And I click on the Register button
    Then I should see an error message "Please enter a valid email address"

  Scenario: Registration with already existing email
    Given I open the registration page
    When I enter firstname "Jane"
    And I enter lastname "Smith"
    And I enter email "john.doe@example.com"
    And I enter password "SecurePass123!"
    And I confirm password "SecurePass123!"
    And I click on the Register button
    Then I should see an error message "Email already registered"

  Scenario: Registration without accepting terms and conditions
    Given I open the registration page
    When I enter firstname "John"
    And I enter lastname "Doe"
    And I enter email "john.doe@example.com"
    And I enter password "SecurePass123!"
    And I confirm password "SecurePass123!"
    And I do not accept the terms and conditions
    And I click on the Register button
    Then I should see an error message "You must accept the terms and conditions"
