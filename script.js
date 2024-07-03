 let kgVal = document.getElementById("kg");
 let ounceVal = document.getElementById("ounce");
 let poundVal = document.getElementById("pound");


 kgVal.addEventListener("input",convertKg=()=>{
    let kg = kgVal.value;
    ounceVal.value = (kg*35.274).toFixed(2);
    poundVal.value = (kg*2.205).toFixed(2);
 });
 poundVal.addEventListener("input",convertpound=()=>{
    let pound = poundVal.value;
    kgVal.value = (pound/2.205).toFixed(2);
    ounceVal.value = (pound*16).toFixed(2);
 });
 ounceVal.addEventListener("input",convertounce=()=>{
    let ounce = ounceVal.value;
    kgVal.value = (ounce/35.274).toFixed(2);
    poundVal.value = (ounce/16).toFixed(2);
 });
 window.addEventListener("load",convertKg)