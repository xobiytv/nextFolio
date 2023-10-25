'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { product } from '../constants';
import { fadeIn, staggerContainer, zoomIn, textContainer } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
     <motion.p
        variants={textContainer}
        className="font-normal text-center text-[14px]
      text-secondary-white"
      >
        | Hizmatlarimiz
      </motion.p>

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-bold md:text-[54px]  text-[40px]
          text-center text-[#fff] mb-6 "
      >
        Sizga qanday yechimlar taklif qila olamiz
      </motion.p>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
     
      {/* <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >

      

        <div className="feedback-gradient" />
       
       
      </motion.div> */}

      {product.map((produc, id) => (
        <motion.div key={id}
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex items-center justify-start flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] "
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[22px] sm:leading-[40px] leading-[36px] text-[#fff] ">
              {produc.title}
            </h4>

          </div>

          <p className="mt-[24px] font-normal sm:text-[20px] text-[18px] sm:leading-[45px] leading-[25px] text-[#fff] ">
            “ {produc.text} ”
          </p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Feedback;
