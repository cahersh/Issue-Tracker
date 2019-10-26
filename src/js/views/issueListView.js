import {elements} from './base'; //Holds all DOM elements

// Purpose: Creates open issue markup
// Input: the issue object
const createIssue = (iss) => `
    <div class="ui message">
        <div class="card">
            <div class="content">
                <div class="meta" style="padding-bottom: 10px;">Issue ID: ${iss.id}</div>
                <div class="meta" style="padding-bottom: 20px;">Status: ${iss.status}</div>
                <div class="header" style="font-size: 18px; padding-bottom: 15px">${iss.description}</div>
                <span class="meta"><i class="clock outline icon"></i>${iss.severity}</span>
                <span class="meta"><i class="user icon"></i>${iss.responsible}</span></br>
                <div style="padding-top: 10px;">
                    <button class="ui button" style="background-color:#d9b46c; color: white;">Close</button>
                    <button class="ui button" style="background-color:#de4e4e; color: white;">Delete</button>
                </div>
            </div>
        </div>
    </div>
`;

// Purpose: Renders the open issue to the open issue list
// Input: the issue object
export const renderNewIssue = iss => {
    // Call createOpenIssue to create markup
    const issue = createIssue(iss);

    // Insert issue into HTML
    elements.openIssues.insertAdjacentHTML('afterbegin', issue);
};