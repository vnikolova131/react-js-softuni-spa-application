import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/groups'

export default {
    async getAll() {
        const result = await request.get(baseUrl)
    const groups = Object.values(result)

    return groups
    },
   create(groupData) {
            return request.post(baseUrl, groupData)
           // return request('POST', baseUrl, groupData);
        } 
};