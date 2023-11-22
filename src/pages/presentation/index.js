import { motion } from "framer-motion"

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: () => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 3 ,
      type: "tween"
    }
  })
}

const Presentation = () => {
  return (
    <div className='flex flex-col items-center h-full text-white bg-[url("https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/marketing.png")]'>
      <div className='fixed bg-black opacity-80 h-full w-full top-0 bottom-0'></div>
      <header className='text-center my-6 mx-4 relative z-10'>
        <h1 className='font-bold text-2xl m-4'>Step Into Your Style, Define Your Stride</h1>
        <p className='text-blue-400 m-4'>
        Our campaign revolves around empowering men to express their unique style through our sneakers while embracing their individuality with confidence. "Step Into Your Style, Define Your Stride" encapsulates the idea that our sneakers are not just footwear but a statement of personal expression, comfort, and quality.
        </p>
      </header>
      <ol className='relative z-20 p-10 flex flex-col gap-6 items-center w-full'>
        <motion.li 
          className='checkpoint right'
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView= "animate"
          viewport={{once: true}}
        >
          <img width={20} height={20} className='timeline-Img' src='https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/marketing.png' alt='image' />
          <div className='timeline-container'>
            <h2 className="mb-1 font-semibold text-xl">Market Research and Persona Development</h2>
            <p>Understand your target audience by conducting in-depth market research. Identify the demographics, interests, and preferences of your potential customers. Create detailed buyer personas to guide your campaign.</p>
          </div>
        </motion.li>
        <motion.li 
          className='checkpoint left'
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView= "animate"
          viewport={{once: true}}
        >
          <img className='timeline-img object-cover rounded-full' src='https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/marketing.png' alt='image' />
          <div className='timeline-container'>
            <h2 className="mb-1 font-semibold text-xl">Engaging Visual Content</h2>
            <p>Leverage the power of visual content on social media. Invest in high-quality, engaging visuals and videos showcasing the versatility and style of your sneakers. User-generated content can also be a powerful tool to increase authenticity.</p>
          </div>
        </motion.li>
        <motion.li 
          className='checkpoint right'
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView= "animate"
          viewport={{once: true}}
        >
          <img className='timeline-img object-cover rounded-full' src='https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/marketing.png' alt='image' />
          <div className='timeline-container'>
            <h2 className="mb-1 font-semibold text-xl">Influencer Partnerships</h2>
            <p>Collaborate with influencers who align with your brand image and have a significant following in your target market. Authentic endorsements from influencers can create trust and drive sales.</p>
          </div>
        </motion.li>
        <motion.li 
          className='checkpoint left'
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView= "animate"
          viewport={{once: true}}
        >
        <img className='timeline-img object-cover rounded-full' src='https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/marketing.png' alt='image' />
          <div className='timeline-container'>
            <h2 className="mb-1 font-semibold text-xl">Social Media Contests and Giveaways</h2>
            <p>Run engaging contests and giveaways on platforms like Instagram and Twitter. Encourage users to share their unique sneaker styles or stories using a branded hashtag. This not only increases brand visibility but also fosters a sense of community.</p>
          </div>
        </motion.li>
        <motion.li
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView= "animate"
          viewport={{once: true}} 
          className='checkpoint right'
        >
        <img className='timeline-img object-cover rounded-full' src='https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/marketing.png' alt='image' />
          <div className='timeline-container'>
            <h2 className="font-semibold text-xl">Limited Edition Releases</h2>
            <p>Create a sense of urgency and exclusivity by introducing limited edition sneaker releases. This strategy can drive demand, increase excitement, and generate a buzz on social media.</p>
          </div>
        </motion.li>
        <motion.li
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView= "animate"
          viewport={{once: true}} 
          className='checkpoint left'
        >
          <img className='timeline-img object-cover rounded-full' src='https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/marketing.png' alt='image' />
          <div className='timeline-container'>
            <h2 className="font-semibold text-xl">Customer Engagement through Social Listening</h2>
            <p>Regularly monitor social media channels for mentions of your brand and engage with customers. Respond to queries, thank customers for positive feedback, and address concerns promptly. This builds a positive brand image and customer loyalty.</p>
          </div>
        </motion.li>
        <motion.li
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView= "animate"
          viewport={{once: true}} 
          className='checkpoint right'
        >
          <img className='timeline-img object-cover rounded-full' src='https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/marketing.png' alt='image' />
          <div className='timeline-container'>
            <h2 className="mb-1 font-semibold text-xl">Interactive Social Media Campaigns</h2>
            <p>Develop interactive campaigns that encourage user participation. This could include polls, quizzes, or challenges related to sneaker styling. User engagement is key to creating a strong community around your brand.</p>
          </div>
        </motion.li>
        <motion.li
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView= "animate"
          viewport={{once: true}} 
          className='checkpoint left'
        >
          <img className='timeline-img object-cover rounded-full' src='https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/marketing.png' alt='image' />
          <div className='timeline-container'>
            <h2 className="mb-1 font-semibold text-xl">Retargeting Ads</h2>
            <p>Implement retargeting ads on social media platforms to reach users who have shown interest in your products. Remind them of the unique features of your sneakers and incentivize them with special promotions to complete their purchase.</p>
          </div>
        </motion.li>
        <motion.li
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView= "animate"
          viewport={{once: true}} 
          className='checkpoint right'
        >
          <img className='timeline-img object-cover rounded-full' src='https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/marketing.png' alt='image' />
          <div className='timeline-container'>
            <h2 className="mb-1 font-semibold text-xl">Data Analysis and Optimization</h2>
            <p>Regularly analyze the performance of your social media campaigns using analytics tools. Adjust your strategy based on the data, focusing on what resonates most with your audience. Continuously optimize your campaigns for better results.</p>
          </div>
        </motion.li>
      </ol>
      
    </div>
  )
}

export default Presentation