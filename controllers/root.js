import { Router } from 'express';

const router = Router();

router.get('*', (req, res) => {
    res.sendFile(`${ROOT}/dist/index.html`);
});

export default router;
