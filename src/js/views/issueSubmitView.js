import {elements} from './base'; //Holds all DOM elements

// Purpose: gets DOM values from issue form
// Outputs: returns an object that contains the issue form values
export const getInput = () => {
    const issueObj = {
        description: elements.issueDescription.value,
        severity: elements.issueSeverity.options[elements.issueSeverity.selectedIndex].text,
        responsible: elements.issueResponsible.value
    };
    return issueObj;
};

// Purpose: clear the issue form
export const clearInput = () => {
    elements.issueDescription.value = '';
    elements.issueSeverity.value = 'low';
    elements.issueResponsible.value = '';
};