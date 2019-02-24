"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ifIndexNotNegative_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult");
var array_get_and_remove_head_tail_1 = require("@writetome51/array-get-and-remove-head-tail");
// This does not allow negative indexes.
function _getAndRemoveAll_BeforeOrAfter_Index(index, beforeOrAfter, array) {
    return ifIndexNotNegative_getActionResult_1.ifIndexNotNegative_getActionResult(index, function () {
        if (beforeOrAfter === 'before')
            return array_get_and_remove_head_tail_1.getAndRemoveHead(index, array);
        if (beforeOrAfter === 'after')
            return array_get_and_remove_head_tail_1.getAndRemoveTail((array.length - index - 1), array);
    });
}
exports._getAndRemoveAll_BeforeOrAfter_Index = _getAndRemoveAll_BeforeOrAfter_Index;
