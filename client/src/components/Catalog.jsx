import { useEffect, useState } from "react";
import { Link } from 'react-router';
import { useGroups } from "../api/groupApi"; // Import the correct hook

export default function Catalog() {
  const { groups } = useGroups(); // Correctly destructure "groups"

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Groups</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {groups.length > 0 ? (
            groups.map((group) => (
              <Link key={group._id} to={`/${group._id}/details`} className="group">
                <img
                  src={group.urlImage}
                  alt={group.name} // Adding alt text for accessibility
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
                <h3 className="mt-4 text-sm text-gray-700">{group.level}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{group.name}</p>
              </Link>
            ))
          ) : (
            <h3 className="no-articles">No groups created yet!</h3>
          )}
        </div>
      </div>
    </div>
  );
}
