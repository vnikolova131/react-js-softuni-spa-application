import { request } from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/groups'

export default {
    getAll() {
        return request.get(baseUrl)
    },
   create(groupData) {
            return request.post(baseUrl, groupData)
           // return request('POST', baseUrl, groupData);
        } 
};