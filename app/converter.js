import { generateTerraformCode } from "./monitor-converter.js";
import { generateDashboardTerraformCode } from "./dashboard-converter.js";

function onClick() {
  var resourceName = "converted_dashboard";
  var datadogJson = document.getElementById("datadogJson").value;

  try {
    if (!resourceName) throw "No resource name given";
    if (!datadogJson) throw "No Datadog JSON given";

    var terraformCode;
    let parsedJson = JSON.parse(datadogJson);
    if (parsedJson.hasOwnProperty("name")) {
      terraformCode = generateTerraformCode(resourceName, parsedJson);
    } else {
      terraformCode = generateDashboardTerraformCode(resourceName, parsedJson);
    }

    addDomElementsForResult(terraformCode);
    copyResultToClipboard();
    updateStatusMessage("Copied to clipboard!", false);
  } catch (e) {
    updateStatusMessage(e, true);
  }
}

function addDomElementsForResult(terraformAlarmCode) {
  var resultTextArea = document.createElement("textarea");
  resultTextArea.id = "result";
  resultTextArea.textContent = terraformAlarmCode;

  var convertedCodeTextarea = document.getElementById("convertedCode");
  convertedCodeTextarea.value = terraformAlarmCode;
}

function copyResultToClipboard() {
  var copyText = document.getElementById("convertedCode");
  copyText.select();
  document.execCommand("copy");
}

function updateStatusMessage(message, isError) {
  var newMessageText = isError ? "❗️" + message : "🎉" + message;
  var statusMessageElement = document.getElementById("statusMessage");
  statusMessageElement.textContent = newMessageText;
  statusMessageElement.style.opacity = "1";
  // document.getElementById("convertButton").style.marginBottom = "0";
  if (isError) {
    statusMessageElement.style.color = "red";
  }
}

document.getElementById("convertButton").addEventListener("click", onClick);
