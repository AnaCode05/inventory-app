import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from '@/components/Navbar';
import TransactionList from "@/components/TransactionList";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Ledger() {
  return (
    <>
      <Head>
        <title>Ledger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <h1>Ledger</h1>

          {/* Ledger Component */}
          <TransactionList/>

        </main>
        
        <Navbar/>
      </div>
    </>
  );
}