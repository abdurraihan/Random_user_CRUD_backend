import express from 'express';

const router = express.Router();

// import controllers

import {getAllUsers , createUser , getOneUser , updateUser  , deleteUser} from '../controllers/users.js';

// all routes in here are starting with /users ;



router.get('/',getAllUsers);

router.get('/:id', getOneUser);

router.post('/',createUser);

router.delete('/:id',deleteUser);

router.patch('/:id',updateUser);

export default router;