// @ts-check
const vscode = require("vscode");

// @ts-ignore
const DEBUG = Boolean(process.env.DEBUG);

/**
 * @param {unknown[]} args
 */
function log(...args) {
  if (DEBUG) {
    console.log(...args);
  }
}

module.exports = {
  /**
   * @param {vscode.ExtensionContext} context
   */
  activate(context) {
    log("[quick-open-handler]: activate()");

    context.subscriptions.push(
      vscode.window.registerUriHandler({
        async handleUri(uri) {
          const filePath = uri.path.substring(1);

          try {
            await vscode.commands.executeCommand(
              "workbench.action.quickOpen",
              filePath,
            );
            log("[quick-open-handler]: opened quick-open for", filePath);
          } catch (error) {
            vscode.window.showErrorMessage(
              `Failed to open quick-open: ${error.message}`,
            );
            log("[quick-open-handler]: opened quick-open for", filePath);
          }
        },
      }),
    );
  },

  deactivate() {},
};
