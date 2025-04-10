import Form from 'next/form'
import React from "react";
import styles from "@/styles/Home.module.css";
 
function AddItemForm() {
  return (
    <Form action="/add_item" method="post" className={styles.form}>
      {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
        <div className={styles.ctas}>
            <label name="name">Item Name</label>
            <input type='text' name="name" for="name" />
        </div>

        <div className={styles.ctas}>
            <label name="category">Category</label>
            <input type='text' name="category" for="category" />
        </div>
       
        <div className={styles.ctas}>
            <label name="quantity">Quantity</label>
            <input type='number' name="quantity" for="quantity" min={0} />
        </div>
        
        <div className={styles.ctas}>
            <label name="price">Price</label>
            <input type='number' name="price" for="price" min={0} placeholder='$0.00' />
        </div>
        
        
        <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="/add_item"
              type="submit"
              rel="noopener noreferrer"
            >
              Submit
            </a>
            <a
              href="/"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Cancel
            </a>
          </div>
    </Form>
  );
}

export default AddItemForm;