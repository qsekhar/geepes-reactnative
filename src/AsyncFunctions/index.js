export const logout = async () => {
  try {
    await AsyncStorage.removeItem('auth_token');
    return true;
  }
  catch(exception) {
    return false;
  }
}