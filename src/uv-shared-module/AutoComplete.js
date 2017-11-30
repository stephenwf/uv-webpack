define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AutoComplete = /** @class */ (function () {
        //private _navigationKeyDownCodes: number[] = [KeyCodes.KeyDown.Backspace, KeyCodes.KeyDown.Spacebar, KeyCodes.KeyDown.Tab, KeyCodes.KeyDown.LeftArrow, KeyCodes.KeyDown.RightArrow, KeyCodes.KeyDown.Delete];
        //private _validKeyPressCodes: number[] = [KeyCodes.KeyPress.GraveAccent, KeyCodes.KeyPress.DoubleQuote];
        //private _lastKeyDownWasNavigation: boolean = false;
        function AutoComplete(element, autoCompleteFunc, parseResultsFunc, onSelect, delay, minChars, positionAbove) {
            if (delay === void 0) { delay = 300; }
            if (minChars === void 0) { minChars = 2; }
            if (positionAbove === void 0) { positionAbove = false; }
            var _this = this;
            this._$element = element;
            this._autoCompleteFunc = autoCompleteFunc;
            this._delay = delay;
            this._minChars = minChars;
            this._onSelect = onSelect;
            this._parseResultsFunc = parseResultsFunc;
            this._positionAbove = positionAbove;
            // create ui.
            this._$searchResultsList = $('<ul class="autocomplete"></ul>');
            if (this._positionAbove) {
                this._$element.parent().prepend(this._$searchResultsList);
            }
            else {
                this._$element.parent().append(this._$searchResultsList);
            }
            this._$searchResultTemplate = $('<li class="result"><a href="#" tabindex="-1"></a></li>');
            // init ui.
            // callback after set period.
            var typewatch = (function () {
                var timer = 0;
                return function (cb, ms) {
                    clearTimeout(timer);
                    timer = setTimeout(cb, ms);
                };
            })();
            var that = this;
            this._$element.on("keydown", function (e) {
                var originalEvent = e.originalEvent;
                //that._lastKeyDownWasNavigation = that._isNavigationKeyDown(originalEvent);
                var charCode = Utils.Keyboard.getCharCode(originalEvent);
                var cancelEvent = false;
                if (charCode === KeyCodes.KeyDown.LeftArrow) {
                    cancelEvent = true;
                }
                else if (charCode === KeyCodes.KeyDown.RightArrow) {
                    cancelEvent = true;
                }
                if (cancelEvent) {
                    originalEvent.cancelBubble = true;
                    if (originalEvent.stopPropagation)
                        originalEvent.stopPropagation();
                }
            });
            // prevent invalid characters being entered
            // this._$element.on("keypress", function(e: JQueryEventObject) {
            //     const isValidKeyPress: boolean = that._isValidKeyPress(<KeyboardEvent>e.originalEvent);
            //     if (!(that._lastKeyDownWasNavigation || isValidKeyPress)) {
            //         e.preventDefault();
            //         return false;
            //     }
            //     return true;
            // });
            // auto complete
            this._$element.on("keyup", function (e) {
                // if pressing enter without a list item selected
                if (!that._getSelectedListItem().length && e.keyCode === KeyCodes.KeyDown.Enter) {
                    that._onSelect(that._getTerms());
                    return;
                }
                // If there are search results
                if (that._$searchResultsList.is(':visible') && that._results.length) {
                    if (e.keyCode === KeyCodes.KeyDown.Enter) {
                        that._searchForItem(that._getSelectedListItem());
                    }
                    else if (e.keyCode === KeyCodes.KeyDown.DownArrow) {
                        that._setSelectedResultIndex(1);
                        return;
                    }
                    else if (e.keyCode === KeyCodes.KeyDown.UpArrow) {
                        that._setSelectedResultIndex(-1);
                        return;
                    }
                }
                if (e.keyCode !== KeyCodes.KeyDown.Enter) {
                    // after a delay, show autocomplete list.
                    typewatch(function () {
                        var val = that._getTerms();
                        // if there are more than x chars and no spaces
                        // update the autocomplete list.
                        if (val && val.length > that._minChars && !val.includes(' ')) {
                            that._search(val);
                        }
                        else {
                            // otherwise, hide the autocomplete list.
                            that._clearResults();
                            that._hideResults();
                        }
                    }, that._delay);
                }
            });
            // hide results if clicked outside.
            $(document).on('mouseup', function (e) {
                if (_this._$searchResultsList.parent().has($(e.target)[0]).length === 0) {
                    _this._clearResults();
                    _this._hideResults();
                }
            });
            this._hideResults();
        }
        // private _isNavigationKeyDown(e: KeyboardEvent): boolean {
        //     const isNavigationKeyDown: boolean = this._navigationKeyDownCodes.includes(Utils.Keyboard.getCharCode(e));
        //     return isNavigationKeyDown;
        // }
        // private _isValidKeyPress(e: KeyboardEvent): boolean {
        //     const charCode: number = Utils.Keyboard.getCharCode(e);
        //     const key: string = String.fromCharCode(charCode);
        //     const isValid: boolean = key.isAlphanumeric() || this._validKeyPressCodes.includes(charCode);
        //     return isValid;
        // }
        AutoComplete.prototype._getTerms = function () {
            return this._$element.val().trim();
        };
        AutoComplete.prototype._setSelectedResultIndex = function (direction) {
            var nextIndex;
            if (direction === 1) {
                nextIndex = this._selectedResultIndex + 1;
            }
            else {
                nextIndex = this._selectedResultIndex - 1;
            }
            var $items = this._$searchResultsList.find('li');
            if (nextIndex < 0) {
                nextIndex = $items.length - 1;
            }
            else if (nextIndex > $items.length - 1) {
                nextIndex = 0;
            }
            this._selectedResultIndex = nextIndex;
            $items.removeClass('selected');
            var $selectedItem = $items.eq(this._selectedResultIndex);
            $selectedItem.addClass('selected');
            //var top = selectedItem.offset().top;
            var top = $selectedItem.outerHeight(true) * this._selectedResultIndex;
            this._$searchResultsList.scrollTop(top);
        };
        AutoComplete.prototype._search = function (term) {
            this._results = [];
            this._clearResults();
            this._showResults();
            this._$searchResultsList.append('<li class="loading"></li>');
            this._updateListPosition();
            var that = this;
            this._autoCompleteFunc(term, function (results) {
                that._listResults(results);
            });
        };
        AutoComplete.prototype._clearResults = function () {
            this._$searchResultsList.empty();
        };
        AutoComplete.prototype._hideResults = function () {
            this._$searchResultsList.hide();
        };
        AutoComplete.prototype._showResults = function () {
            this._selectedResultIndex = -1;
            this._$searchResultsList.show();
        };
        AutoComplete.prototype._updateListPosition = function () {
            if (this._positionAbove) {
                this._$searchResultsList.css({
                    'top': this._$searchResultsList.outerHeight(true) * -1
                });
            }
            else {
                this._$searchResultsList.css({
                    'top': this._$element.outerHeight(true)
                });
            }
        };
        AutoComplete.prototype._listResults = function (results) {
            // get an array of strings
            this._results = this._parseResultsFunc(results);
            this._clearResults();
            if (!this._results.length) {
                // don't do this, because there still may be results for the PHRASE but not the word.
                // they won't know until they do the search.
                //this.searchResultsList.append('<li>no results</li>');
                this._hideResults();
                return;
            }
            for (var i = 0; i < this._results.length; i++) {
                var result = this._results[i];
                var $resultItem = this._$searchResultTemplate.clone();
                var $a = $resultItem.find('a');
                $a.text(result);
                this._$searchResultsList.append($resultItem);
            }
            this._updateListPosition();
            var that = this;
            this._$searchResultsList.find('li').on('click', function (e) {
                e.preventDefault();
                that._searchForItem($(this));
            });
        };
        AutoComplete.prototype._searchForItem = function ($item) {
            var term = $item.find('a').text();
            this._$element.val(term);
            this._hideResults();
            this._onSelect(term);
            this._clearResults();
            this._hideResults();
        };
        AutoComplete.prototype._getSelectedListItem = function () {
            return this._$searchResultsList.find('li.selected');
        };
        return AutoComplete;
    }());
    exports.AutoComplete = AutoComplete;
});
//# sourceMappingURL=AutoComplete.js.map