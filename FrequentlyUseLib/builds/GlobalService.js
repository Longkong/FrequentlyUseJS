﻿var GlobalService;
(function (GlobalService) {
    var Guid = (function () {
        function Guid() { }
        Guid.NewGuid = function () {
            var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
            return guid;
        };
        return Guid;
    })();
    GlobalService.Guid = Guid;

    var DiscountSrv = (function () {
        function DiscountSrv() { }
        DiscountSrv.GetDiscountAmount = function GetDiscountAmount(rate, amountbeforediscount) {
            var patt = /((\+|-)?[0-9][0-9]*(\.[0-9]*)?\s*%{0,1})/g;
            var arr = rate.match(patt);
            if (!arr || rate == "") {
                return 0;
            }
            var oldamt = amountbeforediscount;
            var discamt = 0;
            arr.forEach(function (item) {
                var pper = /%/g;
                var partialRate = 0;
                if (item.match(pper)) {
                    partialRate = +item.replace("%", "");
                    discamt += (partialRate * amountbeforediscount) / 100;
                    amountbeforediscount -= (partialRate * amountbeforediscount) / 100;
                } else {
                    partialRate = +item;
                    discamt += partialRate;
                    amountbeforediscount -= partialRate;
                }
            });
            return discamt;
        };
        return DiscountSrv;
    })();
    GlobalService.DiscountSrv = DiscountSrv;
})(GlobalService || (GlobalService = {}));