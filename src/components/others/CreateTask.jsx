import React from 'react'

const CreateTask = () => {
  return (
    <div className=" text-white text-left mt-14 font-semibold flex justify-center items-center p-10  ">
        <form className="flex-col bg-zinc-800 p-7 rounded-lg" action="">
          <h3 className="text-2xl mb-2 bg-transparent">Task Title</h3>
          <input
            className="bg-zinc-500/30 border-3 mb-3 border-white rounded-md px-2 py-1"
            size={40}
            type="text"
            placeholder="Make a Task"
          />
          <h3 className="text-2xl mb-2 bg-transparent">Description</h3>
          <textarea
            className="rounded-lg bg-zinc-500/30 py-1 px-2"
            rows={4}
            cols={44}
            name=""
            id=""
            placeholder="Describe here about project."
          ></textarea>
          <h3 className="text-2xl mb-2 bg-transparent">Date</h3>
          <input
            className="bg-zinc-500/30 border-3 mb-3 border-white rounded-md px-2 py-1"
            type="date"
            size={40}
            name=""
            id=""
          />
          <br />
          <h3 className="text-2xl mb-2 bg-transparent">Asign to</h3>

          <input
            className="bg-zinc-500/30 border-3 mb-3 border-white rounded-md px-2 py-1"
            type="text"
            size={40}
            placeholder="emp. Name"
          />
          <h3 className="text-2xl mb-2 bg-transparent">Category</h3>
          <input
            className="bg-zinc-500/30 border-3 mb-3 border-white rounded-md px-2 py-1"
            type="text"
            size={40}
            placeholder="Design, dev etc"
          />
          <br />
          <button className="bg-green-600 px-3 py-2 rounded-lg">
            Create Task
          </button>
        </form>
      </div>
  )
}

export default CreateTask
