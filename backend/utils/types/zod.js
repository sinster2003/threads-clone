const zod = require("zod");

const signupObject = zod.object({
    name: zod.string(),
    username: zod.string().min(2),
    email: zod.string().email(),
    password: zod.string().min(6),
});

const loginObject = zod.object({
    username: zod.string().min(2),
    password: zod.string().min(6),
});

module.exports = { loginObject, signupObject };