
const serviceKey=require('../keys/key')

const fooddata=(DESC_KOR, callback)=>{
    var request = require('request');
    
    var ServiceKey=serviceKey.publicPortalkey

    var url = 'http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList';
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + ServiceKey; /* Service Key*/
    queryParams += '&' + encodeURIComponent('DESC_KOR') + '=' + encodeURIComponent(DESC_KOR); /* */
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('3'); /* */
    queryParams += '&' + encodeURIComponent('bgn_year') + '=' + encodeURIComponent('2017'); /* */
    queryParams += '&' + encodeURIComponent('animal_plant') + '=' + encodeURIComponent('(유)돌코리아'); /* */
    queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json'); /* */
    
    const fullurl=url+queryParams
    console.log('full url', fullurl)

    request(fullurl, (error,{body})=>{
        console.log('body', body)
        const food=JSON.parse(body)
        console.log('food', food)
        callback(undefined,{
            food:food
        })
    })
}

module.exports=fooddata