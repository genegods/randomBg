import React, {useState} from 'react'

const MainPage = () => {

    const [changeColor, setChangeColor] =useState('#451252')

    // function to changeColor
    const handleClick = () => {
        const randomColors =  '#' + Math.random().toString(16).slice(2,8)
        setChangeColor(randomColors)
    }
    console.log('color', changeColor)
  return (
    <React.Fragment>
    <section>
      <div className="h-screen centered">
          <button
          style={{backgroundColor:`${changeColor}`}}
          onClick={handleClick}
          className='px-20 py-10 text-white text-3xl capitalize font-bold rounded-lg'
          >random color</button>
      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage