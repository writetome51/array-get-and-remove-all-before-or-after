import { errorIfIndexIsNegative } from 'error-if-index-is-negative';
import { getAndRemoveAdjacentAt } from '@writetome51/array-get-and-remove-adjacent-at';


// This does not allow negative indexes.

export function _getAndRemoveAll_BeforeOrAfter_Index(
	index,
	beforeOrAfter: "before" | "after",
	array
): any[] {
	errorIfIndexIsNegative(index);

	if (beforeOrAfter === 'before') return getAndRemoveAdjacentAt(0, index, array);
	if (beforeOrAfter === 'after') {
		let numToRemove = (array.length - index - 1);
		return getAndRemoveAdjacentAt(-numToRemove, numToRemove, array);
	}
}
