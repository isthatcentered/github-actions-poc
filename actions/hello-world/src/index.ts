import log from "@isthatcentered/log";

import * as core from "@actions/core";
import * as github from "@actions/github";

try {
  // `person` input defined in action metadata file
  const nameToGreet = core.getInput("person");
  console.log(`Hello ${nameToGreet}!`);
  const time = new Date().toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  log(`Event payload`)(payload);
  log("Github Context")(github.context);
} catch (error) {
  core.setFailed(error.message);
}
