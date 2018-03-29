const inquirer = require('inquirer');

module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = [
      {
        type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "Get date and time",
          "Exit"
        ]
      }
    ];
    this.contacts = [];
  }

  main(){
    console.log(`Welcome to AddressCroc!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice){
        case "Add new contact":
          this.addContact();
          break;
        case "Exit":
          this.exit();
        case "Get date and time":
          this.getDate();
          break;
        default:
          console.log("Invalid input");
          this.main();
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  clear(){
    console.log("\x1Bc");
  }

  addContact(){
    this.clear();
    console.log('addContact called');
    this.main();
  }

  getDate(){
    var date = new Date();
    this.clear();
    console.log(date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes());
    this.main();
  }

  getContactCount(){
    return this.contacts.length;
  }

  remindMe(){
    return "Learning is a life-long pursuit";
  }

  exit(){
    console.log('Thanks for using AddressCroc');
    process.exit();
  }

}
