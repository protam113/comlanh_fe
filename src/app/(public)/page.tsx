import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import FeaturedProduct from '@/components/FeaturedProduct'
import Stats from '@/components/Stats'
import Partners from '@/components/Partners'
import News from '@/components/News'
import Certifications from '@/components/Certifications'

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProduct />
      <Stats />
      <Partners />
      <News />
      <Certifications />
    </main>
  )
}
