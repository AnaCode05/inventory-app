import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from '@/components/Navbar';
import AddItemForm from "@/components/Form";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function AddItem() {
  return (
    <>
      <Head>
        <title>Add Item</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <h1>Add an Item</h1>
          
          <AddItemForm/>
          
        </main>

        <Navbar/>
      </div>
    </>
  );
}