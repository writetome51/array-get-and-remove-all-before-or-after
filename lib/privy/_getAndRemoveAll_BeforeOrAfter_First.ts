import { getFirstIndexOf } from '@writetome51/array-get-indexes';
import { _getAndRemoveAll_BeforeOrAfter_Index } from './_getAndRemoveAll_BeforeOrAfter_Index';


// value cannot be an object.

export function _getAndRemoveAll_BeforeOrAfter_First(
	value, 
	beforeOrAfter: "before" | "after", 
	array
): any[] {

	let index = getFirstIndexOf(value, array);
	return _getAndRemoveAll_BeforeOrAfter_Index(index, beforeOrAfter, array);
}
