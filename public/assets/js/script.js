function msToTime(miliseconds, format) {
    var days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;
    
    total_seconds = parseInt(Math.floor(miliseconds / 1000));
    total_minutes = parseInt(Math.floor(total_seconds / 60));
    total_hours = parseInt(Math.floor(total_minutes / 60));
    days = parseInt(Math.floor(total_hours / 24));
  
    seconds = parseInt(total_seconds % 60);
    minutes = parseInt(total_minutes % 60);
    hours = parseInt(total_hours % 24);
    
    switch(format) {
      case 's':
          return total_seconds;
      case 'm':
          return total_minutes;
      case 'h':
          return total_hours;
      case 'd':
          return days;
      default:
          return { d: days, h: hours, m: minutes, s: seconds };
    }
  };
    function fetchData() {
      fetch('https://api.statcord.com/v3/871348875301122078').then(response => {
        return response.json();
      }).then(data => {
        console.log(data.data[0].servers);
        let time = data.data[0].time;
        let count = msToTime(time);
        document.querySelector('.time').innerHTML = count.d + " Days ";
        document.querySelector('.server').innerHTML = `${data.data[0].servers}`
        console.log(data.data[0].users);
        document.querySelector('.user').innerHTML = `${data.data[0].users}`
      }).catch(error => {
        console.log(error);
      });
    }
  
    fetchData();


