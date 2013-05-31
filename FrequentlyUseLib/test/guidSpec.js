describe("guid genration", function () {
    it("Check unique id from 5,000 time gen", function () {
        var arract = new Array();
        for(var i = 0; i <= 5000; i++) {
            var act = GlobalService.Guid.NewGuid();
            expect(arract.indexOf(act)).toEqual(-1);
            arract.push(act);
        }
    });
});
