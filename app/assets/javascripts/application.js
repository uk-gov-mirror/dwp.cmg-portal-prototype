/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info("GOV.UK Prototype Kit - do not use for production");
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();
});

const caseData = {
  all: {
    case: "allCases",
    messages: {
      msg0: ["We need to check some information with you", "01/02/2021"],
      msg1: ["Your child maintenance payments will not change", "15/01/2021"],
      msg2: ["We've worked out your child maintenance payments", "31/12/2020"],
    },
    changes: {
      chng0: ["Change phone number", "blue", "received"],
      chng1: ["Change address", "blue", "received"],
      chng2: ["Change to Direct Pay or Collect and Pay", "yellow", "in progress"],
    },
  },
  janet: {
    case: "janet",
    messages: {
      msg0: ["We need to check some information with you", "01/02/2021"],
      msg1: ["We haven't received a child maintenance payment", "28/12/2020"],
      msg2: ["A variation has been reported", "19/12/2020"],
    },
    changes: {
      chng0: ["Update shared care", "yellow", "in progress"],
      chng1: ["Update income", "yellow", "in progress"],
      chng2: ["Special expenses", "green", "completed"],
    },
  },
  clive: {
    case: "clive",
    messages: {
      msg0: ["Your child maintenance payments will not change", "15/01/2021"],
      msg1: ["We have received a new report", "11/11/2020"],
      msg2: ["We have been updated of special expenses", "10/11/2020"],
    },
    changes: {
      chng0: ["Change to Direct Pay or Collect and Pay", "yellow", "in progress"],
      chng1: ["Update shared care", "green", "Accepted"],
      chng2: ["Update shared care", "green", "Accepted"],
    },
  },
  frankie: {
    case: "frankie",
    messages: {
      msg0: ["We've worked out your child maintenance payments", "31/12/2020"],
      msg1: ["We've received your voluntary payment", "01/09/2020"],
      msg2: ["We've received your voluntary payment", "13/08/2020"],
    },
    changes: {
      chng0: ["Update income", "yellow", "in progress"],
      chng1: ["Child still in education", "green", "Accepted"],
      chng2: ["Update shared care", "green","Accepted"],
    },
  },
};

let message0 = $("#message0")[0]
let message1 = $("#message1")[0]
let message2 = $("#message2")[0]
let date0 = $("#date0")[0]
let date1 = $("#date1")[0]
let date2 = $("#date2")[0]
let change0 = $("#change0")[0]
let change1 = $("#change1")[0]
let change2 = $("#change2")[0]
let tag0 = $("#tag0")[0]
let tag1 = $("#tag1")[0]
let tag2 = $("#tag2")[0]


const changeData = caseName => {
  let newData = caseData[caseName]
  // console.log(newData)
  message0.innerText = newData.messages.msg0[0]
  message1.innerText = newData.messages.msg1[0]
  message2.innerText = newData.messages.msg2[0]
  date0.innerText = newData.messages.msg0[1]
  date1.innerText = newData.messages.msg1[1]
  date2.innerText = newData.messages.msg2[1]
  change0.innerText = newData.changes.chng0[0]
  change1.innerText = newData.changes.chng1[0]
  change2.innerText = newData.changes.chng2[0]
  tag0.classList.remove(...tag0.classList)
  tag1.classList.remove(...tag1.classList)
  tag2.classList.remove(...tag2.classList)
  tag0.classList.add("govuk-tag", `govuk-tag--${newData.changes.chng0[1]}`)
  tag1.classList.add("govuk-tag", `govuk-tag--${newData.changes.chng1[1]}`)
  tag2.classList.add("govuk-tag", `govuk-tag--${newData.changes.chng2[1]}`)
  tag0.innerText = newData.changes.chng0[2]
  tag1.innerText = newData.changes.chng1[2]
  tag2.innerText = newData.changes.chng2[2]
}

const showCase = (e) => {
  console.log(e.target.value)
  switch (e.target.value) {
    case "janet":
      $("#janet").show();
      $("#clive").hide();
      $("#frankie").hide();
      changeData(e.target.value)
      break;
    case "clive":
      $("#clive").show();
      $("#janet").hide();
      $("#frankie").hide();
      changeData(e.target.value)
      break;
    case "frankie":
      $("#frankie").show();
      $("#clive").hide();
      $("#janet").hide();
      changeData(e.target.value)
      break;
    default:
      $("#clive").show();
      $("#janet").show();
      $("#frankie").show();
      changeData("all")
      break;
  }
};

const showCalcs = (e) => {
  console.log(e.target.value)
  switch (e.target.value) {
    case "janet":
      $("#janet").show();
      $("#frankie").hide();
      $("#all-cases").hide();
      break;
    case "frankie":
      $("#frankie").show();
      $("#janet").hide();
      $("#all-cases").hide();
      break;
    default:
      $("#all-cases").show();
      $("#frankie").hide();
      $("#janet").hide();
      break;
  }
};

const showPayments = (e) => {
  console.log(e.target.value)
  switch (e.target.value) {
    case "case1":
      $("#case1").show();
      $("#case2").hide();
      $("#all-cases").hide();
      break;
    case "case2":
      $("#case2").show();
      $("#case1").hide();
      $("#all-cases").hide();
      break;
    default:
      $("#all-cases").show();
      $("#case1").hide();
      $("#case2").hide();
      break;
  }
};

const sorter = $("#sort")[0];
const calcSorter = $("#calcs-sort")[0]
const paySorter = $("#payment-sort")[0]

try {
  sorter.addEventListener("change", showCase);
}
catch(err) {
}

try {
  calcSorter.addEventListener("change", showCalcs);
}
catch(err) {
}

try {
  paySorter.addEventListener("change", showPayments);
}
catch(err) {
}

