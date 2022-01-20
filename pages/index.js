import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Head>
        <title>Home | Next Movies</title>
      </Head>
      <h1>Hello {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
}
