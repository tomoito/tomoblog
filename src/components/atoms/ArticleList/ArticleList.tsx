import { ArticleHeader } from '@/models/models';
import Link from 'next/link';
import React from 'react';
import ArticleItem from '../ArticleItem/ArticleItem';

type Props = { articles: ArticleHeader[]; tags?: string[] };

const ArticleList = (Props: Props) => {
  return (
    <div>
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
              </div>
            ))}

            {/* 
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
            </div> */}
          </div>

          <div className="-mx-8 w-4/12 hidden lg:block">
            <div className="mt-10 px-8">
              <h1 className="mb-4 text-xl font-bold text-gray-700">Categories</h1>
              <div className="flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg shadow-md">
                <ul>
                  {Props.tags.map((tagNames) => (
                    <li className="mt-2">
                      <Link href={`/tags/${tagNames[0]}`}>
                        <a
                          href="#"
                          className="px-2 py-1 bg-gray-600 text-sm text-green-100 rounded hover:bg-gray-500"
                        >
                          {tagNames[0]} : {tagNames[1]}
                        </a>
                      </Link>
                    </li>
                  ))}
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
