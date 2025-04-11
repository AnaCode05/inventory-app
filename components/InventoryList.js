import React from "react";
import styles from "@/styles/Home.module.css";

function InventoryList() {
    return (<>
         <table style={styles.table}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Item Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Date Added</th>
                </tr>
            </thead>
            <tbody>
                {/* { inventory.forEach(item => {  */}
                    <tr>
                        <td>item.id</td>
                        <td>item.name</td>
                        <td>item.category</td>
                        <td>item.quantity</td>
                        <td>item.price</td>
                        <td>item.date_added</td>
                    </tr>
                {/* })} */}
            </tbody>
         </table>
    </>);
}

export default InventoryList;