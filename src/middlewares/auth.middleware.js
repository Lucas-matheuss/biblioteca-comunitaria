import "dotenv/config";
import jwt from 'jsonwebtoken'
import userService from '../service/user.services.js';

export function authMiddleware(req, res, next) {
    const tokenHeader = req.headers.authorization
    if (!tokenHeader) {
        return res.status(401).json({ message: 'The Token was not informed!' });
    }

    const partsToken = tokenHeader.split(" ");
    if (partsToken.length !== 2) { 
        return res.status(401).send({ message: ' Invalid Token' });
    }

    const [scheme, token] = partsToken;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ message: 'Token malformatted' });
    }

    jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Invalid Token' });
        }

        const user = await userService.findUserByIdService(decoded.id);
        if (!user || !user.id)  {
            return res.status(401).send({ message: 'Invalid Token' });
        }

        req.userId = user.id;

        return next();
    })
}