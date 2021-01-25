var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    tDate = d.getDate();
    hRotation = 30 * htime + mtime / 2;
    mRotation = 6 * mtime;
    sRotation = 6 * stime;

    hour.style.transform = `rotate(${hRotation}deg)`
    minute.style.transform = `rotate(${mRotation}deg)`
    second.style.transform = `rotate(${sRotation}deg)`
    document.getElementById("month").innerHTML = months[d.getMonth()];
    document.getElementById("date").innerHTML = d.getDate();
}, 1000);