import Image from "next/image";
import ContactsBooks from "./components/ContactsBooks";
import TodoApp from "./components/todo-app";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      
      <h1>React Projects</h1>
      {/* <TodoApp /> */}
      <ContactsBooks />
    </div>
  );
}
