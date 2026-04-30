// ! OTP generation
function generateOtp(){
    let text = "1234567890qwertyuioplkjhgfdsazxcvbnm"
    let otp = ''

    for(let i=1;i<=4;i++){
        otp += text[Math.floor(Math.random()*text.length)];  //3729
    }
    alert(`The OTP is ${otp}`)
}

generateOtp() 
