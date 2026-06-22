import jwt from 'jsonwebtoken';
import 'dotenv/config';
import userRepository from '../repositories/user.repositories.js';
import bcrypt from 'bcrypt';


function generateTokenJWT (id) {
    return jwt.sign (
        {id},
        process.env.SECRET_JWT,
       { expiresIn: '8640000' } // 24 hours
    )
}

async function loginService (email, password) {
    const user = await userRepository.findUserByEmail(email);
    if (!user) throw new Error('Invalid user!');
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw new Error('Invalid user!');
    return generateTokenJWT(user.id);
}

export {generateTokenJWT, loginService};