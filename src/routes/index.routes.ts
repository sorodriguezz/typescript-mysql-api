import { Router } from 'express';

const router = Router();

router.route('/')
    .get((req, res) => res.json('Bienvenidos a mi API'));

export default router;