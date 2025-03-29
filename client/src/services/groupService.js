import request from "../utils/request";

const baseUrl = 'http://localhost:3030/jsonstore/groups'

export default {
    async getAll() {
        const result = await request.get(baseUrl)
    const groups = Object.values(result)

    return groups
    },
    getOne(groupId) {
    return request.get(`${baseUrl}/${groupId}`)
    },
   create(groupData) {
            return request.post(baseUrl, groupData)
        },
   edit(groupId, groupData) {
            return request.put(`${baseUrl}/${groupId}`, {...groupData, _id: groupId })
        },
   delete(groupId) {
            return request.delete(`${baseUrl}/${groupId}`)
        }
};