function doPost(e){
  
  var sheet = SpreadsheetApp.openById('1KdMRRGXRbr5eyiGVdRfEPvbqAfzJDnKp5BLZeNC1TCw').getSheetByName('Going');
  var params = JSON.parse(e.postData.contents);  
  console.log(params)
  
  var today = Utilities.formatDate(new Date(), "JST", "yyyy/MM/dd");
  if (params.Out == "") {
    sheet.appendRow([params.ID, params.Name, today, params.Go, ""]);
  }
  
  if (params.Go == "") {
    sheet.appendRow([params.ID, params.Name, today, "", params.Out]);
  }
  
 }

