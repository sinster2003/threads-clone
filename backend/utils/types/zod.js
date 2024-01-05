const zod = require("zod");

const signupObject = zod.object({
  name: zod.string(),
  username: zod.string().min(2),
  email: zod.string().email(),
  password: zod.string().min(6),
});

signupObject.required();

const loginObject = zod.object({
  username: zod.string().min(2),
  password: zod.string().min(6),
});

loginObject.required();

const createPostObject = zod.object({
  postedBy: zod.string(),
  text: zod.string().max(500),
});

createPostObject.required();

module.exports = { loginObject, signupObject, createPostObject };
