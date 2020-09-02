/**
 * 
*/
import axios from '../util/http'

export const getLogin = (params = {}) => {
    return axios.post('dream/search',params);
};
// dream/search?appkey=3df92b1d4199d72a&keyword=鞋&pagenum=1&pagesize=10