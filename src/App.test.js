import { checkPasswordHelper } from './utils/helpers';

describe('checkPasswordHelper', () => {
  it('should return ["Password is valid"] when all criterias are met', () => {
    const passwords = ['ValidPassword1!', 'ValidPassword1!'];

    const result = checkPasswordHelper({ passwords });

    expect(result).toEqual({ "isValidPassword": true, "results": [[" - password is valid"]] });
  });

  it('should return ["Passwords do not match"] when passwords do not match', () => {
    const passwords = ['Password1!', 'DifferentPassword1!'];

    const result = checkPasswordHelper({ passwords });

    expect(result).toEqual({ "isValidPassword": false, "results": [[" - password does not meet all criteria"], [" - passwords are not the same"]] });
  });

  it('should return criteria messages when criteria are not met', () => {
    const passwords = ['weakpassword'];

    const result = checkPasswordHelper({ passwords });

    expect(result).toEqual({ "isValidPassword": false, "results": [[" - password does not meet all criteria"], [" - passwords are not the same"], [" - requires 1 uppercase"], [" - requires 1 number"], [" - requires 1 special character"]] });
  });

  it('should return error message asking for missing uppercase and lowercase characters', () => {
    const passwords = ['2345#$@#'];

    const result = checkPasswordHelper({ passwords });

    expect(result).toEqual({ "isValidPassword": false, "results": [[" - password does not meet all criteria"], [" - passwords are not the same"], [" - requires 1 uppercase"], [" - requires 1 lowercase"]] });
  });

  it('should return multiple error messages for various issues', () => {
    const passwords = ['abc'];

    const result = checkPasswordHelper({ passwords });

    expect(result).toEqual({ "isValidPassword": false, "results": [[" - password does not meet all criteria"], [" - passwords are not the same"], [" - password length is less than 7 characters"], [" - requires 1 uppercase"], [" - requires 1 number"], [" - requires 1 special character"]] });
  });
});
