document.getElementById('loan-form').addEventListener('submit',function(e){
    document.getElementById("results").style.display="none";
    document.getElementById("loading").style.display="block";
    setTimeout(calculate,2000);
    e.preventDefault();
})
function calculate(e){
    const amount=document.getElementById("loan_amount")
    const intrest=document.getElementById("loan_intrest")
    const year=document.getElementById("years")
    const montAmo=document.getElementById("montly_amount")
    const totAmount=document.getElementById("total_amount")
    const intrR=document.getElementById("total_intrest")
    const prin=parseFloat(amount.value)
    const calculatintrest=parseFloat(intrest.value)/100/12;
    const calculatepayment=parseFloat(year.value)*12;
    const x=Math.pow(1+calculatintrest,calculatepayment)
    const monthly=(prin*x*calculatintrest)/(x-1);

    if(isFinite(monthly)){
        montAmo.value=monthly.toFixed(2)
        totAmount.value=(monthly*calculatepayment).toFixed(2);
        intrR.value=(monthly*calculatepayment-prin).toFixed(2);
        document.getElementById("results").style.display= "block";
        document.getElementById("loading").style.display="none";
    }
    else{
        showAlert('enter a number');
    }
    e.preventDefault();
}
function showAlert(error){
    const errorDiv=document.createElement('div');
    errorDiv.className=  "alert alert-danger";
    errorDiv.appendChild(document.createTextNode(error))
    const card=document.querySelector(".card");
    const heading=document.querySelector(".heading");
    card.insertBefore(errorDiv,heading);
    setTimeout(function(){
        document.querySelector(".alert").remove();
        
    },3000)


}