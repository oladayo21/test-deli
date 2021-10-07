const loginObj = {
  identifier: "apiuser@email.com",
  password: "apiUser2021",
}
const baseUrl = "http://localhost:1337"
async function getToken(user: typeof loginObj) {
  try {
    const repoData = await fetch("http://localhost:1337/auth/local",{
  method: "POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(user)
})
const data = await repoData.json()
return data.jwt
  } catch (error) {
    console.log(error)
  }
}
async function getOffers() {
  const offersJson = await fetch(`${baseUrl}/offers?_publicationState=preview`)
  const res = await offersJson.json()
  console.log(res)
}

console.log(await getOffers())

//Oladayo2021