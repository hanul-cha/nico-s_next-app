import { useState } from "react"
import NavBar from "../components/NavBar";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <NavBar />
      <h1>Hello {count}</h1>
      <button onClick={() => setCount((prev) =>prev+1)}>+</button>
    </div>
  )
}
