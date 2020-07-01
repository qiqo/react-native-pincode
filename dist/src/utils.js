"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const async_storage_1 = require("@react-native-community/async-storage");
//import * as Keychain from 'react-native-keychain'
const SecureStore = require("expo-secure-store");
var PinResultStatus;
(function (PinResultStatus) {
    PinResultStatus["initial"] = "initial";
    PinResultStatus["success"] = "success";
    PinResultStatus["failure"] = "failure";
    PinResultStatus["locked"] = "locked";
})(PinResultStatus = exports.PinResultStatus || (exports.PinResultStatus = {}));
exports.hasPinCode = async (serviceName) => {
    return await SecureStore.getItemAsync(serviceName).then(result => {
        return !!result;
    });
};
exports.deletePinCode = async (serviceName) => {
    return await SecureStore.deleteItemAsync(serviceName);
};
exports.resetInternalStates = async (asyncStorageKeys) => {
    return await async_storage_1.default.multiRemove(asyncStorageKeys);
};
