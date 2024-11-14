//Async / Await

// const doWork = () =>{
//     return new Promise(resolve,reject =>{
//         setTimeout(()=>{
//             resolve('Promise Error !!');
//         },5000);
//     });
// };

// doWork().then((data) => {
//     console.log(data);
    
// })
// .catch((error)=>{
//     console.log(error);
// });


//url 

// console.log('Script loaded');

const dowork =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve('Work done')
            resolve('Promise Error')
        },3000)
    })
    
}

dowork()
.then((dat)=>{
    console.log(dat);
})
.catch((erro)=>{
    console.log(erro);
});

