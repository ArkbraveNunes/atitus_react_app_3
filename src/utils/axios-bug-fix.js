import {decode, encode} from 'base-64'

export default function fixGlobal() {
    if (!global.btoa) {
        global.btoa = encode;
    }
        
    if (!global.atob) {
        global.atob = decode;
    }
}
