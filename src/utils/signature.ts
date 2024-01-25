const md5 = require('md5');

const secretKey:string = 'wildmoor@2023';

const sort_ASCII = (obj:any):string => {
    let arr = new Array();
    let num = 0;
    for (let i in obj) {
        arr[num] = i;
        num++;
    }
    let sortArr = arr.sort();
    let string = '';
    for (let i in sortArr) {

        if(parseInt(i)==sortArr.length-1){
            string = string+sortArr[i] +'='+ obj[sortArr[i]];
        }else{
            string = string+sortArr[i] +'='+ obj[sortArr[i]]+'&';
        }
    }
    return string;
}


function signature(obj:object):string{

    const code:string = sort_ASCII(obj);

    const signature:string = md5(code+secretKey);

    return signature
}

export default signature