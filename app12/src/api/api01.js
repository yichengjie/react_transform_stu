export function initBrandGroupPage (){
    var promise = new Promise(function(resolve, reject) {
        let data = {
            sequenceNum:"11",
            brandGroupName:"hi",
            saleStartDate:"2016-09-02",
            saleEndDate:"2016-09-05",
            loc1Type:"use",
            loc1Value:"11",
            loc2Type:"use",
            loc2Value:"22",
            geoLimit:['Apple'],
            travelStartDate:"2016-09-06",
            travelEndDate:"2016-09-07"
        } ;
        setTimeout(function(){
            resolve(data);
        },500)
    });
    return promise ;
}