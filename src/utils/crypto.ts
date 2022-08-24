import crypto from 'crypto';

const secret = 'Password used to generate key';
const algorithm = 'aes-256-ctr';
const hash = crypto.createHash('sha256');
const password = hash.update(String(secret));
const key = password.digest('base64').substr(0, 32);
const iv = Buffer.alloc(16, 0);

export const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

export const decrypt = (encrypted) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};
