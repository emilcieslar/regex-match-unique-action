import * as core from '@actions/core';
import getInput from './get-input';
import setOutput from './set-output';


function action() {
  try {
    const text = getInput('text');
    const regex = new RegExp(getInput('regex'), getInput('flags'));
    const uniqueResults = [...new Set(text.match(regex))];

    setOutput('results', uniqueResults);
  }
  catch (error) {
    core.setFailed(error);
  }
}


export default action;
