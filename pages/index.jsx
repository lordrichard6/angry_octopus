import Head from "next/head";

import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Angry Octopus</title>
        <link rel="icon" href="/logo/angry_octopus.png" />
      </Head>

      <main className="background min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar />
      </main>
    </div>
  );
}
