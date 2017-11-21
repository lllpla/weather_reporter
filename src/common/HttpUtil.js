
class HttpUtil{

    /**
     * get请求获取json数据
     * @param url
     * @returns {Promise}
     */
    static getJSON(url){
        return new Promise((resolve,reject) => {
            const req = new XMLHttpRequest();
            req.open('GET',url,true);
            req.send();
            req.onreadystatechange = function () {
                if(req.readyState === 4){
                    if (req.status === 200){
                        try {
                            let response = JSON.parse(req.responseText);
                            resolve(response);
                        }catch (e){
                            reject(e);
                        }
                    }else {
                        reject(new Error(req.statusText));
                    }
                }
            }
        })
    }

    /**
     * 获取城市编码
     * @param cityName
     * @returns {Promise}
     */
    static getCityId(cityName){
        return new Promise((resolve,reject) => {
            const url = 'http://weixin.jirengu.com/weather/cityid?location='+cityName;
            try {
                HttpUtil.getJSON(url)
                    .then(res=>resolve(res.results[0].id))
                    .catch(e=>reject(e));
            }catch (e){
                reject(e);
            }
        })
    }

    /**
     * 获取天气信息
     * @param cityId
     * @returns {Promise}
     */
    static getWeather(cityId){
        return new Promise((resolve,reject) => {
            const url = "http://weixin.jirengu.com/weather/now?cityid="+cityId;
            try{
                HttpUtil.getJSON(url).then(res=>resolve(res.weather[0])).catch(e=>reject(e));
            }catch (e){
                reject(e)
            }
        })
    }

}

export default HttpUtil;