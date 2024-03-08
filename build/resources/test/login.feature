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
    When user enters username "habitamu"
    And user enters password "habitamu"
    And user clicks on Login button
    Then system displays landing page
    And user clicks on logout button
    Then user is logged out of the system