import {elements} from './base'; //Holds all DOM elements

// Purpose: Creates open issue markup
// Input: iss - the issue object
const createIssue = (iss) => `
    <div class="ui message issue" id=${iss.id}>
        <div class="card">
            <div class="content" style="padding-bottom: 10px;">
                <div class="meta" style="padding-bottom: 10px;">Issue ID: ${iss.id}</div>
                <div class="meta" style="padding-bottom: 20px;">Status: ${iss.status}</div>
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

// Purpose: Create the close comment markup
const createComment = () => `
    <form class="ui form issue_form">
        <div class="field">
            <input type="text" name="comment" id="comment" placeholder="Describe the solution">
        </div>
        <button class="ui button" type="submit" style="background-color:royalblue; color: white;"><i class="save outline icon"></i></button>
    </form>
`;

// Purpose: Render the close comment markup to the issue 
export const renderCloseComment = (id) => {
    // Call createComment to create markup
    const markup = createComment();

    // Insert close comment into issue
    document.getElementById(`${id}`).insertAdjacentHTML('beforeend', markup);
};