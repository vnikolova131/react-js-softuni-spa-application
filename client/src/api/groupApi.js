import { useContext } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/userContext";

const baseUrl = 'http://localhost:3030/data/groups'

export default {
    async getAll() {
        const result = await request.get(baseUrl)
    const groups = Object.values(result)

    return groups
    },
    getOne(groupId) {
    return request.get(`${baseUrl}/${groupId}`)
    },
   edit(groupId, groupData) {
            return request.put(`${baseUrl}/${groupId}`, {...groupData, _id: groupId })
        },
   delete(groupId) {
            return request.delete(`${baseUrl}/${groupId}`)
        }
};

export const useCreateGroup = () => {
    const { accessToken } = useContext(UserContext);

    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    }
     const create = (groupData) => {
        return request.post(baseUrl, groupData, options)
    }

    return {
        create,
    }
}