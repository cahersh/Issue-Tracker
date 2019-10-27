export default class Issue {
    constructor(description, severity, responsible) {
        this.description = description;
        this.severity = severity;
        this.responsible = responsible;
        this.status = 'Open';
    };

    generateID() {
        let now = new Date();
        let timestamp;

        timestamp = now.getFullYear().toString(); // 2011
        timestamp += (now.getMonth() < 9 ? '0' : '') + now.getMonth().toString(); // JS months are 0-based, so +1 and pad with 0's
        timestamp += (now.getMonth() < 10 ? '0' : '') + now.getMonth().toString(); // pad with a 0
        timestamp += now.getHours().toString();
        timestamp += now.getMinutes().toString();
        timestamp += now.getSeconds().toString();
        timestamp += now.getMilliseconds().toString();
        this.id = timestamp;
        return timestamp;
    };

    addCloseComment(comm) {
        this.comment = comm;
        return this.comment;
    };

    // TODO: function to calculate due date
};