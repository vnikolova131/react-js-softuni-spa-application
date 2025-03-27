'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'
import { Link } from 'react-router'
import './registerStyling.css'
import './create.css';

export default function Create() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Create a Study Group</h2>
        <p className="mt-2 text-lg/8 text-gray-600">You didn't find a group that suits you? Create one!</p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
  <label htmlFor="group-name" className="block text-sm font-semibold text-gray-900">
    Group Name
  </label>
  <div className="mt-2.5">
    <input
      id="group-name"
      name="group-name"
      type="text"
      autoComplete="given-group"
      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
    />
  </div>
</div>
          <div className="sm:col-span-2">
            <label htmlFor="description" className="block text-sm/6 font-semibold text-gray-900">
              Brief Description
            </label>
            <div className="mt-2.5">
              <input
                id="description"
                name="description"
                type="description"
                autoComplete="description"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
              Subjects Covered
            </label>
            <div className="mt-2.5">
              <input
                id="universityName"
                name="universityName"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="capacity" className="block text-sm/6 font-semibold text-gray-900">
              Capacity
            </label>
            <div className="mt-2.5">
              <input
                id="capacity"
                name="capacity"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
              Group Level
            </label>
            <div className="mt-2.5">
            <div className="flex rounded-md bg-white border border-gray-300 relative">
  <div className="grid shrink-0 grid-cols-1 focus-within:relative w-full">
    <select
      id="level"
      name="level"
      autoComplete="level"
      aria-label="Level"
      className="col-start-1 row-start-1 w-full appearance-none py-2 pr-10 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
    >
      <option>Begginer</option>
      <option>Intermediate</option>
      <option>Advanced</option>
    </select>
    <ChevronDownIcon
      aria-hidden="true"
      className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 sm:size-4"
    />
  </div>
</div>

            </div>
          </div>
        </div>
        <div className="mt-10">
  <button
    type="submit"
    className="create-button"  
  >
    Create Group
  </button>
</div>

      </form>
    </div>
  )
}
