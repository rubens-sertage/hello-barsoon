/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
require('@actions/core');

try {
    const name = core.getInput('name');
    const output_value = console.log(`Hello ${name}!`);
    core.setOutput('greeting', output_value);
} catch (error) {
  core.setFailed(error.message);
}
