import {elements} from './views/base';
import * as issueSubmitView from './views/issueSubmitView';
import * as issueListView from './views/issueListView';
import Issue from './models/Issue';

const state = {
    issues: []
};

// Purpose: Issue Submit controller
const controlIssueSubmit = () => {
    // 1. Get form values from view
    const issueObj = issueSubmitView.getInput();

    if (issueObj) {
        // 2. New issue object and add to state
        let issue = new Issue(issueObj.description, issueObj.severity, issueObj.responsible);
        
        // Generate ID
        issue.id = issue.generateID();
        
        // Push issue to state issues
        state.issues.push(issue);

        // 3. Prepare UI for results
        // Clears issue form inputs on issueSubmitView view
        issueSubmitView.clearInput(); 

        // 4. Render issue into open list view UI
        issueListView.renderNewIssue(issue);
    }
}

// Purpose: Event listener for the submit button
elements.issueForm.addEventListener('submit', e => {
    e.preventDefault();
    controlIssueSubmit();
});

// Purpose: Issue Comment controller
// Inputs: id - parent id of the close button that was pressed
const controlIssueComment = (id) => {
    // 1. Insert comment box & save button
    issueListView.renderCloseCommentForm(id);
};

// Purpose: Issue Close controller
// Inputs: id - parent id of the save button that was pressed
const controlIssueClose = (id, comm) => {
    let issue;
    // 1. Add close comment to state
    // Loop over issues to find correct issue
    state.issues.forEach(e => {
        // Check if statue issue id matches inputted id
        if(e.id === id) {
            // Add save comment to that issue
            e.comment = e.addCloseComment(comm);
            // Update status to closed
            e.status = 'Closed';
            issue = e;
        }
    });

    // Remove close comment from issue
    issueListView.removeCloseComment(id);

    // Update view to change status to closed
    issueListView.updateIssueStatus(id, issue);

    // Add plan text of what was entered
    issueListView.renderCloseComment(id, issue.comment);  


};

const controlDelete = id => {
    // 1. Update State
    // Loop through all issues
    state.issues.forEach((e, i) => {
        // Check if statue issue id matches inputted id
        if(e.id === id) {
            // Remove issue from state
            state.issues.splice(i,1);
        }
    });

    // 2. Update View
    issueListView.deleteIssue(id);
};

// Purpose: Event listener for issue card buttons
elements.issues.addEventListener('click', e => {
    e.preventDefault();
    // If Close button is pressed
    if(e.target.matches('.close_btn')) {
        // Find issue ID for close button that was pressed
        let id = e.target.parentNode.parentNode.parentNode.parentNode.id;

        // Disable Close button
        e.target.disabled = true;

        controlIssueComment(id);
    }
    // If Save button is pressed
    else if(e.target.matches('.save_btn')) {
        // Find issue ID for save button that was pressed
        let id = e.target.parentNode.parentNode.id;

        // Get inputted comment
        let comm = document.getElementById("comment").value;
        controlIssueClose(id, comm);
    }
    // If Delete button is pressed
    else if(e.target.matches('.del_btn')) {
        // Find issue ID for delete button that was pressed
        let id = e.target.parentNode.parentNode.parentNode.parentNode.id;

        controlDelete(id);
    }
});