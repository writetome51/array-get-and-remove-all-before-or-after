import { getFirstIndexOf } from '@writetome51/array-get-indexes-basic';
import { _getAndRemoveAllBeforeOrAfterIndex } from './_getAndRemoveAllBeforeOrAfterIndex';


// value cannot be an object.

export function _getAndRemoveAllBefore_or_AfterFirst(
	value, beforeOrAfter: "before" | "after", array
): any[] {

	let index = getFirstIndexOf(value, array);
	return _getAndRemoveAllBeforeOrAfterIndex(index, beforeOrAfter, array);
}
