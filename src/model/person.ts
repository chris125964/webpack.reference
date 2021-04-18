/**
 * Klasse Person
 *
 * @export
 * @class Person
 */
export class Person {
  _firstName: string;
  _lastName: string;
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
}
