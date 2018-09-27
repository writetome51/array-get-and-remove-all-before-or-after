"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getLastIndexOf_1 = require("../../no_modify/get/indexes/getLastIndexOf");
var _getAndRemoveAllBeforeOrAfterIndex_1 = require("./_getAndRemoveAllBeforeOrAfterIndex");
// value cannot be object.
function _getAndRemoveAllBefore_or_AfterLast(value, beforeOrAfter, array) {
    var index = getLastIndexOf_1.getLastIndexOf(value, array);
    return _getAndRemoveAllBeforeOrAfterIndex_1._getAndRemoveAllBeforeOrAfterIndex(index, beforeOrAfter, array);
}
exports._getAndRemoveAllBefore_or_AfterLast = _getAndRemoveAllBefore_or_AfterLast;
