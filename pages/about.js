import Link from "next/link";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

export default function AboutPage() {
  return (
    <div>
      About us
      <br />
      <Link href="/">Home</Link>
    </div>
  );
}
