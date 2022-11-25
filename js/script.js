setInterval(() => {


    const relogio = document.querySelector('.relogio');

    let sec = new Date().getSeconds();
    let mim = new Date().getMinutes();
    let hr = new Date().getHours();

    let dia = hr >= 12 ? 'PM' : 'AM'; 
    
    sec < 10 ? sec = '0' + sec : sec;
    mim < 10 ? mim = '0' + mim : mim;
    hr < 10 ? hr = '0' + hr : hr;

    relogio.textContent = hr + ':' + mim + ':' + sec +' '+ dia;

}, 1000);