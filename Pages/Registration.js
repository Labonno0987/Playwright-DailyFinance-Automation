class RegistrationPage{

    constructor(page){
        this.page=page;

        this.regLink=page.getByRole("link",{name:"Register"} );

        this.fname=page.getByLabel("First Name");
        this.lname=page.getByLabel("Last Name");
        this.email=page.getByLabel("Email");
        this.pass=page.getByLabel("Password");
        this.phnNo=page.getByLabel("Phone Number");
        this.address=page.getByLabel("Address");
        this.gender=page.getByRole("radio");
        this.terms=page.getByRole("checkbox");
        this.btn = page.getByRole("button", { name: "REGISTER" });
     
    }
    async registration(userModel){

     await this.regLink.click();
     await this.fname.fill(userModel.fName);
     await this.lname.fill(userModel.lName);
     await this.email.fill(userModel.email);
     await this.pass.fill(userModel.password);
     await this.phnNo.fill(userModel.phnNo);
     await this.address.fill(userModel.address);
     await this.gender.last().click();
     await this.terms.click();
     await this.btn.click();
    }
    async registrationInvalidMail(invalidUserModel){

     await this.regLink.click();
     await this.fname.fill(invalidUserModel.fName);
     await this.lname.fill(invalidUserModel.lName);
     await this.email.fill(invalidUserModel.email);
     await this.pass.fill(invalidUserModel.password);
     await this.phnNo.fill(invalidUserModel.phnNo);
     await this.address.fill(invalidUserModel.address);
     await this.gender.last().click();
     await this.terms.click();
     await this.btn.click();
    }
}
export default RegistrationPage;