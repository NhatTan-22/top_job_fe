export interface JwtPayload {
  id: number
  iat: number
  exp: number
}

export interface AccessTokenPayload extends JwtPayload {}
