import { useEffect, useState } from "react";
import { useParams } from "react-router";
import groupService from "../services/groupService";

export default function GroupDetails() {
  const { id } = useParams(); // Assuming the group ID is passed via the URL
  const [group, setGroup] = useState(null);


  if (!group) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading group details...</p>
      </div>
    );
  }

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          {group.name} Study Group
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">{group.level}</p>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900">Group Details</h3>
            <p className="mt-2 text-gray-600">
              <strong>Brief Description: </strong>{group.description}
            </p>
            <p className="mt-2 text-gray-600">
              <strong>Subjects Covered: </strong>{group.subjects}
            </p>
            <p className="mt-2 text-gray-600">
              <strong>Location: </strong>{group.location}
            </p>
            <p className="mt-2 text-gray-600">
              <strong>Capacity: </strong>{group.capacity}
            </p>
            <p className="mt-2 text-gray-600">
              <strong>Meeting Time: </strong>{group.weekday} at {group.time}
            </p>
          </div>

          <div className="sm:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900">Group Level</h3>
            <p className="mt-2 text-gray-600">{group.level}</p>
          </div>

          <div className="sm:col-span-2 mt-8 text-center">
            <button
              className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              onClick={() => window.location.href = `/details`}
            >
              Join Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

