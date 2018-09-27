"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ifIndexNotNegative_getActionResult_1 = require("../../ifIndexNotNegative_getActionResult");
var getAndRemoveHead_1 = require("./getAndRemoveHead");
var getAndRemoveTail_1 = require("./getAndRemoveTail");
// This does not allow negative indexes.
function _getAndRemoveAllBeforeOrAfterIndex(index, beforeOrAfter, array) {
    return ifIndexNotNegative_getActionResult_1.ifIndexNotNegative_getActionResult(index, function () {
        if (beforeOrAfter === 'before')
            return getAndRemoveHead_1.getAndRemoveHead(index, array);
        if (beforeOrAfter === 'after')
            return getAndRemoveTail_1.getAndRemoveTail((array.length - index - 1), array);
    });
}
exports._getAndRemoveAllBeforeOrAfterIndex = _getAndRemoveAllBeforeOrAfterIndex;
