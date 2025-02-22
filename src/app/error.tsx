'use client'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lỗi máy chủ',
  description: 'Trang này không tồn tại hoặc đã bị xóa, Chúng tôi đề nghị bạn quay lại trang chủ'
}

export default function PageError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className='flex items-center justify-center p-2 md:p-4 lg:p-8 h-screen'>
      <div className='flex flex-col items-center space-y-4'>
        <div className='w-[200px] md:w-[250px] lg:w-[300px]'>
          <Image
            className='w-full h-full max-w-full max-h-full'
            width={300}
            height={300}
            alt='server-error'
            src='/images/common/500.png'
          />
        </div>
        <h1 className='font-bold text-3xl'>Xin lỗi, đã có lỗi xảy ra</h1>
        <p className='text-gray-500 text-center font-semibold'>
          {error.message}
          <br />
          Vui lòng thử lại sau
        </p>
        <div className='flex gap-5'>
          <Button onClick={reset} size='lg'>
            Click để thử lại
          </Button>
          <Link href='/home' passHref>
            <Button size='lg' variant='destructive'>
              Trang chủ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
