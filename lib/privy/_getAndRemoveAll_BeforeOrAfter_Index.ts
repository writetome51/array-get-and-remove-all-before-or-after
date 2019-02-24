import { ifIndexNotNegative_getActionResult }
	from '@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult';
import { getAndRemoveHead, getAndRemoveTail  } from '@writetome51/array-get-and-remove-head-tail';


// This does not allow negative indexes.

export function _getAndRemoveAll_BeforeOrAfter_Index(
	index, 
	beforeOrAfter: "before" | "after", 
	array
): any[] {
	return ifIndexNotNegative_getActionResult(index, () => {
		if (beforeOrAfter === 'before') return getAndRemoveHead(index, array);
		if (beforeOrAfter === 'after') return getAndRemoveTail((array.length - index - 1), array);
	});
}
