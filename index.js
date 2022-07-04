var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://id.many.win/id/verify?id=ไอดี&firstname=ชื่อจริง&lastname=นามสกุล&birthdate=วันเกิด&laser=เลขหลังบัตร',
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});