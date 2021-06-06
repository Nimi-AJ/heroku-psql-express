import client from '../database/dindex.js';

export const getUsers = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM players');

    if (response) {
      return res.status(200).json({ status: 'success', data: response.rows });
    }
  } catch (err) {
    console.log(err);
  }
};

// const createUser = async(request, response) => {
//   try{
//       const {name, email} = request.body;
//       let check = await pool.query('INSERT into players (name, email) VALUES ($1, $2) RETURNING *', ['myname', 'this']) 
//       response.status(201).json(check.rows);
//   } catch(e){
//       console.log(e);
//   }
// }

// export const createUser = async (req, res) => {
//   try{
//     const response = await client.query('INSERT into <table name>');
//   } catch(err){
//     console.log(error);
//   }
// }

// export const updateUser = async (req, res) => {
//   try{
//     const response =await client.query('');
//   } catch(err) {
//     console.log(err);
//   }
// }

// export const deleteUser = async (req, res) => {
//   try{
//     const response = await client.query('');
//   } catch(err) {
//     console.log(err);
//   }
// }