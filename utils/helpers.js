module.exports = {

    format_date: (date) => {
      
        const setFormat = new Date(date);
        const month = setFormat.getMonth();
        const day = setFormat.getDate();
        const year = setFormat.getFullYear();
        return `${month}/${day}/${year}`;
    
    
      }
  };