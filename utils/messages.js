const moment =require('moment');
//moment is imported for message formating 
function formatMessage(username,text){
    return{
        username,
        text,
        time : moment().format('h :mm a')
    }
}
module.exports = formatMessage;
