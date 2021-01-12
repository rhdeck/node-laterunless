import fetch from "cross-fetch";
let _cachedKey: string | undefined;
let _host: string = "https://api.laterunless.com";
export async function init(laterUnlessKey: string, host?: string) {
  _cachedKey = laterUnlessKey;
  if (host) _host = host;
}

export async function send(
  {
    id,
    date,
    url,
    headers,
    encoding = "JSON",
    method = "POST",
    payload,
  }: {
    id?: string;
    date: Date;
    url: string;
    headers?: { [key: string]: string };
    encoding?: "JSON" | "FORM";
    method?: "GET" | "POST";
    payload: { [key: string]: any };
  },
  laterUnlessKey?: string
) {
  if (!laterUnlessKey) laterUnlessKey = _cachedKey;
  if (!laterUnlessKey) throw new Error("LaterUnless key must be set");
  const response = await fetch(`${_host}/add`, {
    headers: {
      Authorization: `Bearer ${laterUnlessKey}`,
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
export async function cancel(id: string, laterUnlessKey?: string) {
  if (!laterUnlessKey) laterUnlessKey = _cachedKey;
  if (!laterUnlessKey) throw new Error("LaterUnless key must be set");
  const response = await fetch(`${_host}/cancel`, {
    headers: {
      Authorization: `Bearer ${laterUnlessKey}`,
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
export async function listPage(
  lastCursor?: string,
  laterUnlessKey?: string
): Promise<
  [nextCursor: string | undefined, data: { id: string; date: Date }[]]
> {
  const response = await fetch(`${_host}/list`, {
    headers: {
      Authorization: `Bearer ${laterUnlessKey}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      lastCursor,
    }),
    method: "POST",
  });
  if (response.status === 200) {
    const result = <
      { nextCursor: string | undefined; data: { id: string; date: string }[] }
    >await response.json();
    return [
      result.nextCursor,
      result.data.map(({ id, date }) => ({ id, date: new Date(date) })),
    ];
  } else {
    throw new Error(response.statusText);
  }
}
export async function list(laterUnlessKey?: string) {
  if (!laterUnlessKey) laterUnlessKey = _cachedKey;
  if (!laterUnlessKey) throw new Error("LaterUnless key must be set");
  let data: { id: string; date: Date }[] = [];
  let lastCursor: string | undefined = undefined;
  let nextCursor: string | undefined = undefined;
  let results: { id: string; date: Date }[] | undefined;
  do {
    [nextCursor, results] = await listPage(lastCursor, laterUnlessKey);
    if (results) data.concat(results);
    lastCursor = nextCursor;
  } while (lastCursor);
  return data;
}
