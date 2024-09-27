import { resolve } from "styled-jsx/css";
import "../page.css";
import Link from "next/link";
export default async function Branches() {
  await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve()
    },2000)
  })
  return (
    <>
      <h1>Branches</h1>
      <Link href="/">
      <button>go Home</button>
      </Link>
      
    </>
  );
}
