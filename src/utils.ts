import AsyncStorage from '@react-native-community/async-storage'
//import * as Keychain from 'react-native-keychain'
import * as SecureStore from 'expo-secure-store';

export enum PinResultStatus {
  initial = 'initial',
  success = 'success',
  failure = 'failure',
  locked = 'locked'
}

export const hasPinCode = async (serviceName: string) => {
  return await SecureStore.getItemAsync(serviceName).then(result => {
    return !!result
  })
}

export const deletePinCode = async (serviceName: string) => {
  return await SecureStore.deleteItemAsync(serviceName)
}

export const resetInternalStates = async (asyncStorageKeys: string[]) => {
  return await AsyncStorage.multiRemove(asyncStorageKeys)
}
