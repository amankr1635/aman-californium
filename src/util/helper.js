let today = new Date();
let dd = String(today.getDate());
let mm = String(today.getMonth() + 1); 
today =  dd + "/" + mm 

function getBatchInfo (){
    console.log("californium, W3D4, the topic for today is nodejs module system.")
}

module.exports.batchDetails = getBatchInfo
module.exports.currentDate = today