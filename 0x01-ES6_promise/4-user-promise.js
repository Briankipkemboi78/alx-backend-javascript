function signUpUser(firstName, lastName) {
  //Create the object with the provided firstName and lastName
  const userObject = {
    firstName: firstName,
    lastName: lastName,
  };

  // Return a resolved promise with the userObject
  return Promise.resolve(userObject);
}

export default signUpUser;