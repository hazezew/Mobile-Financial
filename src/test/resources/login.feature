#  Author: Habitamu Azezew
#  Date: Mar 08, 2024
#  Project name: Mobile Financial Platform
#  Module: Login
#  Activity: User Login
#  Project owner: Kidest and Lidya
#  Software Development lead: Tamirat Solomon
#  language: en
#  Environment: Test AWS

@Regression
@Login
Feature: User Login
  Background: user opened web browser and maximizes it
    When user has entered Mobile Financial Platform system URL

  Scenario: Login using valid username and valid password
    When user enters username "abdabr301@gmail.com"
    And user enters password "A_12345678"
    And user clicks on Login button
    Then Login page displays message "successfully login"
    And system displays landing page
    And user clicks on logout button
    Then user is logged out of the system

  Scenario: Login using valid username but invalid password
    When user enters username "abdabr301@gmail.com"
    And user enters password "1A_123456781"
    And user clicks on Login button
    Then Login page displays message "Login failed"

  Scenario: Login using invalid username but valid password
    When user enters username "1abdabr301@gmail.com"
    And user enters password "A_12345678"
    And user clicks on Login button
    Then Login page displays message "Login failed"

  Scenario: Login using empty username but password
    And user enters password "1A_123456781"
    And user clicks on Login button
    Then Login page displays "Email address is required" username validation message

  Scenario: Login using valid username but empty password
    When user enters username "abdabr301@gmail.com"
    And user clicks on Login button
    Then Login page displays "Password is required" password validation message