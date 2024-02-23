import {pool} from '../db.js'


export const home = (req, res) => res.render('home', {title: 'Home'});

export const login = (req, res)=> res.render('login', {title: 'Login'});

export const registro = (req, res)=> res.render("registro", {title: 'Registro'});

export const showUsers = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM users')
    res.json = (rows);

}

export const insertUsers = async (req, res)=> {
    const {nameuser, password} = req.body
    const [rows]= await pool.query('INSERT INTO users (nameuser, password) VALUES (?,?)', [nameuser, password]) 
    res.send({
        id:rows.insertId,
        nameuser,
        password,
    })
}

export const deleteUsers = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
        res.send({ message: rows.affectedRows === 1 ? 'Usuario eliminado exitosamente.' : 'Usuario no encontrado.' });
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).send({ message: 'Error interno del servidor.' });
    }
}