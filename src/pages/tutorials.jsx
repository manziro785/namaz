import React from 'react'

export  function Tutorials() {
  return (
    <div>

<div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8" style={{width: '206vh', height: 'auto'}}>
      <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Обучающие материалы
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-3xl">
        {/* Список туториалов */}
        <div className="space-y-6">
          {/* Туториал 1 */}
          <div className="bg-white overflow-hidden shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Название туториала 1</h3>
              {/* Видео */}
              <div className="mt-4">
                <iframe className="w-full" height="315" src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
              </div>
              {/* Описание */}
              <p className="mt-4 text-sm text-gray-500">Описание: Краткое описание туториала 1</p>
            </div>
          </div>

          {/* Туториал 2 */}
          <div className="bg-white overflow-hidden shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900">Название туториала 2</h3>
              {/* Видео */}
              <div className="mt-4">
                <iframe className="w-full" height="315" src="https://www.youtube.com/embed/VIDEO_ID" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
              </div>
              {/* Описание */}
              <p className="mt-4 text-sm text-gray-500">Описание: Краткое описание туториала 2</p>
            </div>
          </div>
          {/* Добавьте больше туториалов здесь, если необходимо */}
        </div>
      </div>
    </div>

    </div>
  )
}
