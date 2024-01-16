"use server";

const validateEmail = (email: FormDataEntryValue | null) => {
  if (!email) return;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return emailRegex.test(email as string);
};

const validateMessage = (message: FormDataEntryValue | null, limit: number) => {
  if (!message) return;

  const stringMessage = message as string;

  return stringMessage?.length < limit;
};

export { validateEmail, validateMessage };
