"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_indexes_1 = require("@writetome51/array-get-indexes");
var _getAndRemoveAll_BeforeOrAfter_Index_1 = require("./_getAndRemoveAll_BeforeOrAfter_Index");
// value cannot be an object.
function _getAndRemoveAll_BeforeOrAfter_First(value, beforeOrAfter, array) {
    var index = array_get_indexes_1.getFirstIndexOf(value, array);
    return _getAndRemoveAll_BeforeOrAfter_Index_1._getAndRemoveAll_BeforeOrAfter_Index(index, beforeOrAfter, array);
}
exports._getAndRemoveAll_BeforeOrAfter_First = _getAndRemoveAll_BeforeOrAfter_First;
