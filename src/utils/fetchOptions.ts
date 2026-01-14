
export function data_Post<T, U>(data: T, url:U) {
  return {
    url: `${process.env.NEXT_PUBLIC_URL_PROD}${url}`,
    options: {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  };
}


export function data_get<U>( url: U) {
  return {
    url: `${process.env.NEXT_PUBLIC_URL_PROD}${url}`,
    options: {
      method: 'GET',
      credentials: 'include',
    },
  };
}
