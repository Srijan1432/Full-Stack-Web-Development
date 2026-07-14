function placedOrder(callback){
    console.log("Your payment is in progress...");

    setTimeout(()=> {
        console.log("Payment is successful");
        callback();
    }, 5000);
}

function processOrder(callback){
    console.log("Your order is start preparing...");

    setTimeout(()=> {
        console.log("Your order is ready");
        callback();
    }, 6000);
}


function displayOrder(callback){
    console.log("i'm your divivery partner, on the way");

    setTimeout(()=> {
        console.log("I have picked your order and on the way to deliver");
        callback();
    },3000);
}

function orderCompleted(){
    console.log("I reached your location.");

    setTimeout(()=> {
        console.log("Your order is delivered successfully");
    }, 5000);
}


placedOrder(() => {
    processOrder(() => {
        displayOrder(() => {
            orderCompleted();
        });
    });
});