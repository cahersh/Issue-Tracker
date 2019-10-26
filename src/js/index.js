import {elements} from './views/base';
import * as issueSubmitView from './views/issueSubmitView';
import Issue from './models/Issue';

const state = {};

// Purpose: Issue Submit controller
const controlIssueSubmit = () => {
    // 1. Get form values from view
    const issueObj = issueSubmitView.getInput();

    if (issueObj) {
        // 2. New issue object and add to state
        state.issue = new Issue(issueObj.description, issueObj.severity, issueObj.responsible);

        console.log(state.issue);

        // 3. Prepare UI for results
        // Clears issue form inputs on issueSubmitView view
        issueSubmitView.clearInput(); 

        // 4. Render issue into open list view UI
        //openIssueListView.renderIssue();

    }
}

// Purpose: Event listener for the submit button
elements.issueForm.addEventListener('submit', e => {
    e.preventDefault();
    controlIssueSubmit();
});