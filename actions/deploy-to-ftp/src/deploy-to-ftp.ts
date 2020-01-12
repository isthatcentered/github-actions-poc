import FtpDeploy from "ftp-deploy";

const deployToFtp = (folder: string) => (config: {
  into: string;
  host: string;
  port: number | string;
  user: string;
  password: string;
}) => {
  const ftpDeploy = new FtpDeploy();

  return ftpDeploy.deploy({
    user: config.user,
    // Password optional, prompted if none given
    password: config.password,
    host: config.host,
    port: config.port,
    localRoot: folder,
    // Where the files should be placed
    remoteRoot: config.into,
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["**/*", "*"],
    // exclude: [
    //   "dist/**/*.map",
    //   "node_modules/**",
    //   "node_modules/**/.*",
    //   ".git/**"
    // ],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true
  });
};
export default deployToFtp;
