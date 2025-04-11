import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import InventoryList from "@/components/InventoryList";

import { handler } from "./api/db"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Inventory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <h1>Inventory</h1>

          {/* InventoryList Component */}
          <InventoryList />
          {/* Inventory Component */}
          <InventoryList/>

          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="/add_item"
              rel="noopener noreferrer"
            >
              <Image
                src="/plus-circle-white.svg"
                alt="Plus sign"
                width={20}
                height={20}
              />
              Add Item
            </a>
          </div>
        </main>

        <Navbar />
      </div>
    </>
  );
}
