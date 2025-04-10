import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

function Navbar() {
    return (
    <footer className={styles.footer}>
      <a
        href="/"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Inventory
      </a>
      <a
        href="/add_item"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/plus-circle.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Add Item
      </a>
      <a
        href="/ledger"
        // target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/clipboard-text.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Ledger
      </a>
    </footer>
  );
}

export default Navbar;
