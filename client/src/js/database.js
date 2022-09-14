import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to database');

  //connect to DB 
  const textDb = await openDB('text',1)
  //make new transaction, and set data of "readwrite"
  const tx = textDb.transaction('text','readwrite')
  //open object store
  const store = tx.objectStore('text')
  //use .put() method to pass in content
  const request = store.put({ id:1, value: content })
  //confirm teh data was added
  const result = await request 
  console.log('Data saved to the database', result)
}


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all from database')

  //connect to db
  const textDb = await openDB('text', 1)

  // make new transaction, and set data to 'readonly' 
  const tx = textDb.transaction('text', 'readonly')
  //open the object store
  const store = tx.objectStore('text')
  //use .getAll() method to grab all the content in DB
  const request = store.getAll()
  //confirm the data was fetched
  const result = await request
  console.log(result)
}

initdb();
