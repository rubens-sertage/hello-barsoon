require('@actions/core');

try {
    const name = core.getInput('name');
    const output_value = console.log(`Hello ${name}!`);
    core.setOutput('greeting', output_value);
} catch (error) {
  core.setFailed(error.message);
}