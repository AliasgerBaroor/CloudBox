import bcrypt from "bcrypt";

export const hashPassword = async (plainPassword) => {
    const saltRounds = 10; // Higher value means more hashing rounds (10 is common)
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    return hashedPassword;
  };

  export const checkPassword = async (plainPassword, hashedPassword) => {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
  };
  