import {atom} from "recoil"
const orderUserAtom = atom({
    key: 'orderUserAtom', 
    default:[], // default value (aka initial value)
  });
export default orderUserAtom