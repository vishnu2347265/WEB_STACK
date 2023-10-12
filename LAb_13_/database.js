import mysql from 'mysql2';
import 'dotenv/config'
const pool=mysql.createPool({
 host:process.env.MYSQL_HOST,
 user:process.env.MYSQL_USER,   
 password:process.env.MYSQL_PASSWORD,
 database:process.env.MYSQL_DATABASE,
}).promise();

async function getNotes()
{
    const[rows] = await pool.query("select * from notes2");
    return rows;
}

async function getNote(id)
{
    const[rows] = await pool.query(`select * from notes2 where id=?`,[id]);
    return rows[0];
}
async function createNote(title,contents)
{
    const[result] = await pool.query(`insert into notes2(title,contents) values(?,?)`,[title,contents]);
    const id=result.insertId;
    return getNote(id);
}

async function deleteNote(id) {
    const [result] = await pool.query('DELETE FROM notes2 WHERE id = ?', [id]);
    // Check the result object for success or error
    if (result.affectedRows === 1) {
      return 'Note deleted successfully';
    } else {
      return 'Note not found or deletion failed';
    }
  }

  async function updateNote(id, newTitle, newContents) {
    const [result] = await pool.query('UPDATE notes2 SET title = ?, contents = ? WHERE id = ?', [newTitle, newContents, id]);
    
    // Check the result object for success or error
    if (result.affectedRows === 1) {
      return 'Note updated successfully';
    } else {
      return 'Note not found or update failed';
    }
  }
  
  const result=await updateNote(3,'Roses','A Rose is a Rose');
  const notes= await getNotes();
  console.log(notes);
   
  



// const notes= await getNotes();
console.log(notes);

const note=await getNote(2);
console.log(note);

const resultC=await createNote('My Lovely Post','My Lovely Morning');
console.log(resultC);

const resultD=await deleteNote(2);
// const notes= await getNotes();
 console.log(notes);
