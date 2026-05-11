
import { Request, Response, NextFunction} from "express";
import { z } from "zod";

export const validator = (schema: z.ZodTypeAny) => (req:Request,res:Response, next:NextFunction)=>{
    const checkInput = schema.safeParse(req.body)

    if(!checkInput.success){
        return res.status(400).json({
            message:"Invalid inputs",
            errors: checkInput.error
        })
    }


    next();
}