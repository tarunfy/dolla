import Head from "next/head";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Navbar />
    </>
  );
}
