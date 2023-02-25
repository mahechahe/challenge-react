
export const getUserRandom = async () => {
  const API_URL = import.meta.env.VITE_API_URL_USERRANDOM

  try {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data?.results[0]
  } catch (error) {
    return error.messsage
  }
}
