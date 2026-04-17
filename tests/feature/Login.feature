Feature: Login

Scenario: Login with valid credentials.
Given the user is on homepage
When the user enter valid credentials
And the user click on signin button
Then the user should see Homepage

Scenario: Login with invalid credentials.
  Given the user is on homepage
  When the user enter invalid credentials
  And the user click on signin button
  Then the user should see error message