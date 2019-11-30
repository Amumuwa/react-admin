// 封装 axios 请求
import axios from 'axios'

export default function request ( url, data = {}, mothod = 'get') {
    if ( mothod === 'get' ) {    // get 请求
        return axios.get(
            url,    
            {
                params: data    //  请求参数
            },

        )
    } else if ( mothod === 'post' ) {    // post 请求
        return axios.post(
            url,
            data    // 提交的数据
        )
    }   
}