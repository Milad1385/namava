import { hash, compare, genSalt } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

const hashPassword = async (password) => {
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
};

const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

const generateAccessToken = (data) => {
  const token = sign(
    { ...data },
    process.env.NEXT_PUBLIC_AccessTokenSecretKey,
    {
      expiresIn: "5d",
    }
  );
  return token;
};

const verifyAccessToken = (token) => {
  try {
    const tokenPayload = verify(
      token,
      process.env.NEXT_PUBLIC_AccessTokenSecretKey
    );
    return tokenPayload;
  } catch (err) {
    return false;
  }
};

// const generateRefreshToken = (data) => {
//   const token = sign({ ...data }, process.env.NEXT_PUBLIC_RefreshSecretKey, {
//     expiresIn: "5d",
//   });
//   return token;
// };

// const verifyResfreshToken = (token) => {
//   try {
//     const tokenPayload = verify(
//       token,
//       process.env.NEXT_PUBLIC_RefreshSecretKey
//     );
//     return tokenPayload;
//   } catch (err) {
//     return false;
//   }
// };

export { hashPassword, verifyPassword, generateAccessToken, verifyAccessToken };
