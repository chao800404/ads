export const parseEmail = (email:string)=> (/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(email)
export const parsePhoneNumb = (number:string)=> (/^09[0-9]{8}$/).test(number)