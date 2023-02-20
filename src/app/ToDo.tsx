

// function ToDo() {
//   return (
//     <>
//       <input type="checkbox" onChange={() =>{}} />
//       {t.name}

//     </>
//   )
// }

// export default ToDo


"use client";

import { useRouter } from "next/navigation";
import styles from "./Home.module.css"
async function update(id, isDone, refresh) {
  await fetch(`/api/todo/update`, {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });

  // refresh();
}

async function deleteTodo(id, refresh) {
  await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });

  refresh();
}

export default function Todo({ todo }) {
  const router = useRouter();

  return (
    <>
      <input
        className={styles.checkbtn}
        placeholder="Enter todo name"
        type="checkbox"
        onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
        checked={todo.isDone}
        required
      />
      <span>{todo.name}</span>
      <button
      type="submit" className={styles.delete} onClick={() => deleteTodo(todo.id, router.refresh)}>
        Delete
      </button>
    </>
  );
}
