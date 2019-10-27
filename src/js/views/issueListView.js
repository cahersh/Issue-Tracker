import {elements} from './base'; //Holds all DOM elements

// Purpose: Creates open issue markup
// Input: iss - the issue object
const createIssue = (iss) => `
    <div class="ui message issue" id=${iss.id}>
        <div class="card" id="card_${iss.id}">
            <div class="content" style="padding-bottom: 10px;">
                <div class="meta" style="padding-bottom: 10px;">Issue ID: ${iss.id}</div>
                <div class="meta issue_status" style="padding-bottom: 20px;">Status: ${iss.status}</div>
                <div class="header" style="font-size: 18px; padding-bottom: 15px">${iss.description}</div>
                <span class="meta"><i class="clock outline icon"></i>${iss.severity}</span>
                <span class="meta"><i class="user icon"></i>${iss.responsible}</span></br>
                <div class="btn_container" style="padding-top: 10px;">
                    <button class="ui button close_btn" style="background-color:#d9b46c; color: white;">Close</button>
                    <button class="ui button del_btn" style="background-color:#de4e4e; color: white;">Delete</button>
                </div>
            </div>
        </div>
    </div>
`;

// Purpose: Renders the open issue to the open issue list
// Input: iss - the issue object
export const renderNewIssue = iss => {
    // Call createOpenIssue to create markup
    const issue = createIssue(iss);

    // Insert issue into HTML
    elements.issues.insertAdjacentHTML('afterbegin', issue);
};

// Purpose: Create the close comment form markup
const createCommentForm = (id) => `
    <form class="ui form comment_form">
        <div class="field">
            <input type="text" name="comment" id="comment" placeholder="Describe the solution">
        </div>
        <button class="ui button save_btn" style="background-color:royalblue; color: white;">Save</button>
    </form>
`;

// Purpose: Render the close comment form markup to the issue 
// Inputs: id - id of the issue to render close comment in
export const renderCloseCommentForm = (id) => {
    // Call createComment to create markup
    const markup = createCommentForm(id);

    // Insert close comment form into issue
    document.getElementById(`${id}`).insertAdjacentHTML('beforeend', markup);
};

// Purpose: Removes the close comment markup after comment is entered
// Inputs: id - id of the issue to remove the close comment
export const removeCloseComment = (id) => {
    // Select the close comment form
    let closeForm = document.querySelector('.comment_form');

    // Remove close comment from issue
    document.getElementById(`${id}`).removeChild(closeForm);
};

// Purpose: Create the close comment markup
// Inputs: comm - issue close comment
const createComment = (comm) => `
    <div class="meta" style="padding-bottom: 10px;">Closing notes: ${comm}</div>
`;


// Purpose: Render the close comment
// Inputs: id - issue id, comm - issue close comment
export const renderCloseComment = (id, comm) => {
    // Call createCommentForm to create markup
    const markup = createComment(comm);

    // Insert close comment
    document.getElementById(`${id}`).insertAdjacentHTML('beforeend', markup);
};

// Purpose: recreate issue when closed
// Input: iss - the issue object
const recreateIssue = (iss) => `
    <div class="card">
        <div class="content" style="padding-bottom: 10px;">
            <div class="meta" style="padding-bottom: 10px;">Issue ID: ${iss.id}</div>
            <div class="meta issue_status" style="padding-bottom: 20px;">Status: ${iss.status}</div>
            <div class="header" style="font-size: 18px; padding-bottom: 15px">${iss.description}</div>
            <span class="meta"><i class="clock outline icon"></i>${iss.severity}</span>
            <span class="meta"><i class="user icon"></i>${iss.responsible}</span></br>
            <div class="btn_container" style="padding-top: 10px;">
                <button class="ui button close_btn" style="background-color:#d9b46c; color: white;" disabled>Close</button>
                <button class="ui button del_btn" style="background-color:#de4e4e; color: white;">Delete</button>
            </div>
        </div>
    </div>
`;

// Purpose: Render the updated issue status
// Inputs: id - issue id
export const updateIssueStatus = (id, issue) => {
    // Remove issue card so we can render
    const iss = document.getElementById(`${id}`);
    const card = document.getElementById(`card_${id}`);
    iss.removeChild(card);

    // creates HTML to recreate issue with correct status
    const markup = recreateIssue(issue);

    // re-render the issue card to update the issue status
    document.getElementById(`${id}`).insertAdjacentHTML('afterbegin', markup);
};

// Purpose: Remove the deleted issue from the list
// Input: id - issue id
export const deleteIssue = (id) => {
    // Get the issue by the issue id
    const iss = document.getElementById(`${id}`);

    // Remove the issue from the list
    iss.parentNode.removeChild(iss);
};