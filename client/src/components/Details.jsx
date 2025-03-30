import { useEffect, useState } from "react";
import { useParams,Link, useNavigate } from "react-router";
import groupService from "../services/groupService";
import { useGroup } from "../api/groupApi";

export default function GroupDetails() {
  const navigate = useNavigate()
  const { groupId } = useParams(); 

  const { group } = useGroup(groupId)

  const gameDeleteClickHandler = async () => {
    const hasConfirm = confirm(`Are you sure you want to delete ${group.name} study group?`)
 
    if(!hasConfirm) {
      return;
    }
    await groupService.delete(groupId)

    navigate('/catalog');
  }

  if (!group) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading group details...</p>
      </div>
    );
  }

  return (
    <div
      className="bg-white px-6 py-24 sm:py-32 lg:px-8"
      style={{
        backgroundImage: `url(${group.urlImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',  // Ensures the background covers the entire viewport height
        filter: 'brightness(0.5)'  // Fade effect on background
      }}
    >
      {/* Content Container with white background around content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-8 rounded-lg shadow-xl bg-white bg-opacity-80 border border-gray-200">
        {/* Group Name */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {group.name}
          </h2>
          <p className="mt-2 text-lg text-gray-600">{group.level}</p>
        </div>
  
        {/* Group Details Section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900 border-b-2 pb-2 mb-4">Group Details</h3>
              <p className="mt-2 text-gray-700">
                <strong className="font-medium text-gray-900">Brief Description: </strong>
                {group.description}
              </p>
              <p className="mt-2 text-gray-700">
                <strong className="font-medium text-gray-900">Subjects Covered: </strong>
                {group.subjects}
              </p>
              <p className="mt-2 text-gray-700">
                <strong className="font-medium text-gray-900">Location: </strong>
                {group.location}
              </p>
              <p className="mt-2 text-gray-700">
                <strong className="font-medium text-gray-900">Capacity: </strong>
                {group.capacity}
              </p>
              <p className="mt-2 text-gray-700">
                <strong className="font-medium text-gray-900">Meeting Time: </strong>
                {group.weekday} at {group.time}
              </p>
            </div>
  
            <div className="sm:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900 border-b-2 pb-2 mb-4">Group Level</h3>
              <p className="mt-2 text-gray-700">{group.level}</p>
            </div>
  
           
            <div className="sm:col-span-2 mt-8 text-center space-x-4">
            <Link
                to={`/${groupId}/edit`}
                className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 shadow-md transition duration-300 transform hover:scale-105"
               >
                Edit Group
              </Link>
  
              <button
                className="px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 shadow-md transition duration-300 transform hover:scale-105"
                onClick={gameDeleteClickHandler}
              >
                Delete Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

