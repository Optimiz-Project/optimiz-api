import type express from 'express';

export const baseRoute = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    res.json({
      status: "success",
      message: "You have successfully called this API. Please remain calm and look for solutions."
    });
  } catch (err) {
    next(err);
  }
}
