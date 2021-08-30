module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,

      builderOptions: {
        appId: "com.alariclg.app",
        target: "NSIS",
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true,
          installerIcon: "./src/icon.ico",
          uninstallerIcon: "./src/icon.ico",
        },
      },
    },
  },
};
