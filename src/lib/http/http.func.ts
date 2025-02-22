import envConfig from '@/config/envConfig'
import {
  CustomRequestInit,
  ForbidenException,
  InternalServerException,
  NotFoundException,
  ResponseSuccessPayload,
  UnauthorizedException,
  UnprocessableEntityException,
} from './http.type'

const request = async <T>(
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  url: string,
  option?: CustomRequestInit,
) => {
  const body = option?.body ? JSON.stringify(option.body) : undefined
  const baseHeaders = {
    'Content-Type': 'application/json',
  }
  const baseUrl = option?.baseUrl ?? envConfig?.NEXT_PUBLIC_API_URL

  const fullUrl = url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`
  const res = await fetch(fullUrl, {
    ...option,
    method,
    body,
    headers: {
      ...baseHeaders,
      ...option?.headers,
    },
  })
  const payload = await res.json()
  if (res.ok) return payload as ResponseSuccessPayload<T>
  const { message } = payload as { message: string }
  switch (res.status) {
    case 401:
      throw new UnauthorizedException(message)
    case 403:
      throw new ForbidenException(message)
    case 404:
      throw new NotFoundException(message)
    case 422:
      throw new UnprocessableEntityException(message)
    case 500:
      throw new InternalServerException(message)
    default:
      throw new Error(message ?? 'Lỗi không xác định')
  }
}

export type HttpOption = Omit<CustomRequestInit, 'body'>
export const http = {
  get: <T>(url: string, option?: HttpOption) => request<T>('GET', url, option),
  post: <T>(url: string, body: any, option?: HttpOption) =>
    request<T>('POST', url, { ...option, body }),
  put: <T>(url: string, body: any, option?: HttpOption) =>
    request<T>('PUT', url, { ...option, body }),
  patch: <T>(url: string, body: any, option?: HttpOption) =>
    request<T>('PATCH', url, { ...option, body }),
  delete: <T>(url: string, option?: HttpOption) => request<T>('DELETE', url, option),
}
