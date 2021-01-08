import fetch from "cross-fetch";
export async function send({
  id,
  date,
  url,
  headers,
  encoding = "JSON",
  method = "POST",
  payload,
  webhookKey,
}: {
  id?: string;
  date: Date;
  url: string;
  headers?: { [key: string]: string };
  encoding?: "JSON" | "FORM";
  method?: "GET" | "POST";
  payload: { [key: string]: any };
  webhookKey: string;
}) {
  const response = await fetch("https://rhdtth-api.certitude.tech/add", {
    headers: {
      Authorization: `Bearer ${webhookKey}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    method: "POST",

    body: JSON.stringify({
      id,
      date,
      headers,
      encoding,
      method,
      url,
      payload: JSON.stringify(payload),
    }),
  });
  if (response.status === 200) {
    const { id: resultId } = <{ id: string }>await response.json();
    return resultId;
  } else {
    throw new Error(response.statusText);
  }
}
export async function cancel(id: string, webhookKey: string) {
  const response = await fetch("https://rhdtth-api.certitude.tech/cancel", {
    headers: {
      Authorization: `Bearer ${webhookKey}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    method: "POST",

    body: JSON.stringify({
      id,
    }),
  });
  if (response.status === 200) {
    const { id: resultId } = <{ id: string }>await response.json();
  } else {
    throw new Error(response.statusText);
  }

  return true;
}
export async function list(webhookKey: string) {
  let data: { id: string; date: Date }[] = [];
  let lastCursor: undefined | string = undefined;
  do {
    const response = await fetch("https://rhdtth-api.certitude.tech/list", {
      headers: {
        Authorization: `Bearer ${webhookKey}`,
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        lastCursor,
      }),
      method: "POST",
    });
    if (response.status === 200) {
      const obj = <{ id: string; date: string }[]>await response.json();
      const ids = obj.map(({ id, date }) => ({ id, date: new Date(date) }));
      data.push(...ids);
    } else {
      throw new Error(response.statusText);
    }
  } while (lastCursor);
  return data;
}
