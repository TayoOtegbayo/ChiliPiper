class loginObj {
  elements = {
    userEmail: () => cy.get("#email"),
    userPassword: () => cy.get("#password"),
    NextBtn: () => cy.get(".btn"),
    loginBtn: () => cy.get(".btn"),
  };

  typeUserEmail(email) {
    this.elements.userEmail().type(email);
  }

  typeUserPassword(password) {
    this.elements.userPassword().type(password);
  }

  clickNextBtn() {
    this.elements.NextBtn().click();
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }
}

module.exports = new loginObj();
