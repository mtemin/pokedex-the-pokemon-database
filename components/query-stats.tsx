import Image from 'next/image';

import { Progress } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { useState } from 'react';



export default function QueryStats(props: any) {


  let platforms = [
    {
      title: "Web",
      volume: 76
    },
    {
      title: "Twitter",
      volume: 61
    },
    {
      title: "Facebook",
      volume: 37
    },
    {
      title: "Google +",
      volume: 53
    },
    {
      title: "Video",
      volume: 35
    },
    {
      title: "Vk",
      volume: 28
    },
    {
      title: "Blog",
      volume: 21
    },
    {
      title: "Forum",
      volume: 15
    },
    {
      title: "Complaint",
      volume: 4
    },
  ]


  return (
    <aside id="query-stats" className='col-span-2 rounded bg-gray-900 m-3 overflow-y-scroll h-screen'>
      <div id="tabs" className="flex justify-between">
        <div className='bg-gray-700 hover:bg-gray-800 w-full flex justify-center cursor-pointer border-b-2'>
          <svg id="chart-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 p-2 ">
            <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
          </svg>
        </div>
        <div className='bg-gray-900 hover:bg-gray-800 w-full flex justify-center cursor-pointer'>
          <svg id="chart-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 p-2 ">
            <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
          </svg>
        </div>
        <div className='bg-gray-900 hover:bg-gray-800 w-full flex justify-center cursor-pointer'>
          <svg id="chart-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 p-2 ">
            <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
          </svg>
        </div>


      </div>
      <div id="query-content" className='p-2 overflow-y-scroll'>
        <div id="query-keyword" className="mb-3 p-2 text-center border-solid rounded border-2 border-gray-800">
          <p className='bg-opacity-90'>Keyword</p>
          <p className='font-bold text-lg mb-5'>{props.keyword}</p>
          <p className="text-3xl font-bold">{props.totalQueryResults}</p>
          <p>Total Results</p>
        </div>
        <div id="platform-volumes" className='mb-3 grid-cols-8 p-2 border-solid rounded border-2 border-gray-800'>
          <p className='col-span-8 text-center'>Volume</p>
          {platforms.map((platform, index) => (
            <div key={index} className='platform mb-2'>
              <p className='mb-1'>{platform.title}</p>
              <Progress
                progress={platform.volume}
                size="sm"
                textLabel={platform.title}
              />
            </div>
          ))}

        </div>
        <div id="social-media" className=' mb-3 p-2 border-solid rounded border-2 border-gray-800 flex flex-wrap justify-center'>
          <div className="social-media-account grid row-auto gap-1 grid-cols-4 grid-rows-1 mb-3">
            <Image
              src="/testresim.jpg"
              width={40}
              height={40}
              className="invert rounded-full col-span-1 .self-center"
              alt="account profile picture"
              priority
            />
            <div className="text-content col-span-3">
              <p className='font-medium text-lg'> The Economist</p>
              <p className='font-normal text-base'>@The Economist</p>
              <p className='font-light text-sm mt-1 opacity-90 max-h-12 truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fuga.</p>
            </div>
          </div>
          <div className="social-media-account grid row-auto gap-1 grid-cols-4 grid-rows-1 mb-3">
            <Image
              src="/testresim.jpg"
              width={40}
              height={40}
              className="invert rounded-full col-span-1 .self-center"
              alt="account profile picture"
              priority
            />
            <div className="text-content col-span-3">
              <p className='font-medium text-lg'> The Economist</p>
              <p className='font-normal text-base'>@The Economist</p>
              <p className='font-light text-sm mt-1 opacity-90 max-h-12 truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, fuga.</p>
            </div>
          </div>
          <Button
            size="sm"
            color="dark"
            className='uppercase rounded border-gray-800 mt-4'
          >
            more connections
          </Button>
        </div>
        <div id="news-feed" className='mb-3 flex justify-between p-2 relative'>
          <div id="timeline" className='w-1 h-full bg-gray-700 col-span-1 text-center absolute flex flex-col justify-between items-center'>
            <span className='bg-gray-700 w-3 h-3 rounded-full border-solid border-2 border-gray-900'></span>
            <span className='bg-gray-700 w-3 h-3 rounded-full border-solid border-2 border-gray-900'></span>
          </div>
          <div id="news-items" className=''>
            <div className="pl-5 mb-4">
              <p className='opacity-90 text-sm'>30 seconds ago</p>
              <p className=' text-base'>A new comment to <span className='text-blue-500 cursor-pointer underline'>your post</span>.</p>
            </div>
            <div className="pl-5 mb-4">
              <p className='opacity-90 text-sm'>30 seconds ago</p>
              <p className=' text-base'>A new comment to <span className='text-blue-500 cursor-pointer underline'>your post</span>.</p>
            </div>
            <div className="pl-5 mb-4">
              <p className='opacity-90 text-sm'>30 seconds ago</p>
              <p className=' text-base'>A new comment to <span className='text-blue-500 cursor-pointer underline'>your post</span>.</p>
            </div>
            <div className="pl-5 mb-4">
              <p className='opacity-90 text-sm'>30 seconds ago</p>
              <p className=' text-base'>A new comment to <span className='text-blue-500 cursor-pointer underline'>your post</span>.</p>
            </div>
            <div className="pl-5 mb-4">
              <p className='opacity-90 text-sm'>30 seconds ago</p>
              <p className=' text-base'>A new comment to <span className='text-blue-500 cursor-pointer underline'>your post</span>.</p>
            </div>
          </div>
        </div>
      </div>

    </aside >
  )
}
