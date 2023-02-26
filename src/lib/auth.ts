export function hashPassword(password: string) {
  return new Promise<string>((resolve) => {
    resolve(`hashed-${password}`);
  });
}
