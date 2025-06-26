import React, { useState, useEffect } from 'react'
import '../NewCollection/NewCollection.css'
import Item from '../Item/Item'
import axios from 'axios'


const NewCollection = () => {
  const [new_collection, setNewCollection] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:4000/newcollections')
  //     .then((res) => res.json())
  //     .then((data) => setNewCollection(data))
  // }, [])
   useEffect(() => {
    const fetchCollections = async () => {
        const response = await axios.get('http://localhost:4000/newcollections');
        setNewCollection(response.data);
    };
    fetchCollections();
  }, []);
  
  return (
    <>
      <div className="new-collection">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collection-item">
          {new_collection.map((item, index) => {
            return <Item key={index} id={item.id}
              name={item.name} image={item.image}
              new_price={item.new_price} old_price={item.old_price} />
          })}
        </div>
      </div>
    </>
  )
}

export default NewCollection
