import { JwtPayload } from "jsonwebtoken";

type SafeUser = {
    id: string;
    username: string;
    email: string;
    avatar?: string | null;
    createdAt: Date;
}

declare global {
    namespace Express {
        interface Request {
            userId?: JwtPayload & {
                userId: string;
            }
            workspaceId?:string
            user?:SafeUser
        }
    }
}

export {};