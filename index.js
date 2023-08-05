// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  function superbowlWin(record){

  let newRecord = record.find(function(value){
    return value.result === 'W';
    });
   // console.log(newRecord);

   if(newRecord){

    return newRecord.year;
   }else{

    return undefined;
   }
    
  }
  
  console.log(superbowlWin(record));