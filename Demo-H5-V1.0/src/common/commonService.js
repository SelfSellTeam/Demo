/**
 * Created by Administrator on 2017/3/29.
 */
/**
 * @file
 * @auth jinguangguo
 * @date 2016/11/1
 */

import ajax from '../util/ajax';

export default {
    /**
     * 搜索类型查询
     * @param param
     * @returns {*}
     */
    queryType(param = {}) {
        return ajax.get('/Query.Type',param);
    },

};