/*!
 * Copyright 2015, Lu Kang
 * WeChat：lukangdaye
 * https://github.com/1029131145/Simple-Switch
 */

(function ($) {
    var Switch_Num = 0;
    $.extend($.fn, {
        simpleSwitch: function (ATTR) {
            var _ATTR = {
                "id": $.simpleSwitch.Id,
                "theme": $.simpleSwitch.Theme,
                "end": $.simpleSwitch.End
            };
            $.extend(_ATTR, ATTR);
            var _ALL = $(this), a = _ATTR, _NUM = Switch_Num, _ID = a["id"], _THEME = a["theme"];
            _ALL.each(function () {
                var _THIS = $(this);
                _THIS.hide();
                _THIS.attr("simpleSwitch", _NUM);
                _THIS.after('<div class="' + _ID + ' ' + _ID + '_' + _THEME + '" id="' + _ID + _NUM + '"><div class="SwitchLine"></div><span class="SwitchButton"></span></div>');
                var _CONTAINER = $('#' + _ID + _NUM);
                var _type = _THIS.attr('type');
                var _name = _THIS.attr('name');
                if (_type == 'radio') {
                    _CONTAINER.attr('type', _type + _name);
                }
                $.simpleSwitch.Init(this, _CONTAINER);
                _THIS.change(function () {
                    $.simpleSwitch.Change(this, _CONTAINER, _type, _name);
                });
                _CONTAINER.click(function () {
                    $.simpleSwitch.Click(this, _THIS);
                });
                _NUM++;
                a["end"](_THIS, _CONTAINER);
            });
            Switch_Num = _NUM;
        }
    }), $.simpleSwitch = function () {
        return !0;
    }, $.extend($.simpleSwitch, {
        Id: "Switch",
        Theme: "Flat",
        Result: "Result",
        setTheme: function (theme) {
            $.extend(this.Theme, theme);
        },
        setDisabled: function (o, i) {
            if (i) {
                $(o).attr('disabled', 'disabled');
                $(o).next(".Switch").addClass('Disabled');
            } else {
                $(o).removeAttr('disabled');
                $(o).next(".Switch").removeClass('Disabled');
            }
        },
        Click: function (t, input) {
            input.click();
        },
        Change: function (t, cont, type, name) {
            var $T = $(t);
            var $type = cont.attr('type');
            if (type) {
                $("div[type='" + $type + "']").removeClass('On');
                $("input[type='" + type + "'][name='" + name + "']").attr(this.Result, "false");
            }
            var checked = $T.attr('checked');
            if (checked) {
                cont.addClass('On');
                $T.attr(this.Result, "true");
            } else {
                cont.removeClass('On');
                $T.attr(this.Result, "false");
            }
        },
        Init: function (t, cont) {
            var $T = $(t);
            var checked = $T.attr('checked');
            if (checked) {
                cont.addClass('On');
                $T.attr(this.Result, "true");
            } else {
                cont.removeClass('On');
                $T.attr(this.Result, "false");
            }

            if ($T.attr('disabled')) {
                cont.addClass('Disabled');
            }

        },
        End: function (t, c) {
        }

    });
})(jQuery);