define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UVUtils = /** @class */ (function () {
        function UVUtils() {
        }
        UVUtils.sanitize = function (html) {
            var elem = document.createElement('div');
            var $elem = $(elem);
            $elem.html(html);
            var s = new Sanitize({
                elements: ['a', 'b', 'br', 'img', 'p', 'i', 'span'],
                attributes: {
                    a: ['href'],
                    img: ['src', 'alt']
                },
                protocols: {
                    a: { href: ['http', 'https'] }
                }
            });
            $elem.html(s.clean_node(elem));
            return $elem.html();
        };
        return UVUtils;
    }());
    exports.UVUtils = UVUtils;
});
//# sourceMappingURL=Utils.js.map