import { ArticleHeader } from '@/models/models';
import React from 'react';
import ArticleItem from '../ArticleItem/ArticleItem';

type Props = { articles: ArticleHeader[] };

const ArticleList = (Props: Props) => {
  return (
    <div>
      {/* {Props.articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))} */}

      <div className="px-6 py-8">
        <div className="flex justify-between container mx-auto">
          <div className="w-full lg:w-8/12">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
              <div>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option>Latest</option>
                  <option>Last Week</option>
                </select>
              </div>
            </div>

            {Props.articles.map((article) => (
              <div>
                <ArticleItem article={article} />
                {/* <ArticleItem key={article.id} article={article} /> */}
              </div>
            ))}
            <div className="mt-8">
              <div className="flex">
                <a
                  href="#"
                  className="mx-1 px-3 py-2 bg-white text-gray-500 font-medium rounded-md cursor-not-allowed"
                >
                  previous
                </a>

                <a
                  href="#"
                  className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md"
                >
                  1
                </a>

                <a
                  href="#"
                  className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md"
                >
                  2
                </a>

                <a
                  href="#"
                  className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md"
                >
                  3
                </a>

                <a
                  href="#"
                  className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md"
                >
                  Next
                </a>
              </div>
            </div>
          </div>
          <div className="-mx-8 w-4/12 hidden lg:block">
            <div className="px-8">
              <h1 className="mb-4 text-xl font-bold text-gray-700">Authors</h1>
              <div className="flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md">
                <ul className="-mx-4">
                  <li className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                      alt="avatar"
                      className="w-10 h-10 object-cover rounded-full mx-4"
                    />
                    <p>
                      <a href="#" className="text-gray-700 font-bold mx-1 hover:underline">
                        Alex John
                      </a>
                      <span className="text-gray-700 text-sm font-light">Created 23 Posts</span>
                    </p>
                  </li>
                  <li className="flex items-center mt-6">
                    <img
                      src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=333&amp;q=80"
                      alt="avatar"
                      className="w-10 h-10 object-cover rounded-full mx-4"
                    />
                    <p>
                      <a href="#" className="text-gray-700 font-bold mx-1 hover:underline">
                        Jane Doe
                      </a>
                      <span className="text-gray-700 text-sm font-light">Created 52 Posts</span>
                    </p>
                  </li>
                  <li className="flex items-center mt-6">
                    <img
                      src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=281&amp;q=80"
                      alt="avatar"
                      className="w-10 h-10 object-cover rounded-full mx-4"
                    />
                    <p>
                      <a href="#" className="text-gray-700 font-bold mx-1 hover:underline">
                        Lisa Way
                      </a>
                      <span className="text-gray-700 text-sm font-light">Created 73 Posts</span>
                    </p>
                  </li>
                  <li className="flex items-center mt-6">
                    <img
                      src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80"
                      alt="avatar"
                      className="w-10 h-10 object-cover rounded-full mx-4"
                    />
                    <p>
                      <a href="#" className="text-gray-700 font-bold mx-1 hover:underline">
                        Steve Matt
                      </a>
                      <span className="text-gray-700 text-sm font-light">Created 245 Posts</span>
                    </p>
                  </li>
                  <li className="flex items-center mt-6">
                    <img
                      src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=373&amp;q=80"
                      alt="avatar"
                      className="w-10 h-10 object-cover rounded-full mx-4"
                    />
                    <p>
                      <a href="#" className="text-gray-700 font-bold mx-1 hover:underline">
                        Khatab Wedaa
                      </a>
                      <span className="text-gray-700 text-sm font-light">Created 332 Posts</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 px-8">
              <h1 className="mb-4 text-xl font-bold text-gray-700">Categories</h1>
              <div className="flex flex-col bg-white px-4 py-6 max-w-sm mx-auto rounded-lg shadow-md">
                <ul>
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline"
                    >
                      - AWS
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline"
                    >
                      - Laravel
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline"
                    >
                      - Vue
                    </a>
                  </li>
                  <li className="mt-2">
                    <a
                      href="#"
                      className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline"
                    >
                      - Design
                    </a>
                  </li>
                  <li className="flex items-center mt-2">
                    <a
                      href="#"
                      className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline"
                    >
                      - Django
                    </a>
                  </li>
                  <li className="flex items-center mt-2">
                    <a
                      href="#"
                      className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline"
                    >
                      - PHP
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 px-8">
              <h1 className="mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
              <div className="flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg shadow-md">
                <div className="flex justify-center items-center">
                  <a
                    href="#"
                    className="px-2 py-1 bg-gray-600 text-sm text-green-100 rounded hover:bg-gray-500"
                  >
                    Laravel
                  </a>
                </div>
                <div className="mt-4">
                  <a href="#" className="text-lg text-gray-700 font-medium hover:underline">
                    Build Your New Idea with Laravel Freamwork.
                  </a>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                      alt="avatar"
                      className="w-8 h-8 object-cover rounded-full"
                    />
                    <a href="#" className="text-gray-700 text-sm mx-3 hover:underline">
                      Alex John
                    </a>
                  </div>
                  <span className="font-light text-sm text-gray-600">Jun 1, 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
