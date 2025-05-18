export default class PasswordResetPage {
  constructor(page) {
    
    this.page = page;

    this.txtEmail = page.locator('input').first();              
    this.submitBtn = page.locator('[type="submit"]');           
    this.txtInput = page.locator('input');                     
    this.btnReset = page.locator('button').first();             
  }

  async doResetPass(email) {
    await this.txtEmail.fill(email);
    await this.submitBtn.click();
  }

  async doChangeAndConfirmPass(newPass, confirmPass) {
    await this.txtInput.nth(0).fill(newPass);    
    await this.txtInput.nth(1).fill(confirmPass); 
    await this.page.waitForTimeout(1500);         
    await this.btnReset.click();
  }
}
