import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router'; 
import { useEditGroup, useGroup } from '../api/groupApi';

export default function EditGroup() {
  const navigate = useNavigate();
  const { groupId } = useParams();  

  const {group} = useGroup(groupId);
  const {edit} = useEditGroup();


const formAction = async (formData) => {
    const groupData = Object.fromEntries(formData)

   await edit(groupId, groupData)

    navigate(`/${groupId}/details`)
}

  return (
    <div
      className="bg-white px-6 py-24 sm:py-32 lg:px-8"
      style={{
        backgroundImage: `url(${group.urlImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        filter: 'brightness(0.5)',
      }}
    >
      {/* Content Container with white background around content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-8 rounded-lg shadow-xl bg-white bg-opacity-80 border border-gray-200">
        {/* Group Name */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Edit Group: {group.name}
          </h2>
        </div>

        {/* Edit Form */}
        <div className="mt-16">
          <form action={formAction}>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900">Group Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={group.name}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900">Level</label>
                <input
                  type="text"
                  name="level"
                  defaultValue={group.level}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900">Brief Description</label>
                <textarea
                  name="description"
                  defaultValue={group.description}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                  rows="4"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900">Subjects Covered</label>
                <input
                  type="text"
                  name="subjects"
                  defaultValue={group.subjects}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900">Location</label>
                <input
                  type="text"
                  name="location"
                  defaultValue={group.location}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900">Capacity</label>
                <input
                  type="number"
                  name="capacity"
                  defaultValue={group.capacity}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900">Meeting Time</label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    name="weekday"
                    defaultValue={group.weekday}
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="Day of the week"
                  />
                  <input
                    type="time"
                    name="time"
                    defaultValue={group.time}
                    className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-900">Image URL</label>
                <input
                  type="text"
                  name="urlImage"
                  defaultValue={group.urlImage}
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-2 mt-8 text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 shadow-md transition duration-300 transform hover:scale-105"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
