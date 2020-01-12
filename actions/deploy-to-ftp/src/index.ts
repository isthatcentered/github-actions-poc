import log from "@isthatcentered/log";
import * as core from "@actions/core";

try {
  // Inputs defined in ../action.yml metadata file
  const username = core.getInput("username"),
    password = core.getInput("password"),
    port = core.getInput("port"),
    dist = core.getInput("dist"),
    to = core.getInput("to");

  log("Deploying to ftp")({ port, dist, to });
} catch (error) {
  core.setFailed(error.message);
}
