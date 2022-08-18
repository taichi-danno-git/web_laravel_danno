//エラーメッセージ
const VALID_MESSAGE_REQUIRE = "を入力してください";
const VALID_MESSAGE_DIGITNUM = "社員IDは10文字で入力してください";
const VALID_MESSAGE_MAXDIGIT = "文字以内で入力してください";
const VALID_MESSAGE_FORMAT = "を正しく入力してください";


//社員IDのバリデーションチェック
var employee_id = document.getElementById("employee_id");
employee_id.addEventListener('invalid', function(){
    if(employee_id.validity.valueMissing){
        employee_id.setCustomValidity("社員ID" + VALID_MESSAGE_REQUIRE);
    } else if((employee_id.validity.tooShort)||(employee_id.validity.tooLong)){
        employee_id.setCustomValidity(VALID_MESSAGE_DIGITNUM);
    } else if(employee_id.validity.patternMismatch){
        employee_id.setCustomValidity( "社員ID" + VALID_MESSAGE_FORMAT);
    } else {
        employee_id.setCustomValidity("");
    }
});

//社員名（姓）のバリデーションチェック
var family_name = document.getElementById("family_name");
family_name.addEventListener('invalid', function(){
    if(family_name.validity.valueMissing){
        family_name.setCustomValidity( "社員名（姓）" + VALID_MESSAGE_REQUIRE);
    } else if(family_name.value.length>25){
        family_name.setCustomValidity("社員名（姓）" + "は25" + VALID_MESSAGE_MAXDIGIT);
    } else {
        family_name.setCustomValidity("");
    }
});

//社員名（名）のバリデーションチェック
var first_name = document.getElementById("first_name");
first_name.addEventListener('invalid', function(){
    if(first_name.validity.valueMissing){
        first_name.setCustomValidity( "社員名（名）" + VALID_MESSAGE_REQUIRE);
    } else if(first_name.value.length>25){
        first_name.setCustomValidity("社員名（名）" + "は25" + VALID_MESSAGE_MAXDIGIT);
    } else {
        first_name.setCustomValidity("");
    }
});

//所属セクションのバリデーションチェック
var section = document.getElementById("section");
section.addEventListener('invalid', function(){
    if(section.validity.valueMissing){
        section.setCustomValidity( "所属セクション" + VALID_MESSAGE_REQUIRE);
    } else {
        section.setCustomValidity("");
    }
});

//メールアドレスのバリデーションチェック
var mail = document.getElementById("mail");
mail.addEventListener('invalid', function(){
    if(mail.validity.valueMissing){
        mail.setCustomValidity("メールアドレス" + VALID_MESSAGE_REQUIRE);
    } else if(mail.value.length>25){
        mail.setCustomValidity("メールアドレスは25" + VALID_MESSAGE_MAXDIGIT);
    } else if(mail.validity.patternMismatch){
        mail.setCustomValidity( "メールアドレス" + VALID_MESSAGE_FORMAT);
    } else {
        mail.setCustomValidity("");
    }
});

//性別のバリデーションチェック
var sex = document.getElementById("sex");
sex.addEventListener('invalid', function(){
    if(sex.validity.valueMissing){
        sex.setCustomValidity( "性別" + VALID_MESSAGE_REQUIRE);
    } else {
        sex.setCustomValidity("");
    }
});