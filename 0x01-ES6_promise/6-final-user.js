import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName){
  const promise = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  try {
    const results = await Promise.allSettled(promises);

    return results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason.message,
    }));
    
  } catch (error) {
    console.error('An error occurred:', error);
    return []    
  }
}
