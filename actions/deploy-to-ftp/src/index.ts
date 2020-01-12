import * as core from "@actions/core";
import deployToFtp from "@isthatcentered/deploy-to-ftp";

const castBooleanString = (boolean: string) => /true/i.test(boolean);

const run = async (): Promise<void> => {
  try {
    // Inputs defined in ../action.yml metadata file
    const config = {
      user: core.getInput("user", { required: true }),
      password: core.getInput("password", { required: true }),
      port: core.getInput("port"),
      host: core.getInput("host", { required: true }),
      path: core.getInput("path", { required: true }),
      into: core.getInput("into", { required: true }),
      cleanupExisting: castBooleanString(core.getInput("cleanupExisting"))
    };

    core.info(`Deploying ${config.path} to ${config.host}/${config.into}`);

    await deployToFtp(config.path)(config);

    core.info(`Deploy to ftp successful`);
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();
