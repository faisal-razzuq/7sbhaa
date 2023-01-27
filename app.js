const _able = document.querySelector('#able');
const _notAble = document.querySelector('#notAble');
const _condition_1 = document.querySelector('#con_1');
const _heavy = document.querySelector('#heavy');
const _light = document.querySelector('#light');
const _insurance = document.querySelector('#insurance');
const _reg_percent = document.querySelector('#forLink');
const _add_percent = document.querySelector('#percent');
const _btn = document.querySelector('#sub');
const none = document.querySelector('#no-inst');
const reset = document.querySelector('#reset');
const copy_btn = document.querySelector('#copy_btn');
const output = document.querySelector('#out');
const cost = document.querySelector('#cost');
const circle_red = document.querySelector('#red');
const circle_green = document.querySelector('#green');


//////////// *كيف تريد إضافة نسبة القسط ؟*

function cond_1() {
    if (_able.checked == true) {
        _condition_1.style.height = '0';
        _condition_1.style.transform = 'scaleY(0)';
        _condition_1.style.opacity = '0';
    } else {
        _condition_1.style.height = '100px';
        _condition_1.style.transform = 'scaleY(1)';
        _condition_1.style.opacity = '1';
    }
}
_able.addEventListener('click', () => {
    cond_1()
    none.checked = true;
});
_notAble.addEventListener('click', () => {
    cond_1()
});

////////////////////////////////////// Global functions ////////////////////////////////////////
function calculateCost(cost) {
    if (cost == 0) {
        output.innerHTML = `<b>خطـــأ واضـــح</b><br>قـم بوضع رقم في حقل الادخــــال 😒`;
        output.classList.add('error');
        circle_green.classList.add('disabeld');
        circle_red.classList.remove('disabeld');
        console.error('cost is ' + cost);
    } else if (cost > 1 && cost <= 3200) {
        output.classList.remove('error');
        circle_red.classList.add('disabeld');
        circle_green.classList.remove('disabeld');


        var tabby1 = cost / 2;
        var tabby2 = tabby1 / 3;
        var tamara1 = cost / 3;

        output.innerHTML =
            ` السعر هوه *(<b>${cost.toFixed(1)}</b>)* : <br>
الدفعات كالأتي : <br>
عن طريق تابي  <br>
الدفعة الاولى - *(<b> ${tabby1.toFixed(1)} </b>)* <br>  
الدفعة الثانية - *(<b> ${tabby2.toFixed(1)} </b>)* <br>
الدفعة الثالثة - *(<b> ${tabby2.toFixed(1)} </b>)* <br>
الدفعة الرابعة - *(<b> ${tabby2.toFixed(1)} </b>)* <br>
*===============*<br>
او عن طريق تمارا <br>
الدفعة الاولى - *(<b> ${tamara1.toFixed(1)} </b>)* <br>
الدفعة الثانية - *(<b> ${tamara1.toFixed(1)} </b>)* <br>
الدفعة الثالثة - *(<b> ${tamara1.toFixed(1)} </b>)* 
            `;
    } else if (cost == 3201 || cost <= 5000) {

        output.classList.remove('error');
        circle_red.classList.add('disabeld');
        circle_green.classList.remove('disabeld');

        var tabby1 = cost / 2;
        var tabby2 = tabby1 / 3;
        var tamara1 = cost - 2000;

        output.innerHTML =
            `
           السعر هوه *(<b> ${cost.toFixed(1)} </b>)* : <br>
الدفعات كالأتي : <br>
عن طريق تابي  <br>
الدفعة الاولى - *(<b> ${tabby1.toFixed(1)} </b>)* <br>  
الدفعة الثانية - *(<b> ${tabby2.toFixed(1)} </b>)* <br>
الدفعة الثالثه - *(<b> ${tabby2.toFixed(1)} </b>)* <br>
الدفعة الرابعة - *(<b> ${tabby2.toFixed(1)} </b>)* <br>
*===============*<br>
او عن طريق تمارا <br>
الدفعة الاولى - *(<b> ${tamara1.toFixed(1)} </b>)* <br>
الدفعة الثانية - *(<b> 1000 </b>)* <br>
الدفعة الثالثة - *(<b> 1000 </b>)* 
            `

    } else if (cost >= 5001) {

        output.classList.remove('error');
        circle_red.classList.add('disabeld');
        circle_green.classList.remove('disabeld');

        var tabby1 = 5000 / 2;
        var tabby2 = tabby1 / 3;
        var tamara1 = cost - 2000;
        var transfer = cost - 5000;
        console.log(transfer)
        var totalToPay = tabby1 + transfer;

        output.innerHTML =
            `
  السعر هوه *(<b> ${cost.toFixed(1)} </b>)* على الاقساط يكون كالأتي : <br>
  تقدر تقسط  من  هذا المبلغ عن طريق رابط  دفع  بقيمه *5000* ريال <br>
  بسويه لك اول  ماتجهز  للطلب , وتكون الدفعات :  <br>
 الدفعة الاولى - *(<b> ${tabby1.toFixed(1)} </b>)* <br>  
الدفعة الثانية - *(<b> ${tabby2.toFixed(1)} </b>)* <br>
 الدفعة الثالثة - *(<b> ${tabby2.toFixed(1)} </b>)* <br>
  الدفعة الرابعة - *(<b> ${tabby2.toFixed(1)} </b>)* <br>
  ===============<br>
  اما بالنسبة للمبلغ الي فوق ال *(<b> 5000 </b>)* الي  هو *(<b>${transfer.toFixed(1)}</b>)* فيتم  تحويله الان مع دفعة التقسيط  الاولى <br>

   يعني  انت  الان لازم  تدفع *(<b> 2500 </b>)* + *(<b>${+transfer.toFixed(1)}</b>)* = *(<b> ${totalToPay.toFixed(1)} </b>)*
وبعدها 3 اشهر كل شهر *(<b> 833.33 </b>)* ريال`;

    }
} ///////////// End calculateCost()

///////////////////////
function _default(cost1) {
    var cost1 = +cost.value;
    var cost2;
    var cost3;

    if (_light.checked == true && _insurance.checked == true) {
        cost2 = ((cost1 + 35) / 100) * 3;
        cost3 = cost1 + cost2;
    } else if (_heavy.checked == true && _insurance.checked == true) {
        cost2 = ((cost1 + 50) / 100) * 3;
        cost3 = cost1 + cost2;
    } else if (_light.checked == true) {
        cost2 = cost1 + 35;
        cost3 = cost2;
    } else if (_heavy.checked == true) {
        cost2 = cost1 + 50;
        cost3 = cost2;
    } else if (_insurance.checked == true) {
        cost2 = (cost1 / 100) * 3;
        cost3 = cost1 + cost2;
    } else {
        cost3 = cost1;
    }
    calculateCost(cost3);

}
///// for global radio button

/////////////////////////////

////// for only regular installment option
function reg(cost1) {
    var cost1 = +cost.value;
    var cost2;
    var cost3;
    var cost4;
    var cost5;
    if (_reg_percent.checked == true) {
        cost2 = cost1 + 325;
        if (cost2 == 325) {
            console.error('cost = 0');
        } else if (_light.checked == true && _insurance.checked == true) {
            cost3 = cost2 + 35;
            cost4 = (cost3 / 100) * 3;
            cost5 = cost4 + cost3;
        } else if (_heavy.checked == true && _insurance.checked == true) {
            cost3 = cost2 + 50;
            cost4 = (cost3 / 100) * 3;
            cost5 = cost4 + cost3;
        } else if (_light.checked == true) {
            cost2 = cost1 + 325;
            cost3 = 35;
            cost4 = cost2 + cost3;
            cost5 = cost4;
        } else if (_heavy.checked == true) {
            cost2 = cost1 + 325;
            cost3 = 50;
            cost4 = cost2 + cost3;
            cost5 = cost4;
        } else {
            cost5 = cost2;
        }
    }
} ////////////////////////////end for only regular installment option
///////////////////////////////////////////////////////////////////////
function percent(cost1) {
    var cost1 = +cost.value;
    var cost2;
    var cost3;
    var cost4;
    var cost5;
    if (_add_percent.checked == true) {
        cost2 = cost1 + (cost1 / 100) * 6.5;
        if (cost2 == 0) {
            console.error('cost = 0');
        } else if (_light.checked == true && _insurance.checked == true) {
            cost3 = cost2 + 35;
            cost4 = (cost3 / 100) * 3;
            cost5 = cost4 + cost3;
        } else if (_heavy.checked == true && _insurance.checked == true) {
            cost3 = cost2 + 50;
            cost4 = (cost3 / 100) * 3;
            cost5 = cost4 + cost3;
        } else if (_light.checked == true) {
            cost3 = 35;
            cost4 = cost2 + cost3;
            cost5 = cost4;
        } else if (_heavy.checked == true) {
            cost3 = 50;
            cost4 = cost2 + cost3;
            cost5 = cost4;
        } else {
            cost5 = cost2;
        }
    }
}



//////////////////////////////////// END Global functions //////////////////////////////////////


///////////////////////////////// End 
//////////////////////////////// copy text form output to clipboard
copy_btn.addEventListener('click', () => {

    // Get the text that needs to be copied
    var text = document.getElementById('out').innerText;
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    let message = document.querySelector('#msg');
    message.style.left = '130px';
    message.style.opacity = '1';
    setTimeout(() => {
        message.style.left = '0';
        message.style.opacity = '0';
    }, 2000);

})

/////////////////////////////////// End copy text form output to clipboard

//////////////////////////////////

_btn.addEventListener('click', () => {

    if (_notAble.checked == true) {
        if (none.checked == true) {
            costttt1 = +cost.value;
            output.innerHTML = `<b>خطـــأ واضـــح</b><br> حدد خيار الله يرضى عليك😒`;
            output.classList.add('error');
            circle_green.classList.add('disabeld');
            circle_red.classList.remove('disabeld');
        } else if (_reg_percent.checked == true) {
            reg(cost);
        } else if (_add_percent.checked == true) {
            percent(cost);
        } else if (costttt1 == 0) {
            output.innerHTML = `<b>خطـــأ واضـــح</b><br>  لو سمحت كمل معروفك و حطلنا رقم  لنحسبه 😒`;
        }
    } else {
        _default(cost);
    }
});


/////////////////////////////////////// reset button
reset.addEventListener('click', () => {
    output.innerHTML = ` `;
    circle_red.classList.add('disabeld');
    circle_green.classList.add('disabeld');
    _condition_1.style.height = '0';
    _condition_1.style.transform = 'scaleY(0)';
    _condition_1.style.opacity = '0';
});
//////////////////////////////////////// End reset button