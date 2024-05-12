export class Config {
    orgAuthId: string;
    orgAuthToken: string;

    constructor(orgAuthId: string, orgAuthToken: string) {
        this.orgAuthId = orgAuthId;
        this.orgAuthToken = orgAuthToken;
    }
}