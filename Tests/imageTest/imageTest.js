
setTimeout(5000);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const cw = canvas.width;
const ch = canvas.height;

var counter = 0;

ctx.fillStyle = "black";
ctx.strokeStyle = "black";

ctx.lineWidth = 1;

function imageData() {
    let canvas = document.createElement("canvas");
    let img = new Image();
    img.src = "test.png";

    img.onload = function() {

        //Calculate scale
        const sw = Math.floor(cw / img.width);
        const sh = Math.floor(ch / img.height);

        const iw = img.width;
        const ih = img.height;

        var scale = 1;

        if (sw >= sh) {
            scale = sh;
        }
        else{
            scale = sw;
        }

        canvas.width = img.width;
        canvas.height = img.height;

        canvas.style.width = img.width;
        canvas.style.height = img.height;

        let context = canvas.getContext("2d");
        context.drawImage(img,0,0);
        let imageData = context.getImageData(0,0, canvas.width, canvas.height);
        console.log(imageData.data);

        let pixelArray = getPixelArray(imageData);
        console.log("amount of black pixels:");
        console.log(pixelArray.length);


        var pixels = shuffle(pixelArray);

        //var interval = setInterval (function() {
        //    fill();
        //},1)

        let blocksize = Math.floor(pixels.length / 20);
        fillpartition(0);

        function fillpartition(lower){
            let end = lower + blocksize;

            if (end >= pixels.length){
                fillportion(lower + 1, pixels.length - 1);
                return;
            }

            fillportion(lower+1, end);
            setTimeout(function() {fillpartition(end)},100)
        }

        function fillportion(lower, upper){
            let len = upper - lower;
            for(let i = 0; i <= len; i++){
                fill(lower + i);
            }
        }

        function fill(ind){
            var data = pixels[ind];
            //counter++;
            ctx.fillRect(data.x * scale, data.y * scale, scale / 2, scale / 2);
            setTimeout(function() {
            ctx.fillRect(data.x * scale, data.y * scale, scale, scale);
            },500);
            
        
            //if (counter == pixels.length){
            //    clearInterval(interval);
            //}
        }

        function getPixelArray(imageData) {
            let data = imageData.data;
            let pixelArray = [];
            let l = data.length;
            let counter = 0;
            for(let h = 0; h < ih; h++){
                for(let w = 0; w < iw; w++){
                    pixel = data[counter];
                    counter += 4;
                    if(pixel==0){
                        pixelArray.push(Object.freeze({ x:w, y:h }))
                    }
                }
            }
        
            return pixelArray;
        }
    }

}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
