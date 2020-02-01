export class Message {
    body: string;
    senderId: string;
    receivedId: string;
    createAt = new Date().toISOString();
    id: string;

    constructor(data?: any) {
        if (data) {
            Object.assign(this, data);
        }
    }
    toDoc() {
        return JSON.parse(JSON.stringify(this));
    }
}
