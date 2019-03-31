"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_index_is_negative_1 = require("error-if-index-is-negative");
var array_get_and_remove_adjacent_at_1 = require("@writetome51/array-get-and-remove-adjacent-at");
// This does not allow negative indexes.
function _getAndRemoveAll_BeforeOrAfter_Index(index, beforeOrAfter, array) {
    error_if_index_is_negative_1.errorIfIndexIsNegative(index);
    if (beforeOrAfter === 'before')
        return array_get_and_remove_adjacent_at_1.getAndRemoveAdjacentAt(0, index, array);
    if (beforeOrAfter === 'after') {
        var numToRemove = (array.length - index - 1);
        return array_get_and_remove_adjacent_at_1.getAndRemoveAdjacentAt(-numToRemove, numToRemove, array);
    }
}
exports._getAndRemoveAll_BeforeOrAfter_Index = _getAndRemoveAll_BeforeOrAfter_Index;
