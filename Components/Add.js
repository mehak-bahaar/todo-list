"use client";
import React, { useState } from "react";

const AddTasks = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submitHandler = (e) =>{
  e.preventDefault()
  setMainTask([...mainTask, {title,desc}])
  setDesc("")
  setTitle("")
  }
  const [mainTask, setMainTask] = useState([]);
  const deleteHandler = (i)=>{
    let newArr= [...mainTask]
    newArr.splice(i,1)
    setMainTask(newArr)
  }
  let renderTask = "No Task Available"
  if(mainTask.length>0){
     renderTask = mainTask.map((t, i) => {
      console.log(mainTask)
       return (
         <li key={i} className="flex items-center justify-between">
           {/* <div className="flex items-center justify-between bg-slate-300 g-10" key={i}> */}
             <h2 className="font-bold text-lg">{t.title}</h2>
             <p>{t.desc}</p>
           {/* </div> */}
             <button
             onClick={()=>{
              deleteHandler(i)
             }}
             className="bg-red-300 rounded-md p-3 shadow-md hover:scale-110 hover:ease-in-out duration-300 mb-3">Delete</button>
         </li>
       );
     });
  }
  return (
    <>
      <div className="w-full h-screen flex items-start justify-center">
        <div className="w-[60vw]   bg-white/60  rounded-md mt-[5vh] mb-[5vh] flex flex-col shadow-2xl ">
          <h1 className="text-center font-bold gradient-text text-transparent text-[4vw] pt-4 ">
            ADD TASK
          </h1>
          <form
            onSubmit={submitHandler}
            className="text-slate-900 opacity-100 m-[2vw] sm:text-[1.5vw] text-8px"
          >
            <label>
              <h3 className=" m-4 opacity-100">ADD TITLE</h3>
              <input
                className="opacity-100 ml-[1vw] mb-[.5vw] w-[50%] rounded-full p-2 shadow-lg"
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  // console.log(e.target.value);
                }}
              />
            </label>
            <label>
              <h3 className="opacity-100 m-4">ADD DESCRIPTION</h3>
              <input
                className="opacity-100  ml-[1vw] mb-[.5vw] w-[50%] rounded-full p-2 shadow-lg"
                type="text"
                placeholder="Enter Description"
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                  // console.log(e.target.value);
                }}
              />
            </label>
            <button className=" bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-tr py-[.5vw] px-[1vw]  ml-[15vw] rounded-md shadow-lg hover:scale-110 hover:ease-in-out duration-300 text-left text-white">
              Add Task
            </button>
          </form>
          <div className="p-7 w-[50vw] h-full bg-white/90 rounded-md my-[3vw] mx-[4vw] shadow-lg text-slate-800 ">
            <ul>{renderTask}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTasks;

// // AddTasks.js
// import React, { useState } from "react";
// import CompletedTasks from "/app/Tasks";

// const AddTasks = () => {
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [mainTask, setMainTask] = useState([]);
//   const [completedTasks, setCompletedTasks] = useState([]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     setMainTask([...mainTask, { title, desc }]);
//     setDesc("");
//     setTitle("");
//   };

//   const completeTask = (index) => {
//     const completedTask = mainTask[index];
//     setCompletedTasks([...completedTasks, completedTask]);

//     // Remove the completed task from the main task list
//     const updatedTasks = mainTask.filter((_, i) => i !== index);
//     setMainTask(updatedTasks);
//   };

//   const deleteHandler = (index) => {
//     let newArr = [...mainTask];
//     newArr.splice(index, 1);
//     setMainTask(newArr);
//   };

//   return (
//     <>
//       <div className="w-full h-screen flex items-start justify-center">
//         {/* ... (existing code) */}
//         <div className="p-7 w-[50vw] h-full bg-white/90 rounded-md my-[3vw] mx-[4vw] shadow-lg text-slate-800 ">
//           <h2 className="text-lg font-bold mb-3">Tasks</h2>
//           <ul>
//             {mainTask.length > 0 ? (
//               mainTask.map((t, i) => (
//                 <li key={i} className="flex items-center justify-between">
//                   <h2 className="font-bold text-lg">{t.title}</h2>
//                   <p>{t.desc}</p>
//                   <button
//                     onClick={() => completeTask(i)}
//                     className="bg-green-300 rounded-md p-3 shadow-md hover:scale-110 hover:ease-in-out duration-300 mb-3"
//                   >
//                     Complete
//                   </button>
//                   <button
//                     onClick={() => deleteHandler(i)}
//                     className="bg-red-300 rounded-md p-3 shadow-md hover:scale-110 hover:ease-in-out duration-300 mb-3"
//                   >
//                     Delete
//                   </button>
//                 </li>
//               ))
//             ) : (
//               <p>No tasks available.</p>
//             )}
//           </ul>
//         </div>

//         <CompletedTasks
//           completedTasks={completedTasks}
//           onDelete={(index) => {
//             const updatedTasks = [...completedTasks];
//             updatedTasks.splice(index, 1);
//             setCompletedTasks(updatedTasks);
//           }}
//         />
//       </div>
//     </>
//   );
// };

// export default AddTasks;

