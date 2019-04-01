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
  var question4 = document.questions.question4.value;

  //triggers for requirements

  var personalData = 0;
  var sensitiveData = 0;
  var internetConnected = 0;
  var webService = 0;
  var cdkHosted = 0;
  var awsHosted = 0;

  if (question2 == "personal") {
    personalData++;
  }
  if (question2 == "personalSensitive") {
    sensitiveData++;
  }
  if (question3 == "cdkHosted") {
    cdkHosted++;
  }
  if (question3 == "awsHosted") {
    awsHosted++;
  }
  if (question4 == "outbound") {
    internetConnected++;
  }
  if (question4 == "inboundWebservice") {
    webService++;
  }

  // now appLogic must be like --  if (PersonalData >= 1) {render this stuff}
  // need to replicate this process for all questions and requirements

  document.getElementById("after_submit").style.visibility = "visible";
  document.getElementById("resetButton").style.visibility = "visible";

  if (personalData > 0) {
    document.getElementById("req_personalData").style.visibility = "visible";
  }
  if (sensitiveData > 0) {
    document.getElementById("req_personalDataSensitive").style.visibility = "visible";
  }
  if (cdkHosted > 0) {
    document.getElementById("req_cdkHosted").style.visibility = "visible";
  }
  if (awsHosted > 0) {
    document.getElementById("req_awsHosted").style.visibility = "visible";
  }

  if (webService > 0) {
    console.log("webService Req triggered");
    document.getElementById("req_webService").style.visibility = "visible";
  }
}

function clearPage() {
  var x = document.getElementById("myReset").value;
  document.getElementById("results").innerHTML = x;
}