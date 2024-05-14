import React from 'react'

export  function Comment() {
  return (
    <>
 <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8" style={{width: '206vh', height: 'auto'}}>
      <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium text-gray-900">Заголовок поста</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Автор: Имя Автора</p>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Описание поста</p>
          </div>
          <div className="px-4 py-4 sm:px-6">
            <img src="https://via.placeholder.com/350x150" alt="Placeholder Image" className="w-full" />
          </div>
          <div className="px-4 py-4 sm:px-6">
            <button
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Показать комментарии
            </button>
          </div>
        </div>
      </div>

      {/* Комментарии к посту */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-3xl">
        {/* Комментарий 1 */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-4">
          <div className="px-4 py-5 sm:px-6">
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Автор: Имя Автора 1</p>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Дата: Дата и время создания 1</p>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Текст комментария:</p>
            <p className="mt-1 max-w-2xl text-base text-gray-900">Текст комментария 1</p>
          </div>
        </div>

        {/* Комментарий 2 */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-4">
          <div className="px-4 py-5 sm:px-6">
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Автор: Имя Автора 2</p>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Дата: Дата и время создания 2</p>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Текст комментария:</p>
            <p className="mt-1 max-w-2xl text-base text-gray-900">Текст комментария 2</p>
          </div>
        </div>
        {/* Добавьте больше комментариев здесь, если необходимо */}
      </div>
    </div>
    </>
  )
}
