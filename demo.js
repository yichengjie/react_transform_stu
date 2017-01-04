
function validCommon(flag,validFn){
  return function(){
    if(flag){
      flag = validFn.apply(null,arguments)
    }
    return flag ;
  }
}

function validteNotNull(value,str){
    console.info('value : ' + value) ;
    console.info('str : ' + str) ;
    if(value==str){
        return true ;
    }
    return false ;
}

var flag = true ;
var goodsId = "hello" ;
flag = validCommon(flag,validteNotNull)(goodsId,'SKU');

console.info(flag) ;