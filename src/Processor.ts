import {User} from "./User";

export class Processor {

    giveConsent(user: User): void {
        user.consentGiven = true
    }

    verifyConsent(user: User): boolean {
        return user.consentGiven === true
    }
}