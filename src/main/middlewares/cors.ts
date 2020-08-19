import { Request, Response, NextFunction } from 'express'

export const cors = (req: Request, res: Response, next: NextFunction): void => {
  res.set('accesss-control-allow-origin', '*')
  res.set('accesss-control-allow-methods', '*')
  res.set('accesss-control-allow-headers', '*')
  next()
}
