// eslint-disable-next-line import/no-anonymous-default-export
export default async function (url, body, reqType, returnType) {
  const response = await fetch(
    `${url}`,

    {
      method: reqType, // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit

      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: body, // body data type must match "Content-Type" header
    }
  ).catch((error) => {
    console.log("ERROR: " + error);
    return null;
  });

  if (response.status == 200) {
    return response.json();
  }

  return null;
}
