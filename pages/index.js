import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Hello World. <br />
      <Link href="/about">
        <a>About</a>
      </Link>
      <br />
      <Link href="/day/">
        <a>Day</a>
      </Link>
    </div>
  );
}
