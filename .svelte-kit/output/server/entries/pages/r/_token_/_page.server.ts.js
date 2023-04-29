async function referrerData(token) {
  const url = "http://localhost:3000/api/referrer?" + new URLSearchParams({ token });
  console.log(token);
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error("json...");
  }
}
async function load({ params }) {
  if (!params?.token)
    ;
  const data = await referrerData(params.token);
  return {
    referrerData: {
      ...data
    }
  };
}
export {
  load
};
