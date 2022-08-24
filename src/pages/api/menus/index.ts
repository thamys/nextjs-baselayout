import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { AxiosError } from "axios";
import { API } from "../config";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse, next) => {
  const body = req.body;
  const response = await API.get("/menus");
  res.status(response.status).send(response.data);
});

export default router.handler({
  onError: (err: AxiosError, req, res) => {
    res.status(err.response.status).send(err.response.data);
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Endpoint não existe");
  },
});
