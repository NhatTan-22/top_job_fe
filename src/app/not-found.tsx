import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Không tìm thấy trang',
  description: 'Trang này không tồn tại hoặc đã bị xóa, Chúng tôi đề nghị bạn quay lại trang chủ'
}

export default function PageNotFound() {
  return (
    <div className='flex items-center justify-center p-2 md:p-4 lg:p-8 h-screen'>
      <div className='flex flex-col items-center space-y-4'>
        <div className='w-[200px] md:w-[250px] lg:w-[300px]'>
          <Image
            className='w-full h-full max-w-full max-h-full'
            width={300}
            height={300}
            alt='404-notfound'
            src='/images/common/404.svg'
          />
        </div>
        <h1 className='font-bold text-3xl'>Rất tiếc! Không tìm thấy trang</h1>
        <p className='text-gray-500 text-center font-semibold'>
          Trang này không tồn tại hoặc đã bị xóa, <br /> Chúng tôi đề nghị bạn quay lại trang chủ
        </p>
        <Link href='/home'>
          <Button size='lg'>Quay lại trang chủ</Button>
        </Link>
      </div>
    </div>
  )
}
