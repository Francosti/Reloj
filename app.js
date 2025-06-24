function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // console.log(date);
    // console.log(hh);
    // console.log(mm);
    // console.log(ss);

    // es para agregar el 0 cuando es un solo digito, igual con los de abajo
    hh = (hh < 10) ? "0" + hh : hh; 
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    
    let time = hh + ":" + mm + ":" + ss; // Arma el reloj
    let watch = document.querySelector("#watch")
    watch.innerHTML = time;
}
setInterval(currentTime, 1000)
