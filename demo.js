
function validCommon(flag,validFn){
  return function(){
    if(flag){
      flag = validFn.apply(null,arguments)
    }
    return flag ;
  }
}

function validteNotNull(value,str){
    if(value==str){
        return true ;
    }
    return false ;
}

var flag = false ;
var goodsId = "SKU" ;
flag = validCommon(flag,validteNotNull)(goodsId,'SKU');

console.info(flag) ;