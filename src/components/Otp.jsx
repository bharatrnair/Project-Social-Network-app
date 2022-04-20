import React from 'react'
import next from './../components/next.png'


const Otp = () => {
  return (
    <div className='mainContainer'>
        <div className="otpSection">
            <div className="otpDetailsSection">
                <p id='otp'>ENTER OTP</p>
                <div className="otpInput">
                    <input className='underline' type="text" maxLength={1} />
                    <input className='underline' type="text" maxLength={1}/>
                    <input className='underline' type="text" maxLength={1}/>
                    <input className='underline' type="text" maxLength={1}/>
            </div>
            <div className="messageSection">
                <p>Resend OTP</p>
            </div>
            <div className="nextButton">
                <img src={next} alt="" />

            </div>



        </div>
        </div>
        <div className="vectorSection">

        </div>
    </div>
  )
}

export default Otp