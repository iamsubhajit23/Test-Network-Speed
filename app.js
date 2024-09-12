function networkSpeedTest() {
    const speedMsg = document.querySelector("#speed-msg");
    const image = new Image();
    image.src = "https://via.placeholder.com/1024x1024.jpg?random=" + Math.random();
    const startTime = new Date().getTime();
    const fileSize = 500000; // filesize in bytes(5kb = 500000 bytes)

    image.onload = function () {
        const endTime = new Date().getTime(); // store end time of downloading an image
        const duration = (endTime - startTime) / 1000; // in seconds
        const bitsFile = fileSize * 8; // file in bits
       
        const speedBps = (bitsFile / duration).toFixed(2); // speed in bits per second
        const speedKBps = (speedBps / 1024).toFixed(2); // speed in KBps
        const speedMBps = (speedKBps / 1024).toFixed(2); // speed in MBps

        speedMsg.innerText = `Your Current Network Speed: ${speedMBps} MBps`;
        speedMsg.style.color = "rgb(58, 160, 58)";

    };
}
