import fetch from "cross-fetch";
let _cachedKey: string | undefined;
let _host: string = "https://api.laterunless.com";
let _isDebug: boolean = false;
export function init(laterUnlessKey: string, host?: string) {
  _cachedKey = laterUnlessKey;
  if (host) _host = host;
}
export function setDebug(debug: boolean = true) {
  _isDebug = debug;
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
    debug,
  }: {
    id?: string;
    date: Date;
    url: string;
    headers?: { [key: string]: string };
    encoding?: "JSON" | "FORM";
    method?: "GET" | "POST";
    payload: { [key: string]: any };
    debug?: boolean;
  },
  laterUnlessKey?: string
) {
  if (typeof debug === undefined) debug = _isDebug;
  if (!laterUnlessKey) laterUnlessKey = _cachedKey;
  if (!laterUnlessKey) throw new Error("LaterUnless key must be set");
  const headerArr =
    headers &&
    Object.entries(headers).map(([key, value]) => ({
      Key: key,
      Value: value,
    }));
  const uri = `${_host}/add`;
  const init = {
    headers: {
      Authorization: `Bearer ${laterUnlessKey}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    method: "POST",

    body: JSON.stringify({
      id,
      date,
      headers: headerArr,
      encoding,
      method,
      url,
      payload: JSON.stringify(payload),
    }),
  };
  try {
    const response = await fetch(uri, init);
    if (response.status === 200) {
      const { id: resultId } = <{ id: string }>await response.json();
      return resultId;
    } else {
      if (debug)
        console.error(
          "LATERUNLESS DEBUG",
          {
            function: "send",
            type: "response error",
            message: response.statusText,
            uri,
          },
          init,
          response
        );

      throw new Error(response.statusText);
    }
  } catch (e) {
    if (debug)
      console.error(
        "LATERUNLESS DEBUG",
        { function: "send", type: "master error", message: e.message, uri },
        init,
        e
      );
    e.request = { uri, init };
    throw e;
  }
}
export async function sendWithoutWaiting(
  {
    id,
    date,
    url,
    headers,
    encoding = "JSON",
    method = "POST",
    payload,
    debug,
  }: {
    id: string;
    date: Date;
    url: string;
    headers?: { [key: string]: string };
    encoding?: "JSON" | "FORM";
    method?: "GET" | "POST";
    payload: { [key: string]: any };
    debug?: boolean;
  },
  laterUnlessKey?: string
) {
  if (typeof debug === undefined) debug = _isDebug;
  if (!id) throw new Error("id is required in fire-and-forget mode");
  if (!laterUnlessKey) laterUnlessKey = _cachedKey;
  if (!laterUnlessKey) throw new Error("LaterUnless key must be set");
  const headerArr =
    headers &&
    Object.entries(headers).map(([key, value]) => ({
      Key: key,
      Value: value,
    }));
  const uri = `${_host}/add`;
  const init = {
    headers: {
      Authorization: `Bearer ${laterUnlessKey}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    method: "POST",

    body: JSON.stringify({
      id,
      date,
      headers: headerArr,
      encoding,
      method,
      url,
      payload: JSON.stringify(payload),
    }),
  };
  try {
    fetch(uri, init);
    await new Promise<void>((r) => {
      setTimeout(() => {
        r();
      }, 25);
    });
    return id;
  } catch (e) {
    if (debug)
      console.error(
        "LATERUNLESS DEBUG",
        {
          function: "sendWithoutWaiting",
          type: "master error",
          message: e.message,
        },
        e
      );
    e.request = { uri, init };
    throw e;
  }
}
export async function cancel(id: string, laterUnlessKey?: string) {
  if (!laterUnlessKey) laterUnlessKey = _cachedKey;
  if (!laterUnlessKey) throw new Error("LaterUnless key must be set");

  const uri = `${_host}/cancel`;
  const init = {
    headers: {
      Authorization: `Bearer ${laterUnlessKey}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    method: "POST",

    body: JSON.stringify({
      id,
    }),
  };
  try {
    const response = await fetch(uri, init);
    if (response.status === 200) {
      const { id: resultId } = <{ id: string }>await response.json();
    } else {
      if (_isDebug) {
        console.error(
          "LATERUNLESS DEBUG",
          {
            function: "cancel",
            type: "response error",
            message: response.statusText,
            uri,
          },
          init,
          response
        );
      }
      throw new Error(response.statusText);
    }
    return true;
  } catch (e) {
    if (_isDebug) {
      console.error(
        "LATERUNLESS DEBUG",
        { function: "cancel", type: "master error", message: e.message, uri },
        init,
        e
      );
    }
    e.request = { uri, init };
    throw e;
  }
}
export async function listPage(
  lastCursor?: string,
  laterUnlessKey?: string
): Promise<
  [nextCursor: string | undefined, data: { id: string; date: Date }[]]
> {
  const uri = `${_host}/list`;
  const init = {
    headers: {
      Authorization: `Bearer ${laterUnlessKey}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      lastCursor,
    }),
    method: "POST",
  };
  try {
    const response = await fetch(uri, init);
    if (response.status === 200) {
      const result = <
        { nextCursor: string | undefined; data: { id: string; date: string }[] }
      >await response.json();
      return [
        result.nextCursor,
        result.data.map(({ id, date }) => ({ id, date: new Date(date) })),
      ];
    } else {
      const e = new Error(response.statusText);
      (<{ response: Response }>(<unknown>e)).response = response;
      throw e;
    }
  } catch (e) {
    if (_isDebug) {
      console.error(
        "LATERUNLESS DEBUG",
        { function: "listPage", type: "master error", message: e.message, uri },
        init,
        e
      );
    }
    e.request = { uri, init };
    throw e;
  }
}
export async function list(laterUnlessKey?: string) {
  if (!laterUnlessKey) laterUnlessKey = _cachedKey;
  if (!laterUnlessKey) throw new Error("LaterUnless key must be set");
  let data: { id: string; date: Date }[] = [];
  let lastCursor: string | undefined = undefined;
  let nextCursor: string | undefined = undefined;
  let results: { id: string; date: Date }[] | undefined;
  try {
    do {
      [nextCursor, results] = await listPage(lastCursor, laterUnlessKey);
      if (results) data.concat(results);
      lastCursor = nextCursor;
    } while (lastCursor);
  } catch (e) {
    if (_isDebug) {
      console.error(
        "LATERUNLESS DEBUG",
        { function: "list", type: "master error", message: e.message },
        e
      );
    }
    throw e;
  }
  return data;
}
