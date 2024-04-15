"use client"

import { useState } from 'react';

import Navbar from '../../components/navbar';
import QueryStats from '../../components/query-stats';

export default function Home() {

  let [keyword, setKeyword] = useState('Ford Europe');
  let [totalQueryResults, setTotalQueryResults] = useState('31,765');


  return (
    <div id="app-container" className="w-screen  grid grid-cols-12 mx-auto">

      <Navbar></Navbar>

      <main className='my-3 col-span-8 rounded bg-slate-900'>

      </main>

      <QueryStats keyword={keyword} totalQueryResults={totalQueryResults}></QueryStats>

    </div >
  )
}
