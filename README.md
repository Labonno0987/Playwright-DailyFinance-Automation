# Automated UI Testing with Playwright and JavaScript
---
##  Description
This project demonstrates UI automation for the [Daily Finance](https://dailyfinance.roadtocareer.net/) web application using Playwright and JavaScript, following the Page Object Model (POM) design pattern.The automation covers user journey — from registration to password reset — along with validations using both UI assertions and mail verification techniques. The test scenarios were designed to mimic real-life user interactions, ensuring both functionality and reliability of the platform. The project is also integrated with Allure Reporting for detailed test execution insights.

The test cases include **positive and negative** scenarios for:

- User Registration and Authentication
- Login  
- Adding and Managing Items
- Profile Update
- Password Reset

---
 ## Technology Stack

| Tool/Library           | Purpose                      |
|------------------------|------------------------------|
| JavaScript             | Programming Language         |
| Node.js                | Runtime Environment          |
| Playwright             | UI Automation Tool           |
| VS Code                | IDE                          |
| Allure Report          | Test Reporting               |
| Faker.js               | Test Data Generation         |
| Gmail API              | OTP Retrieval (if applicable)|
---
## How to Run the Project

- Install Node.js and VS Code
- Clone the repository
      - ```git clone https://github.com/Labonno0987/Playwright-DailyFinance-Automation```
- Import the project into VS Code and ensure all dependencies
- Run ```npm install``` to install required packages
- Run tests:
     - ```npx playwright test``` or use VS Code Run
- Generate Allure report:
     - ```allure generate allure-results --clean -o allure-report```
     - ```allure open allure-report```

 ## Test Case Link
   - [Click here for Positive & Negative Test cases](https://docs.google.com/spreadsheets/d/1S3ZMvQnXH-0cfEFfN8qg_csBsF0gup9f/edit?usp=drive_link&ouid=106851050293382559720&rtpof=true&sd=true)

## Record of Full Automation 

  - [Click here to see Automation Record](https://drive.google.com/file/d/1hGfO1f2XRuf5cETt0jFe0r6KE55MDE-U/view?usp=drive_link)

## Allure Report 
   
- **Report of Allure Overview:**

  <img width="744" alt="task-1" src="https://github.com/user-attachments/assets/b8983d0a-eb99-43d3-9390-8868286bc7bc" />

- **Report of Allure Behavior:**

  <img width="744" alt="task-1" src="https://github.com/user-attachments/assets/051166a8-69c6-41f1-b21b-fdfba98574c9" />
