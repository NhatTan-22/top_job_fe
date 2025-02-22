'use server'
// Tất cả các hàm ở đây đều chạy ở server
import { revalidatePath, revalidateTag } from 'next/cache'
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const serverRevalidateTag = async (tag: string | string[]) => {
  if (Array.isArray(tag)) for (const t of tag) revalidatePath(t)
  else revalidateTag(tag)
}

export const serverRevalidatePath = async (path: string | string[]) => {
  if (Array.isArray(path)) for (const p of path) revalidatePath(p)
  else revalidatePath(path)
}

export const serverRedirect = async (path: string) => {
  redirect(path)
}

export const serverRevalidatePathAndRedirect = async (path: string, query?: string) => {
  revalidatePath(path)
  redirect(`${path}${query ? `?${query}` : ''}`)
}

export const serverGetCookie = async (key: string) => {
  return cookies().get(key)?.value
}
export const serverSetCookie = async (
  ...args:
    | [key: string, value: string, cookie?: Partial<ResponseCookie>]
    | [options: ResponseCookie]
) => {
  cookies().set(...args)
}
export const serverDeleteCookie = async (key: string) => {
  cookies().delete(key)
}
export const serverHasCookie = async (key: string) => {
  return cookies().has(key)
}
