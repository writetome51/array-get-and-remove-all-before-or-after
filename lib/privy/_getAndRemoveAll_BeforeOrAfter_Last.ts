import { getLastIndexOf } from '@writetome51/array-get-indexes';
import { _getAndRemoveAll_BeforeOrAfter_Index } from './_getAndRemoveAll_BeforeOrAfter_Index';


// value cannot be object.

export function _getAndRemoveAll_BeforeOrAfter_Last(
	value, 
	beforeOrAfter: "before" | "after", 
	array
): any[] {

	let index = getLastIndexOf(value, array);
	return _getAndRemoveAll_BeforeOrAfter_Index(index, beforeOrAfter, array);
}
