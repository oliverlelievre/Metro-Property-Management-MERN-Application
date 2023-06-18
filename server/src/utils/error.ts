export const createError = (status: number, message: string): Error => {
  const err = new Error();
  (err as any).status = status;
  err.message = message;
  return err;
};
