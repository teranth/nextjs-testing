import Link from "next/link";
import Layout from "../../components/layout";

export default function DayPage() {
  return (
    <div>
      <Layout />
      Hello Day
      <br />
      <Link href="/">Home</Link>
    </div>
  );
}
