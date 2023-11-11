import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '~ui/Button'

const Hero = () => {
  return (
    <section>
      <div className="bg-black text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="wrap-balance text-3xl md:text-5xl py-2 text-yellow-300 tracking-loose">পিরামিড বন্ধন</h1>
            <h2 className="text-3xl md:text-5xl wrap-balance leading-relaxed md:leading-snug mb-2">চলো গড়ি স্বপ্নের নীড়
            </h2>
            <p className="text-sm md:text-base wrap-balance text-gray-50 mb-4">
              একটি অরাজনৈতিক, আদর্শিক, অধুমপায়ী, মানবিক কল্যাণে সর্বদা নিয়জিত সৎ ও বৃহত্তর উদ্দেশ্যে স্থাপিত সামাজিক প্রতিষ্ঠান
            </p>

            <Link href="/login" className={buttonVariants({ variant: "outline" })}>
              নিবন্ধন
            </Link>


            <Link href="/login"
              className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
              নিবন্ধন
            </Link>
          </div>

          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
            <div className="h-48 flex flex-wrap content-center">
              <div>
                <Image width={205} height={257} alt='space' className=" mt-28 hidden xl:inline-block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png" /></div>
              <div>
                <Image width={324} height={436} alt='space' className="inline-block mt-24 md:mt-0 p-8 md:p-0" src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png" /></div>
              <div>
                <Image width={205} height={257} alt='space' className=" mt-28 hidden lg:inline-block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
