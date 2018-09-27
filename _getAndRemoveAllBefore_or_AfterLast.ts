import { getLastIndexOf } from '@writetome51/array-get-indexes-intermediate/getLastIndexOf';
import { _getAndRemoveAllBeforeOrAfterIndex } from './_getAndRemoveAllBeforeOrAfterIndex';


// value cannot be object.

export function _getAndRemoveAllBefore_or_AfterLast(
	value, beforeOrAfter: "before" | "after", array
): any[] {

	let index = getLastIndexOf(value, array);
	return _getAndRemoveAllBeforeOrAfterIndex(index, beforeOrAfter, array);
}
