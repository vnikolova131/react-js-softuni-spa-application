import { useContext, useEffect, useState } from "react";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/data/groups'

export const useGroups = () => {
    const [groups, setGroups] = useState([])
    
useEffect(() => {
    request.get(baseUrl)
    .then(setGroups)
}, [])

return {
    groups,
}
}

export const useGroup = (groupId) => {
    const [group, setGroup] = useState([])
    
useEffect(() => {
    request.get(`${baseUrl}/${groupId}`)
    .then(setGroup)
}, [])

return {
    group,
}
}


export const useCreateGroup = () => {
    const { request } = useAuth();


     const create = (groupData) => {
        return request.post(baseUrl, groupData)
    }

    return {
        create,
    }
}

export const useEditGroup = () => {
    const {request} = useAuth();

    const edit = (groupId, groupData) => 
        request.put(`${baseUrl}/${groupId}`, {...groupData, _id: groupId })
    
    return {
        edit,
    }
};



export const useDeleteGroup = () => {
    const {request} = useAuth();

    const deleteGroup = (groupId) => 
        request.delete(`${baseUrl}/${groupId}`)
    
    return {
        deleteGroup,
    }
};
