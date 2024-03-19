//Authentication
export const LOGIN = '/api/v1/auth/LoginWillOutWithRefreshToken';
export const REGISTER = '/api/v1/customers/register';

//getCustomer By Id
export const USERDETAIL = '/api/v1/customers';

//chuan doan
export const GETALLCATEGORY = '/api/v1/categorykeyword/list-keyword';
export const TRACUU = '/api/v1/chuandoan/by-list-keyword-id';

//category
export const GETALLCOURSE = '/api/v1/course/all';

//reset-password
export const RESETPASSWORD = '/api/v1/auth/reset-password';

// change-password
export const CHANGEPASSWORD = '/api/v1/auth/change-password';
// <<<<<<< dev_vi_v3
// =======
// export const GETALLCOURSE = 'api/v1/course';

// //chuan doan
// export const GETALLCATEGORY = '/api/v1/categorykeyword/list-keyword';
// export const TRACUU = '/api/v1/chuandoan/by-list-keyword-id';
// export const GETALLCOURSE = '/api/v1/course/all';

// //reset-password
// export const RESETPASSWORD = '/api/v1/auth/reset-password';

// // change-password
// export const CHANGEPASSWORD = '/api/v1/auth/change-password';
// >>>>>>> main

//PAYMENT SEND MAIL
export const PAYMENTSENDMAIL = 'api/v1/payment-send-mail';

//Get email to check exist
export const GETCUSTOMERBYEMAIL = '/api/v1/customers/email';

//Get Course Detail
export const GETCOURSEDETAIL = '/api/v1/course-detail';

//Customer
export const CRUDCUSTOMER = '/api/v1/customers';
export const REGISTERCUSTOMER = '/api/v1/customers/register';

//user waiting for premium
export const USERWAITFORPREMIUM = '/api/v1/admin-booking/users-are-waitng-for-premium';
//add booking
export const ADDBOOKING = '/api/v1/admin-booking/add';

// send-mail-by-doctor
export const SENDMAILDOCTOR = '/api/v1/send-mail-by-doctor';

//total booked
export const TOTALBOOKED = '/api/v1/admin-booking/users-are-booked-by-time';
