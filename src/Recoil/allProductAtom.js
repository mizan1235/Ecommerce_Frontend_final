import {atom} from "recoil"
const allProductAtom = atom({
    key: 'allProductAtom', 
    default: [], // default value (aka initial value)
  });
export default allProductAtom