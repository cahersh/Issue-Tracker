import {elements} from './views/base';
import * as issueSubmitView from './views/issueSubmitView';
import * as openIssueListView from './views/openIssueListView';
import Issue from './models/Issue';

const state = {
    openIssues: []
};

// Purpose: Issue Submit controller
const controlIssueSubmit = () => {
    // 1. Get form values from view
    const issueObj = issueSubmitView.getInput();

    if (issueObj) {
        // 2. New issue object and add to state
        let issue = new Issue(issueObj.description, issueObj.severity, issueObj.responsible);
        state.openIssues.push(issue);

        // 3. Prepare UI for results
        // Clears issue form inputs on issueSubmitView view
        issueSubmitView.clearInput(); 

        // 4. Render issue into open list view UI
        openIssueListView.renderOpenIssue(issue);

    }
}

// Purpose: Event listener for the submit button
elements.issueForm.addEventListener('submit', e => {
    e.preventDefault();
    controlIssueSubmit();
});