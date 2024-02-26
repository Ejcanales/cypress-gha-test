# QA Automation Technical task

The primary objective of this assignment is to assess your front-end automation skills and your
ability to learn and implement automation in web development projects.

## Installation
Install Cypress via npm

```bash
npm install 
```

## Usage

```bash
//Open cypress
npx cypress open

//Run the script
npx cypress run --spec .\cypress\e2e\Telus\SeachForInternetService.cy.js

```

## Test Cases
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Ejcanales/cypress-gha-test/actions.yml?logo=githubactions)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Ejcanales/cypress-gha-test/cron.yml?logo=githubactions&label=Nightly%20build)

```
Telus.com search bar
TC01: Search bar functionality
Steps:
1.On a browser go to “telus.com” 
2.Click the search button on the navbar
3.Enter the following word “Internet”

Expected results:
The search bar should display a menu with the results related to “Internet”

TC02: Verify search text match with search page heading
Steps:
1.On a browser go to “telus.com” 
2.Click the search button on the navbar
3.Enter the following word “Internet”
4.Click the third option (Internet speed test)

Expected results:
The heading of the search page should contain the text on the search field

TC03: Verify the content of the Article section
Steps:
1.On a browser go to “telus.com” 
2.Click the search button on the navbar
3.Enter the following word “Internet”
4.Click the third option (Internet speed test)
5.Scroll to the “Article” section

Expected results:
The Article sections should have a minimum of 6 results with clickable links

```
