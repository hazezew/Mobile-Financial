#  Author: Habitamu Azezew
#  Date: Mar 08, 2024
#  Project name: Mobile Financial Platform
#  Module: Login
#  Activity: Forgot Password
#  Project owner: Kidest and Lidya
#  Software Development lead: Tamirat Solomon
#  language: en
#  Environment: Test AWS

@Regression
@ForgotPassword
Feature: Forgot Password
  Background: user opened web browser and maximizes it
    When user has entered Mobile Financial Platform system URL

  Scenario: Forgot Password with valid email
    When user clicks on Forgot Password link
    Then system opens Forgot Password page
    And Forgot Password page user enters "abdabr301@gmail.com" into username field
    And on Forgot Password page user clicks on verify button
    Then Forgot Password page displays "A Code is sent to your Email / Phone" message

  Scenario: Forgot Password with an invalid email username value
    When user clicks on Forgot Password link
    Then system opens Forgot Password page
    And Forgot Password page user enters "1abdabr301@gmail.com" into username field
    And on Forgot Password page user clicks on verify button
    Then Forgot Password page displays "Sorry! Username does not exist. Please try again" message

  Scenario: Forgot Password with an invalid email format
    When user clicks on Forgot Password link
    Then system opens Forgot Password page
    And Forgot Password page user enters "abdabr301@gmail" into username field
    And on Forgot Password page user clicks on verify button
    Then Forgot Password page displays "Invalid Email address" validation message

  Scenario: Forgot Password with an empty email
    When user clicks on Forgot Password link
    Then system opens Forgot Password page
    And on Forgot Password page user clicks on verify button
    Then Forgot Password page displays "Email address is required" validation message