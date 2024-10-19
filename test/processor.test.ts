import {User} from "../src/User";
import {Processor} from "../src/Processor";

let user: User
let processor: Processor

beforeEach((): void => {
    user = new User('Andrei', 'Kuzmin', '5354100', 'Narva')
    processor = new Processor()
})

test('check if new user is undefined', (): void => {
    expect(user.consentGiven).toBeUndefined()
})

test('check if processor gives consent to the user', (): void => {
    //const processor = new Processor()
    processor.giveConsent(user)
    expect(user.consentGiven).toBe(true)
})

test('verify if user has given his consent', (): void => {
    //const processor = new Processor()
    processor.giveConsent(user)
    expect(processor.verifyConsent(user)).toBeTruthy()
})

test('check that consent is not approved  when user has not given consent', (): void => {
    //const processor = new Processor()
    expect(processor.verifyConsent(user)).toBeFalsy()
})
//done