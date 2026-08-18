Feature: Login functionality

  Scenario: Successful login
    Given I open the login page
    When I enter username "standard_user"
    And I enter password "secret_sauce"
    And\ I click on the Login button
    Then I should see the Products page

    