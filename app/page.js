"use client"
import { Sue_Ellen_Francisco } from 'next/font/google';
import React, { useState } from 'react'
const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask)
  }
  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1);
    setMainTask(copytask);
  }
  let renderTask = <h2> No Task Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex justify-between items-center mb-7'>
          <div className='flex items-center justify-between mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h4 className='text-lg font-medium'>{t.desc}</h4>

          </div>
          <button onClick={() => deleteHandler(i)} className='bg-red-400 text-white rounded px-4 py-2 font bold'>Delete</button>
        </li>

      )
    })
  }
  return (
    <>
      <h1 className='bg-black text-white font-bold p-5 text-5xl text-center'>Todo List</h1>

      <form onSubmit={submitHandler}>
        <input type="text"
          className='border-4 border-zinc-800 m-8 px-4 py-2 text-2xl'
          placeholder='Enter title here'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);

          }}
        />

        <input type="text"
          className='border-4 text-2xl border-zinc-800 m-8 px-4 py-2 '
          placeholder='Enter Description here'
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className='bg-black text-white  px-4 py-3 m-5 text-2xl font-bold rounded'>Add task</button>
      </form>
      <hr />
      <div className='bg-slate-200 p-8'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page
