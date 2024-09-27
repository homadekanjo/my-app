import Link from "next/link";
import "./page.css";
import Users from "./components/Users";
export const metadata = {
  title :'Hello world'
}

export default function Home() {
  return (
    <>
      <h2>hello wrold</h2>
      <Link href="/branches">
      <button>forward me to branches</button>
      </Link>
      <Users/>
    </>
  );
}
