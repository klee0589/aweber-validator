import { checkPassword } from './utils/helpers';

describe('checkPassword', () => {
  it('should return ["Password is valid"] when all criteria are met', () => {
    const passwords = ['ValidPassword1!'];

    const result = checkPassword({ passwords });

    expect(result).toEqual([['Password is valid']]);
  });

  it('should return criteria messages when criteria are not met', () => {
    const passwords = ['weakpassword'];

    const result = checkPassword({ passwords });

    expect(result).toEqual([
      ['Password does not meet all criteria'],
      ['requires 1 uppercase'],
      ['requires 1 number'],
      ['requires 1 special character'],
    ]);
  });

  it('should return ["Password length is less than 7 characters"] when length is less than 7', () => {
    const passwords = ['short'];

    const result = checkPassword({ passwords });

    expect(result).toEqual([['Password does not meet all criteria'], ['Password length is less than 7 characters'], ['requires 1 uppercase'],
    ['requires 1 number'],
    ['requires 1 special character']]);
  });

  it('should return multiple error messages for various issues', () => {
    const passwords = ['abc'];

    const result = checkPassword({ passwords });

    expect(result).toEqual([
      ['Password does not meet all criteria'],
      ['Password length is less than 7 characters'],
      ['requires 1 uppercase'],
      ['requires 1 number'],
      ['requires 1 special character'],
    ]);
  });

  it('should return an empty array for an empty password array', () => {
    const passwords = [];

    const result = checkPassword({ passwords });

    expect(result).toEqual([
      ['Password does not meet all criteria'],
      ['requires 1 uppercase'],
      ['requires 1 lowercase'],
      ['requires 1 number'],
      ['requires 1 special character'],
    ]);
  });
});
