import { Router } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { RequestHandler } from 'express';

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  console.log('Incoming Data:', { email, password });
  try {
    const user = await User.findOne({ where: { email } });
    console.log('User Found:', user);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Password Valid:', isPasswordValid);
    if (!isPasswordValid) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const token = jwt.sign({ id: user.id, email: user.email }, 'secret-shhh', { expiresIn: '1h' });
    console.log('Generated Token:', token);
    res.status(200).json({ token });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
