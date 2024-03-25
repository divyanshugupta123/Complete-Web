
//galat tareeka shown 

// function step1(){
//     setTimeout(function(){
//         console.log('image select kar rha hu');
//         return 'image';
//     } , 4000)
// }


// function step2(image){
//     setTimeout(function(){
//         console.log(`sundar kar rha hu ${image} rukja`);
//         return 'sundr vaali foto';
//     } , 2000)
// }


// function step3(filteredImage){
//     setTimeout(function(){
//         console.log(`badiya sa caption on ${filteredImage}`);
//         return 'fotva peluss captionvaa dono'
//     } , 3000)
// }

// function step4(final){
//     setTimeout(function(){
//         console.log(` ${final} uploaded`)
//     } , 2000)
// }


// // calling
// let image = step1();
// let filteredImage = step2(image);
// let finalImage = step3(filteredImage);
// step4(finalImage);




// better tarika

// jab tak phla function khtm nahi hoga tb tk dusra na chle

function step1(fn) {
    setTimeout(function () {
        console.log('slecting image');
        // return 'image';
        fn('selected image')
    }, 4000);

}

function step2(image, cb) {
    setTimeout(function () {
        console.log(`applying filter to ${image}`);
        // return 'filtered image';
        cb('filtered image');
    }, 2000)
}

function step3(filteredImage, cb) {
    setTimeout(function () {
        console.log(`badiya sa caption on ${filteredImage}`);
        // return 'fotva peluss captionvaa dono'
        cb('filered with caption')
    }, 3000)
}

function step4(final) {
    setTimeout(function () {
        console.log(` ${final} uploaded`)
    }, 2000)
}

step1(function (image) {
    step2(image, function (filteredImage) {
        step3(filteredImage, function (finalImage) {
            step4(finalImage);
        });
    });
});

// this is called a callback function


// disadvantage : callback hell : when the size of our code grown towards horizontal direction 