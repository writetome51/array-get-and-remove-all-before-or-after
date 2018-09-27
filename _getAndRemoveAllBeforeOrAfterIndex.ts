import { ifIndexNotNegative_getActionResult } from '../../ifIndexNotNegative_getActionResult';
import { getAndRemoveHead } from './getAndRemoveHead';
import { getAndRemoveTail } from './getAndRemoveTail';


// This does not allow negative indexes.

export function _getAndRemoveAllBeforeOrAfterIndex(
	index, beforeOrAfter: "before" | "after", array
): any[] {
	return ifIndexNotNegative_getActionResult(index, () => {
		if (beforeOrAfter === 'before') return getAndRemoveHead(index, array);
		if (beforeOrAfter === 'after') return getAndRemoveTail((array.length - index - 1), array);
	});
}
