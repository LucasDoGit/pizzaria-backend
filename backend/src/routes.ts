import { Router, Response, Request } from "express";

const router = Router();

router.get("/teste", (req: Request, res: Response) => {

    res.json({ ok: true })
})

export { router }