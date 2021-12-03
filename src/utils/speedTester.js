import * as NetworkSpeed from "network-speed";
const testNetworkSpeed = new NetworkSpeed();
const baseUrl = "https://google.com";

export const checkUploadSpeed = async (fileSize) =>
    testNetworkSpeed.checkUploadSpeed(baseUrl, fileSize);
