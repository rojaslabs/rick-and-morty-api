import axios from "axios";

export async function axiosGet(url) {
  try {
    const apiResponse = await axios.get(url)
    return apiResponse
  } catch(error) {
    return {error}
  }
}

// export async function simpleGet(url) {
//   try {
//     const apiResponse = await fetch(url).then((response) => response.json())
//     return apiResponse
//   } catch(error) {
//     return { error: 'se ha producido un error:' + error }
//   }
// }