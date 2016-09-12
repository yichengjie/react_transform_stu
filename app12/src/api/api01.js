export function initBrandGroupPage (){
    var promise = new Promise(function(resolve, reject) {
        let data = {
            sequenceNum:"11",
            brandGroupName:"hello world",
            saleStartDate:"",
            saleEndDate:"",
            loc1Type:"",
            loc1Value:"",
            loc2Type:"",
            loc2Value:"",
            geoLimit:[],
            travelStartDate:"",
            travelEndDate:""
        } ;
        setTimeout(function(){
            resolve(data);
        },1000)
    });
    return promise ;
}