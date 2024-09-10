'use client'

import { Fragment, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Menu, RadioGroup, Transition } from '@headlessui/react'

const Sun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="group:hover:text-gray-100 h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
    />
  </svg>
)

const Moon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="group:hover:text-gray-100 h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
    />
  </svg>
)
const Monitor = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="group:hover:text-gray-100 h-6 w-6"
  >
    <rect x="3" y="3" width="14" height="10" rx="2" ry="2"></rect>
    <line x1="7" y1="17" x2="13" y2="17"></line>
    <line x1="10" y1="13" x2="10" y2="17"></line>
  </svg>
)
const Blank = () => <svg className="h-6 w-6" />

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <div className="mr-5 flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div className="flex items-center justify-center hover:text-primary-500 dark:hover:text-primary-400">
          <Menu.Button aria-label="Theme switcher">
            {mounted ? resolvedTheme === 'dark' ? <Moon /> : <Sun /> : <Blank />}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-50 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800">
            <RadioGroup value={theme} onChange={setTheme}>
              <div className="p-1">
                <RadioGroup.Option value="light">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-primary-600 text-white' : ''
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <div className="mr-2">
                          <Sun />
                        </div>
                        Light
                      </button>
                    )}
                  </Menu.Item>
                </RadioGroup.Option>
                <RadioGroup.Option value="dark">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-primary-600 text-white' : ''
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <div className="mr-2">
                          <Moon />
                        </div>
                        Dark
                      </button>
                    )}
                  </Menu.Item>
                </RadioGroup.Option>
                <RadioGroup.Option value="system">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-primary-600 text-white' : ''
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <div className="mr-2">
                          <Monitor />
                        </div>
                        System
                      </button>
                    )}
                  </Menu.Item>
                </RadioGroup.Option>
              </div>
            </RadioGroup>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default ThemeSwitch
