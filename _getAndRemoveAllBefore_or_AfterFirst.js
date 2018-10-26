"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_indexes_basic_1 = require("@writetome51/array-get-indexes-basic");
var _getAndRemoveAllBeforeOrAfterIndex_1 = require("./_getAndRemoveAllBeforeOrAfterIndex");
// value cannot be an object.
function _getAndRemoveAllBefore_or_AfterFirst(value, beforeOrAfter, array) {
    var index = array_get_indexes_basic_1.getFirstIndexOf(value, array);
    return _getAndRemoveAllBeforeOrAfterIndex_1._getAndRemoveAllBeforeOrAfterIndex(index, beforeOrAfter, array);
}
exports._getAndRemoveAllBefore_or_AfterFirst = _getAndRemoveAllBefore_or_AfterFirst;
