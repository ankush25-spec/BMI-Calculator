import React, { useState } from 'react'

const App = () => {
  const [weight, setweight] = useState('')
  const [height, setheight] = useState('')
  const [calculate, setcalculate] = useState('')
  const [category, setcategory] = useState('')
  const [suggestion, setsuggestion] = useState('')
  const [from, setfrom] = useState('#8C8C8C')
  const [mid, setmid] = useState('#FFFFFF')
  const [to, setto] = useState('#B08B8B')

  function calculator(e) {
    e.preventDefault()
    console.log(weight, height)

    let sol = (weight / (height ** 2)).toFixed(2)
    if (sol < 18.5) {
      setcategory('Under Weight')
      setsuggestion('Focus on yourself  Prioritize Nutrient-Dense Foods')
      setfrom('#B4633A')
      setmid('#D6A9A9')
      setto('#FCB045')
    } else if (sol < 24.9) {
      setcategory('Normal')
      setsuggestion('Very good, Choose Nutrient-Dense Foods')
      setfrom("#6EBA59")
      setmid('#FFFFFF')
      setto('#6EBA59')

    } else if (sol < 29.9) {
      setcategory('Over Weight')
      setsuggestion('Limit Processed Foods and Sugar')
      setfrom('#DE7C68')
      setmid('#D6A9A9')
      setto('#FC9745')

    } else {
      setcategory('Obese')
      setsuggestion('Consume Smaller Portions & Mindful Eating')
      setfrom('#A6412D')
      setmid('#D6A9A9')
      setto('#FC4545')
    }
    console.log(sol)
    setcalculate(sol)

    setheight('')
    setweight('')

  }

  return (
    <div
    style={{
      background: `linear-gradient(90deg, ${from} 0%, ${mid} 50%, ${to} 100%)`
    }}
    className='w-full h-screen flex justify-center items-center '>
      <div className='w-150 h-[90%] border border-black bg-white rounded-2xl py-5 px-5'>
        <h1 className='text-2xl font-medium underline text-center'>BMI calculator</h1>
        <form 
        onSubmit={(e) => {
              e.preventDefault()
              calculator(e)
            }}
            className='flex flex-col'>
          <label className='text-xl' htmlFor="weight">Weight :</label>
          <input
          required
            value={weight}
            onChange={(e) => {
              setweight(e.target.value)
            }}
            className='border-[1.5px] border-[#a7a6a6] h-12 rounded-2xl mt-4 px-3 text-[19px]' type="number" name="" id="weight" placeholder='Weight (kg)' />
          <label className='text-xl mt-10' htmlFor="height">Height :</label>
          <input
          required
            value={height}
            onChange={(e) => {
              setheight(e.target.value)
            }}
            className='border-[1.5px] border-[#a7a6a6] h-12 rounded-2xl mt-4 px-3 text-[19px]' type="number" id='height' placeholder='Height (m)' />
          <button
          type='submit' 
            
            className='bg-black text-white mt-10 py-2 cursor-pointer text-xl rounded-xl'>Calculate</button>
        </form>
        <h2 className='mt-10 text-xl flex'>Your BMI :{calculate && <p>{calculate} Kg/m<sup>2</sup></p>} </h2>
        <p className='mt-5 text-xl'>Category : {category}</p>
        <p className='mt-5 text-xl'>Suggestion : {suggestion}</p>
      </div>
    </div>
  )
}

export default App