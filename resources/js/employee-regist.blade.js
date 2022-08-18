//エラーメッセージ
const VALID_MESSAGE_REQUIRE = "を入力してください";
const VALID_MESSAGE_DIGITNUM = "社員IDは10文字で入力してください";
/* const VALID_MESSAGE_MINDIGIT = "文字以上で入力してください"; */
const VALID_MESSAGE_MAXDIGIT = "文字以内で入力してください";
const VALID_MESSAGE_FORMAT = "を正しく入力してください";




var employee_id = document.getElementById("employee_id");
employee_id.addEventListener('input', inputCheck("社員ID"));
employee_id.addEventListener('input', digitCheck(e));
employee_id.addEventListener('change', patternCheck("社員ID"));
document.write('employee');
console.log('Hello')

var family_name = document.getElementById("family_name");
family_name.addEventListener('input', inputCheck("社員名（姓）") );
family_name.addEventListener('change', digitMaxNumCheck("姓","25"));


var first_name = document.getElementById("first_name");
first_name.addEventListener('input', inputCheck("社員名（名）") );
first_name.addEventListener('change', digitMaxNumCheck("名","25"));


var section = document.getElementById("section");
section.addEventListener('input', inputCheck("所属セクション") );


var mail = document.getElementById("mail");
mail.addEventListener('input', inputCheck("メールアドレス") );
mail.addEventListener('change', digitMaxNumCheck("メールアドレス","256"));
mail.addEventListener('change', patternCheck("メールアドレス"));



//必須項目入力判定メソッド
function inputCheck(e,keyword){
    if(e.validity.valueMissing){
        e.setCustomValidity( keyword + VALID_MESSAGE_REQUIRE);
    } else {
        e.setCustomValidity("");
    }
}

//桁数の判定メソッド
function digitCheck(e){
    if((e.validity.tooShort)||(e.validity.tooLong)){
        e.setCustomValidity(VALID_MESSAGE_DIGITNUM);
    } else {
        e.setCustomValidity("");
    }
}


function digitMaxNumCheck(e,maxName,maxNum){
    if(e.validity.tooLong){
        e.setCustomValidity(maxName + "は" + maxNum + VALID_MESSAGE_MAXDIGIT);
    } else {
        e.setCustomValidity("");
    }
}


function patternCheck(e,formatName){
    if(e.validity.patternMismatch){
        e.setCustomValidity( formatName + VALID_MESSAGE_FORMAT);
    } else {
        e.setCustomValidity("");
    }
}