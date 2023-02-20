

import Todo from "./ToDo";
import styles from "./Home.module.css"
const getTodos = async () => {
  let todos = await fetch("http://localhost:3000/api/todo/list");
  return todos.json();
  
};
export default async function TodoList() {
  const { todos } = await getTodos();
  console.log(todos);
  return (
    <div>
      <ul className={styles.ul}>
        {todos.map((t:any) => {
          return (
            <li key={t.id} style={{ padding: "5px 0" }}>
              <Todo todo={t} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
