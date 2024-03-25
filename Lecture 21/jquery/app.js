


// // // <!-- how can we select element  -->



// // console.log($('h1'))
// // // here $ is react like querySelectorAll

// // console.log($('.dev'));



// // // manipulate the elements
// // // .style in case of DOM is replaced by .css


// // let a = $('h1')

// // // a.css('color','red')
// // // a.css('backgroundColor','black')



// // // multiple properties
// // a.css({
// //     color : 'red',
// //     backgroundColor : 'black'
// // })


// // // access text

// // // console.log($('p').text())

// // // // updating the text

// // // console.log($('p').text('<em>divyanshu gupta</em>'))


// // // // text method is equivalent to textContent


// // console.log($('p').html())

// // console.log($('p').html('<em>Hello</em>'))


// // // manipulation of attribute

// // console.log($('a').text())

// // console.log($('a').attr('href','https://facebook.com'))


// // // selecting particular elements without any class and ID
// // $('h1:nth-of-type(3)').css('border','3px solid plum')

// // // for first we have keyword first
// // $('h1:first()').css('border','3px solid plum')



// // // if we want to change it without pseudo classes

// // $('h1').last().css('border','2px solid red')

// // // input manipulation






// console.log('//////////////////////////////////////')

// // console.log($('input').val())

// // class manipulation
// // addClass() , removeClass() , toggleClass() , hasClass()

// $('h1').first().addClass('first second dev') 

// $('h1').first().removeClass('second dev')

// $('h1').first().toggleClass('second');

// console.log($('h1').first().hasClass('second'));



// console.log('/////////////////')



// // events
// $('button').click(function(){
//     console.log('clicked');
// })


// // IMPORTANT

// // here the rules for this is not same as in JS
// // in jquery this points to the element over which the event is being triggered

// // this jis bhi li ko touch karenge uska color change ho jaaega to this point to particular point

// $('li').click(function(){
//     $(this).css('color','red');
// })


// // input 
// $('input').keyup(function(){
//     console.log($(this).val())
// })




// // addEventListner is replaced by on
// $('button').on('click',function(){
//     console.log(hey);
// })




// event object

// $('input').keypress('click',function(e){
//     if(e.which == 13){
//         console.log($(this).val())
//     }
// })














