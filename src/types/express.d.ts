// src/types/express.d.ts
import express from 'express';

declare global {
  namespace Express {
    export interface Request {
      user_id?: number; 
      username?: string;
    }
  }
}