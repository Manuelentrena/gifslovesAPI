import jwt from "jsonwebtoken";

export default function createToken(id) {
  /* Creamos payload del JWT */
  const payload = { id };
  /* Firmar el JWT */
  const privateKey = process.env.SECRET;
  try {
    return jwt.sign(payload, privateKey, { expiresIn: 3600 });
  } catch (error) {
    return error;
  }
}
