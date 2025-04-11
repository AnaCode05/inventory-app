import React from "react";
import styles from "@/styles/Home.module.css";

function TransactionList() {
    return (<>
         <table style={styles.table}>
            <thead>
                <tr>
                    <th>Operation Type</th>
                    <th>Item Name</th>
                    <th>Category</th>
                    <th>Previous Quantity</th>
                    <th>New Quantity</th>
                    <th>Previous Price</th>
                    <th>New Price</th>
                    <th>Timestamp</th>
                </tr>
            </thead>
            <tbody>
                {/* transactions.forEach(transaction => { */}
                    <tr>
                        <td>transaction.operation_type</td>
                        <td>transaction.item_name</td>
                        <td>transaction.category</td>
                        <td>transaction.previous_quantity</td>
                        <td>transaction.new_quantity</td>
                        <td>transaction.previous_price</td>
                        <td>transaction.new_price</td>
                        <td>transaction.timestamp</td>
                    </tr>
                {/* }); */}
            </tbody>
         </table>
    </>);
}

export default TransactionList;