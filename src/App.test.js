import { checkPassword } from './utils/helpers';

describe('checkPassword', () => {
  it('should return ["Password is valid"] when all criterias are met', () => {
    const passwords = ['ValidPassword1!', 'ValidPassword1!'];

    const result = checkPassword({ passwords });

    expect(result).toEqual([['Password is valid']]);
  });

  it('should return ["Passwords do not match"] when passwords do not match', () => {
    const passwords = ['Password1!', 'DifferentPassword1!'];

    const result = checkPassword({ passwords });

    expect(result).toEqual([['Password does not meet all criteria'],
    ['Passwords are not the same'],
    ]);
  });

  it('should return criteria messages when criteria are not met', () => {
    const passwords = ['weakpassword'];

    const result = checkPassword({ passwords });

    expect(result).toEqual([
      ['Password does not meet all criteria'],
      ['Passwords are not the same'],
      ['requires 1 uppercase'],
      ['requires 1 number'],
      ['requires 1 special character'],
    ]);
  });

  it('should return error message asking for missing uppercase and lowercase characters', () => {
    const passwords = ['2345#$@#'];

    const result = checkPassword({ passwords });

    expect(result).toEqual([
      ['Password does not meet all criteria'],
      ['Passwords are not the same'],
      ['requires 1 uppercase'],
      ['requires 1 lowercase'],
    ]);
  });

  it('should return multiple error messages for various issues', () => {
    const passwords = ['abc'];

    const result = checkPassword({ passwords });

    expect(result).toEqual([
      ['Password does not meet all criteria'],
      ['Passwords are not the same'],
      ['Password length is less than 7 characters'],
      ['requires 1 uppercase'],
      ['requires 1 number'],
      ['requires 1 special character'],
    ]);
  });
});
