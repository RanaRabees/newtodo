"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./Home.module.css"
async function addTodo(name, refresh) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });

  refresh();
}

export default function AddNewTodo() {
  const router = useRouter();
  let [name, setName] = useState("");
  return (
    <div>
      <input
      className={styles.input}
        placeholder="Add a todo"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        required
      />
      <button
      type="submit"
      className={styles.inputbtn}
        onClick={async () => {
          await addTodo(name, router.refresh);
          setName("");
        }}
      >
        Add
      </button>
      <br /><br /><br /><br />
    </div>
  );
}
