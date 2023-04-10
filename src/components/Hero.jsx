import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputerCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#1888cc]'/>
          <div className='w-1 sm:h-90 h-40 blue-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> Hi, I'm <span className='text-[#1888cc]'>Andrew</span></h1>
          <p className={`${styles.heroSubText} text-white-100`}>
          a web developer passionate about <br /> innovative applications that help <br /> businesses grow and thrive<br className='sm:block hidden'/>
          </p>
        </div>
      </div>
        <ComputerCanvas />
    </section>
  )
}

export default Hero