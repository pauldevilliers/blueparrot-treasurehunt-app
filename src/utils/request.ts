const BASE_URL = 'https://blueparrot-dev.phpbucket.net/api/v1';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
interface Headers {
  [key: string]: string;
}

const request = async (
  url: string,
  method: Method = 'GET',
  body: unknown = null,
  customHeaders: Headers = {}
) => {
  const headers = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };

  const options: RequestInit = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${BASE_URL}${url}`, options);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

const get = (url: string, headers?: Headers) =>
  request(url, 'GET', null, headers);
const post = (url: string, body: unknown, headers?: Headers) =>
  request(url, 'POST', body, headers);
const put = (url: string, body: unknown, headers?: Headers) =>
  request(url, 'PUT', body, headers);
const remove = (url: string, headers?: Headers) =>
  request(url, 'DELETE', null, headers);

export { request, get, post, put, remove };
