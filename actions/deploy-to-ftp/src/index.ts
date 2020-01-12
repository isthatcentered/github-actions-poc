import * as core from "@actions/core";
import deployToFtp from "@isthatcentered/deploy-to-ftp";
import log from "@isthatcentered/log";

const run = async (): Promise<void> => {
  try {
    // Inputs defined in ../action.yml metadata file
    const config = {
      user: core.getInput("user"),
      password: core.getInput("password"),
      port: core.getInput("port"),
      host: core.getInput("host"),
      path: core.getInput("path"),
      into: core.getInput("into"),
      cleanupExisting: false
    };

    core.info(`Deploying ${config.path} to ${config.host}/${config.into}`);

    log("cleanupExisting")(typeof core.getInput("cleanupExisting"));

    await deployToFtp(config.path)(config);

    core.info(`Deploy to ftp successful`);
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();
