// function check() {
//   alert("You did it!");
// }

// we want to use Document.getElementById  to render either next questions or end of test
// so this in practicality changes the divs in style.css from hidden to displayed

function check() {
  //question results

  var question1 = document.questions.question1.value;
  var question2 = document.questions.question2.value;
  var question3 = document.questions.question3.value;

  //triggers for requirements

  var personalData = 0;
  var sensitiveData = 0;
  var internetConnected = 0;
  var webService = 0;

  if (question2 == "personal") {
    personalData++;
  }
  if (question2 == "personalSensitive") {
    sensitiveData++;
  }
  if (question3 == "outbound") {
    internetConnected++;
  }
  if (question3 == "inboundWebservice") {
    webService++;
  }

  // now appLogic must be like --  if (PersonalData >= 1) {render this stuff}
  // need to replicate this process for all questions and requirements

  document.getElementById("after_submit").style.visibility = "visible";

  if (personalData > 0) {
    document.getElementById("req_personalData").style.visibility = "visible";
  }
  if (webService > 0) {
    console.log("webService Req triggered");
    document.getElementById("req_webService").style.visibility = "visible";
  }
}
