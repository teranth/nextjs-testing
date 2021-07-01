import Link from "next/link";
import Head from "next/head";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
