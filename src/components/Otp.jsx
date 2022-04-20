import React from 'react'

const Otp = () => {
  return (
    <div className='mainContainer'>
        <div className="otpSection">
            <div className="otpDetailsSection">
                <p id='otp'>ENTER OTP</p>
                <div className="otpInput">
                    <input className='underline' type="text" />
                    <input className='underline' type="text" />
                    <input className='underline' type="text" />
                    <input className='underline' type="text" />
            </div>

        </div>
        </div>
        <div className="vectorSection">

        </div>
    </div>
  )
}

export default Otp