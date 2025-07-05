import Link from "next/link";

export default function Show() {
    return (
        <div>
            <h1>Client - Show</h1>
            <Link href="/">Home</Link>
            <br/>
            <Link href="/client/12345">Client 12345</Link>
        </div>
    );
}