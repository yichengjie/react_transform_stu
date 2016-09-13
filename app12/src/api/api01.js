export function initBrandGroupPage (){
    var promise = new Promise(function(resolve, reject) {
        let data = {
            sequenceNum:"11",
            brandGroupName:"hi",
            saleStartDate:new Date("2016/09/02"),
            saleEndDate:new Date("2016/09/05"),
            loc1Type:"",
            loc1Value:"",
            loc2Type:"",
            loc2Value:"",
            geoLimit:['Apple'],
            travelStartDate:new Date("2016/09/06"),
            travelEndDate:new Date("2016/09/07")
        } ;
        setTimeout(function(){
            resolve(data);
        },500)
    });
    return promise ;
}