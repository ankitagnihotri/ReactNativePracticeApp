import { AsyncStorage } from 'react-native';

export async function setStorage(key, data) {
  try {
    await AsyncStorage.setItem(key, data);
    return true;
  } catch (error) {
    // Error saving data
    return false;
  }
}

export async function getStorage(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log('getStorage value', value, key);
    if (value !== null) {
      // We have data!!
      //   console.log(value);
      return value;
    } else {
      return value;
    }
  } catch (error) {
    return 'false';
    // Error retrieving data
  }
}

export async function createUserSession(user) {
  const state = await setStorage('currentActiveUser', user);
  console.log('createUserSession', state);
  return state;
}

export async function getUserSession() {
  // let state;
  const state = await getStorage('currentActiveUser');
  console.log('getStorage', state);
  return state;
}

export async function deleteUserSessions(key) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    return false;
  }
}
