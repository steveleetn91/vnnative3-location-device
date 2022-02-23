import VnNativeOsindex from "vnnative-3-os";

export default interface Vnf3LocationDeviceInterface {
    os : VnNativeOsindex;
    native : any;
    checkPermission() : String | Promise<Function>
    getLocation() : {
        x : string,
        y : string
    }
}