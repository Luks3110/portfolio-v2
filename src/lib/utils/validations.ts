const validateEmail = (email: FormDataEntryValue | null) => {
  if (!email || email instanceof File) return;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return emailRegex.test(email as string);
};

const validateMessage = (message: FormDataEntryValue | null, limit: number) => {
  if (!message || message instanceof File) return;

  return message?.length < limit;
};

export { validateEmail, validateMessage };
