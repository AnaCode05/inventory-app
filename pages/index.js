import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import InventoryList from "@/components/InventoryList";
<<<<<<< HEAD
=======

import { handler } from "./api/db"
>>>>>>> 85a2b9ec2843f85c2da17edb60c32443755e02a4

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
<<<<<<< HEAD
=======
          {/* Inventory Component */}
          <InventoryList/>
>>>>>>> 85a2b9ec2843f85c2da17edb60c32443755e02a4

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
