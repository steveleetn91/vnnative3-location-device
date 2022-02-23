import Vnf3LocationDeviceInterface from "./Vnf3LocationDevice.interface";
import VnNativeOsindex from "vnnative-3-os/dist/index";
export default class Vnf3LocationDevice implements Vnf3LocationDeviceInterface {
    os : VnNativeOsindex = new VnNativeOsindex;
    native : any = window;
    checkPermission() : String | Promise<Function> {
        if(this.native.permission.location() == "none") {
            return "No permission";
        }
        return new Promise((resolve,reject) => {
            let device : Vnf3LocationDevice = new Vnf3LocationDevice;
            return resolve(device.getLocation);
        })
    }
    getLocation() {
        let x,y = "";
        switch(this.os.isOs()) {
            case "android" :
                x = this.native.location.x;
                y = this.native.location.y;
                break;
            case "iOS" :
                x = this.native.location.x;
                y = this.native.location.y;
                break;
            case "software" :
                x = this.native.location.x;
                y = this.native.location.y;
                break;
            default :
                x = this.native.location.x;
                y = this.native.location.y;
                break;         
        }
        return {
            x : "",
            y : ""
        }
    }
}