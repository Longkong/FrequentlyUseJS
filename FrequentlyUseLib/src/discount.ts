module GlobalService {
    export class DiscountSrv {


        static public GetDiscountAmount(rate:string ,amountbeforediscount:number): number {
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
                
        }


    }
}