"use client"
import Link from "next/link";
import Router from "next/router";
import { useState, useEffect } from "react";
export default function Home() {
  const [todo, settodo] = useState("")
  const [list, setlist] = useState([])
  let submit = (e) => {
    e.preventDefault()
    if (todo.trim() === "")
      return;
    setlist([...list, todo])
    settodo("")
    console.log()
  }
  const deleteHandler = (i) => {
    let copy = [...list];
    copy.splice(i, 1);
    setlist(copy);
  }
  return (<div >
    {/* NAVIGATION BAR */}
    <div className="todo_box p-5 mt-10 ">
      <form action="" onSubmit={submit}>
        <input
          value={todo}
          onChange={(e) => {
            settodo(e.target.value)
          }

          }
          className="text-black pl-5 bg-white mr-5" type="text" name="text" id="" placeholder="Enter your todo" />
        <button className="bg-red "> Add </button>
        <div >
          {list.map((t, i) => {
            return <div key={i} className="tex-black">{t}

              <button className="bg-red-400"
                onClick={() => {
                  deleteHandler(i)

                }
                }


              >Delete</button>

            </div>
          })

          }







        </div>


      </form>
    </div>


  </div>

  );
}
