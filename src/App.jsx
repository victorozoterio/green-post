import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Victor Ozoterio"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
          />
          <Post author="Davy Jones" content="um novo post aqui" />
        </main>
      </div>
    </div>
  );
}
