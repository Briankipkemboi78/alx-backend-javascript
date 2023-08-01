export function uploadPhoto() {
  //simulate an API call that resolves after a short timeout.
  return new Promise((resolve)  => {
    setTimeout(() => {
      resolve({
        status: 200,
        body: "photo-profile-1",
      });
    },1000); //Simulating an asynchronous operation that takes one second
  });
}

export function createUser() {
  //Simulate another API call that resolves after a short timeout
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        firstName: "Guillaume",
        lastName: "Salva",
      });
    }, 1500); // Simulating an asynchronous operation that takes 1.5 seconds
  });
}
