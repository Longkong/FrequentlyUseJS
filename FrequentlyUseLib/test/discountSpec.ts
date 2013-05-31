/// <reference path="../src/discount.ts" />
/// <reference path="../Scripts/typings/jasmine/jasmine.d.ts" />

describe("Discount", function () {
    it("have discount is percent", function () {
        var rate = "20%";
        var amount = 100;
        var act = GlobalService.DiscountSrv.GetDiscountAmount(rate, amount);
        expect(act).toEqual(20);
    });

    it("have discount is percent and percent", function () {
        var rate = "20%,10%";
        var amount = 100;
        var act = GlobalService.DiscountSrv.GetDiscountAmount(rate, amount);
        expect(act).toEqual(28);
    }
    );

    it("have discount is number", function () {
        var rate = "5";
        var amount = 100;
        var act = GlobalService.DiscountSrv.GetDiscountAmount(rate, amount);
        expect(act).toEqual(5);
    }
    );

    it("have discount is number and number", function () {
        var rate = "15,5";
        var amount = 100;
        var act = GlobalService.DiscountSrv.GetDiscountAmount(rate, amount);
        expect(act).toEqual(20);
    }
    );

    it("have discount is percent and number", function () {
        var rate = "15%,5";
        var amount = 100;
        var act = GlobalService.DiscountSrv.GetDiscountAmount(rate, amount);
        expect(act).toEqual(20);
    }
    );

    it("have discount is number and percent", function () {
        var rate = "10,10%";
        var amount = 100;
        var act = GlobalService.DiscountSrv.GetDiscountAmount(rate, amount);
        expect(act).toEqual(19);
    }
   );

    it("have discount is float and percent", function () {
        var rate = "5.8,10%";
        var amount = 105.8;
        var act = GlobalService.DiscountSrv.GetDiscountAmount(rate, amount);
        expect(act).toEqual(15.8);
    }
   );

    it("have discount is string", function () {
        var rate = "aa";
        var amount = 105.8;
        var act = GlobalService.DiscountSrv.GetDiscountAmount(rate, amount);
        expect(act).toEqual(0);
    }
   );

    it("have discount is empty", function () {
        var rate = "";
        var amount = 105.8;
        var act = GlobalService.DiscountSrv.GetDiscountAmount(rate, amount);
        expect(act).toEqual(0);
    }
   );
});