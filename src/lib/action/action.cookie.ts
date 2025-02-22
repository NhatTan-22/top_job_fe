import { AccessTokenPayload, decodeJwtToken } from '@/lib/jwt'
import { serverGetCookie, serverSetCookie } from './action.func'

export async function setCookieWithToken(name: string, token: string, value?: string) {
  const decode = decodeJwtToken(token)
  await serverSetCookie({
    httpOnly: true,
    secure: true,
    name,
    value: value ? value : token,
    expires: new Date(decode.exp * 1000),
  })
}

interface IRefreshToken {
  accessToken: string
  refreshToken: string
}

export async function updateRefreshToken(param: IRefreshToken) {
  const { accessToken, refreshToken } = param
  await setCookieWithToken('accessToken', accessToken)
  await setCookieWithToken('refreshToken', refreshToken)
}

export async function getAccessTokenPayload() {
  const accessToken = await serverGetCookie('accessToken')
  if (!accessToken) return null
  return decodeJwtToken(accessToken) as AccessTokenPayload
}
