// quntity

var qun=0;
function add(){
    if (Number(qun>=10))
    window.alert(" Sorry, Not Available")
    else{
        qun++;
        updateDisplay()
    }
}
function min(){

    if (qun>0)
    qun--;
    updateDisplay()
}

function updateDisplay(){
    
    document.getElementById('qun').innerHTML=qun

}

// output


function output(){
    var inp= document.getElementById('inp1').value;
    var inp1=document.getElementById('inp').value;
    if( inp =="zukun"){
        document.getElementById('confirm').innerHTML="Your Order will be delivered";
        var total = parseInt(qun*80);
        document.getElementById('total').innerHTML="Amount"+" "+"was"+" "+total+" "+"Paid"
        
    }
    else{
        document.getElementById('confirm').innerHTML="Invalid Information"
    }
}
// product not available

function img(){
    window.alert("Sorry Stock Not Available")
}
