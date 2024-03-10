import {atom} from "recoil"
const FilteredProductAtom = atom({
    key: 'FilteredProductAtom', 
    default: 'Mobile', // default value (aka initial value)
  });
export default FilteredProductAtom