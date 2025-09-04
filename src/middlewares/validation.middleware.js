import { userIdSchema } from "../schema/user.schema.js";
import { bookIdSchema } from "../schema/book.schema.js";
import { loanIdSchema } from "../schema/loan.schema.js";

const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        res.status(400).json({
            error: error.errors
        });
    }
}

const validateUserId = (req, res, next) => {
    try {
        const userId = +req.params.id
        userIdSchema.parse({ userId: userId });
        next();
    } catch (e) {
        res.status(400).json({
            error: e.errors
        });
    }
}
// oque a funcao paser faz?
// ela valida o que esta sendo passado para ela
// se estiver tudo certo ela deixa passar
// oque é um schema?
// é um modelo de dados
// o que é um modelo de dados?
// é uma estrutura que define como os dados devem ser organizados e validados

const validateBookId = (req, res, next) => {
    try {
        bookIdSchema.parse({ bookId: +req.params.id});
        next()
    } catch (e) {
        res.status(400).json({ error: e.errors})
    }
}

const validateLoanId = (req, res, next) => {
    try {
        loanIdSchema.parse({ loanId: +req.params.id});
        next()
    } catch (e) {
        res.status(400).json({ error: e.errors})
    }
}

export { validate, validateUserId, validateBookId, validateLoanId }