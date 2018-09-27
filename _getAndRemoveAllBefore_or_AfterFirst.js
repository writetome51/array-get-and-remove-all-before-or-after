"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFirstIndexOf_1 = require("@writetome51/array-get-indexes-basic/getFirstIndexOf");
var _getAndRemoveAllBeforeOrAfterIndex_1 = require("./_getAndRemoveAllBeforeOrAfterIndex");
// value cannot be an object.
function _getAndRemoveAllBefore_or_AfterFirst(value, beforeOrAfter, array) {
    var index = getFirstIndexOf_1.getFirstIndexOf(value, array);
    return _getAndRemoveAllBeforeOrAfterIndex_1._getAndRemoveAllBeforeOrAfterIndex(index, beforeOrAfter, array);
}
exports._getAndRemoveAllBefore_or_AfterFirst = _getAndRemoveAllBefore_or_AfterFirst;
