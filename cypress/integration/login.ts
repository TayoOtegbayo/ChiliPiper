///<reference types = "Cypress"/>
import { it } from "mocha";
import loginObj, { clickLoginBtn } from "../PageObj/loginObj.js";

describe("Gmail login", function () {
  it("Verify that a user can successfully log in programmatically", () => {
    //This test is important as it allows a user to login into the app before performing other actions
    cy.visit("https://accounts.google.com");
    loginObj.typeuserEmail("topexcellenttesting@gmail.com");
    loginObj.clickNextBtn();
    loginObj.typeUserPassword("xxxxxxx");
    loginObj.clickLoginBtn();
  });

  it("Verify that user can send a scheduled mail to his/her clients", function () {
    //This test case is important because our users should be able to send a mail to their clients at a scheduled time
    //this will mitigate against forgetting to send importants mail as at when due
  });

  it("Verify that user can use label to sort/filter email", function () {
    //This test case is key to the gmail functionality because our users would be able to sort message
    //based on a particular label so as not to mistake an important message as a common one
  });

  it("Verify that user can use schedule a meeting with gmail calendar", function () {
    //This test case is used to schedule important meetings with the clients so reminder about the meeting
    //can be automatically sent
  });

  it("Verify that user can create a gmail account", function () {
    //This test case helps a user to sign up for the services of gmail, through which other services can be
    //automatically enjoyed
  });
});
