import React from 'react'
const Feature = () => {
  return (
    <div className="container grid place-items-center delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300">
      <div className="mt-3 w-[80vw] rounded-3xl h-[97vh] bg-[#FDF0E6]">
        <div className="mt-6 flex font-bold justify-center text-5xl">Let’s Grow together</div>
        <div className="flex justify-center mt-3 text-4xl">#peer-learning</div>
        <div className="flex justify-center gap-10 items-center mt-9">

            <div className="w-[30vw] bg-white h-[73vh] rounded-3xl p-6">
              <div className='text-3xl font-semibold'>#1OO Days Of Code</div>
              <div className='mt-5 text-xl text-[#6A6A6A]'>Our community promotes #100DaysOfCode promoting peer learning. Allowing the members to be consistent a way of holding them accountable for their day to day routine.</div>
              <div className="bg-[#FFEBDC] rounded-3xl mt-10">
                <img className='p-7' src="features_img/100days.png"></img>
              </div>
            </div>


          <div className="w-[30vw] bg-white h-[73vh] rounded-3xl p-6">
            <div className='text-3xl font-semibold'>No coding skills needed</div>
            <div className='mt-5 text-xl text-[#6A6A6A]'>No coding background the people in the community are supportive and will arise incase of need and help mentor of what roadmap they had followed to acheive the same.</div>
            <div className="bg-[#FFEBDC] rounded-3xl mt-10">
              <img className='p-7' src="features_img/nocode.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature