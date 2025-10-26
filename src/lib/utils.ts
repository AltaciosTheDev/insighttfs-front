
//custom handle if token throws error
export const getOrThrowAccessToken = async (
  getAccessToken: () => Promise<string | undefined>
) => {
  const token = await getAccessToken();
  if (!token) {
    throw new Error("No token from getAccessToken Kinde Function");
  }
  return token;
};
