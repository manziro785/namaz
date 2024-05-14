import React from 'react'

export  function Tutorial() {
  return (
    <div>

<div className="flex justify-center items-center h-screen" style={{width: '206vh', height: 'auto'}}>
      <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-xl">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Название туториала</h3>
          {/* Видео */}
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe className="rounded-lg" src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
          </div>
          {/* Описание */}
          <p className="text-gray-600 text-center">Описание: Краткое описание туториала</p>
        </div>
      </div>
    </div>

    </div>
  )
}
