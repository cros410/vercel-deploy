// src/types/express.d.ts
// import { Request } from 'express';
import * as express from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user_id?: number;
    username?: string;
  }
}
