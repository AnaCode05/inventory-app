import React, { useState, useEffect } from "react";
// Importing CSS module for styling the table, etc.
import styles from "@/styles/Home.module.css";

function InventoryList() {
<<<<<<< HEAD
  // Local state to hold inventory data; initially an empty array.
  const [inventory, setInventory] = useState([]);
  // Local state to hold any error message encountered during fetching.
  const [error, setError] = useState(null);
  // Local state to indicate loading status; starts as true.
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch inventory data when the component mounts.
  useEffect(() => {
    // Define an asynchronous function to fetch the inventory from the API.
    async function fetchInventory() {
      try {
        // Send a GET request to the '/api/inventory' endpoint.
        const res = await fetch("/api/inventory");

        // If the response is not OK (status not in the 200-299 range), throw an error.
        if (!res.ok) {
          throw new Error("Failed to fetch inventory items");
        }

        // Parse the response as JSON data.
        const data = await res.json();
        // Update the inventory state with the retrieved data.
        setInventory(data);
      } catch (err) {
        // If an error occurs during fetching, update the error state with the error message.
        setError(err.message);
      }
      // After the fetch attempt, regardless of success or error, mark loading as complete.
      setLoading(false);
    }

    // Call the fetch function
    fetchInventory();
  }, []); // Empty dependency array ensures this runs only once when the component mounts.

  // While loading is true, show a loading message.
  if (loading) {
    return <div>Loading inventory...</div>;
  }

  // If an error occurred, display the error message.
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Once data is fetched and no error occurred, render the table with inventory data.
  return (
    <table className={styles.table}>
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
        {inventory.map((item) => (
          // Each inventory item gets rendered as a table row.
          <tr key={item.id}>
            {/* Display item's id */}
            <td>{item.id}</td>
            {/* Display item's name */}
            <td>{item.name}</td>
            {/* Display item's category */}
            <td>{item.category}</td>
            {/* Display item's quantity */}
            <td>{item.quantity}</td>
            {/* Display item's price */}
            <td>{item.price}</td>
            {/* Format the date_added field to a locale date string for readability */}
            <td>{new Date(item.date_added).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
=======
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
>>>>>>> 642be528110e4ea4a4089001706998104bbfd991
}

// Exporting the InventoryList component for use in other parts of the application.
export default InventoryList;
