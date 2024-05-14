import React from 'react'

export  function PrayerTimings() {
  return (
    <div>

<div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8" style={{width: '206vh', height: 'auto'}}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Время намаза
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-8 shadow sm:rounded-lg sm:px-10">
          {/* Вывод времени намаза */}
          <div className="space-y-6">
            <div>
              <p className="text-lg font-medium text-gray-900">Время намаза:</p>
              <ul className="divide-y divide-gray-200">
                <li className="py-4 flex justify-between">
                  <p className="text-sm text-gray-500">Fajr</p>
                  <p className="text-sm text-gray-500">03:14 AM</p>
                </li>
                <li className="py-4 flex justify-between">
                  <p className="text-sm text-gray-500">Sunrise</p>
                  <p className="text-sm text-gray-500">05:25 AM</p>
                </li>
                <li className="py-4 flex justify-between">
                  <p className="text-sm text-gray-500">Dhuhr</p>
                  <p className="text-sm text-gray-500">01:21 PM</p>
                </li>
                <li className="py-4 flex justify-between">
                  <p className="text-sm text-gray-500">Asr</p>
                  <p className="text-sm text-gray-500">05:36 PM</p>
                </li>
                <li className="py-4 flex justify-between">
                  <p className="text-sm text-gray-500">Sunset</p>
                  <p className="text-sm text-gray-500">09:16 PM</p>
                </li>
                <li className="py-4 flex justify-between">
                  <p className="text-sm text-gray-500">Maghrib</p>
                  <p className="text-sm text-gray-500">09:16 PM</p>
                </li>
                <li className="py-4 flex justify-between">
                  <p className="text-sm text-gray-500">Isha</p>
                  <p className="text-sm text-gray-500">11:18 PM</p>
                </li>
                <li className="py-4 flex justify-between">
                  <p className="text-sm text-gray-500">Imsak</p>
                  <p className="text-sm text-gray-500">03:04 AM</p>
                </li>
                <li className="py-4 flex justify-between">
                  <p className="text-sm text-gray-500">Midnight</p>
                  <p className="text-sm text-gray-500">01:20 AM</p>
                </li>
                <li className="py-4 flex justify-between">
                  <p className="text-sm text-gray-500">First Third</p>
                  <p className="text-sm text-gray-500">11:59 PM</p>
                </li>
                <li className="py-4 flex justify-between">
                  <p className="text-sm text-gray-500">Last Third</p>
                  <p className="text-sm text-gray-500">02:42 AM</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
