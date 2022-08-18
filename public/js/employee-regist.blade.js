
/* var employee_id = document.getElementById("employee_id");
employee_id.addEventListener('input', inputCheck(e,"社員ID"));
employee_id.addEventListener('input', digitCheck(e));
employee_id.addEventListener('change', patternCheck(e,"社員ID"));
document.write('employee');
console.log('Hello')

var family_name = document.getElementById("family_name");
family_name.addEventListener('input', inputCheck(e,"社員名（姓）") );
family_name.addEventListener('change', digitMaxNumCheck(e,"姓","25"));


var first_name = document.getElementById("first_name");
first_name.addEventListener('input', inputCheck(e,"社員名（名）") );
first_name.addEventListener('change', digitMaxNumCheck(e,"名","25"));


var section = document.getElementById("section");
section.addEventListener('input', inputCheck(e,"所属セクション") );


var mail = document.getElementById("mail");
mail.addEventListener('input', inputCheck(e,"メールアドレス") );
mail.addEventListener('change', digitMaxNumCheck(e,"メールアドレス","256"));
mail.addEventListener('change', patternCheck(e,"メールアドレス"));



//必須項目入力判定メソッド
function inputCheck(e,keyword){
    if(e.validity.valueMissing){
        document.write(e);
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
} */



//エラーメッセージ
const VALID_MESSAGE_REQUIRE = "を入力してください";
const VALID_MESSAGE_DIGITNUM = "社員IDは10文字で入力してください";
const VALID_MESSAGE_MAXDIGIT = "文字以内で入力してください";
const VALID_MESSAGE_FORMAT = "を正しく入力してください";



//社員IDのバリデーションチェック
var employee_id = document.getElementById("employee_id");
/* document.write(employee_id.validity.valueMissing); */
/* document.write(employee_id.checkValidity()); 
'invlid'イベントはHTML側でrequired属性を設定していないと発動しなかった

employee_id.addEventListener('invalid', {keyword:"社員ID", getElement:employee_id, handleEvent:inputCheck});
employee_id.addEventListener('input', {getElement:employee_id, handleEvent:digitCheck});
employee_id.addEventListener('change', {formatName:"社員ID", getElement:employee_id, handleEvent:patternCheck});
*/

employee_id.addEventListener('invalid', {keyword:"社員ID", getElement:employee_id, handleEvent:inputCheck},true);
employee_id.addEventListener('input', {getElement:employee_id, handleEvent:digitCheck});
employee_id.addEventListener('change', {formatName:"社員ID", getElement:employee_id, handleEvent:patternCheck});

//社員名（姓）のバリデーションチェック
var family_name = document.getElementById("family_name");
family_name.addEventListener('invalid', {keyword:"社員名（姓）", getElement:family_name, handleEvent:inputCheck});
family_name.addEventListener('change', {maxName:"姓", maxNum:25, getElement:family_name, handleEvent:digitMaxNumCheck});

//社員名（名）のバリデーションチェック
var first_name = document.getElementById("first_name");
first_name.addEventListener('invalid', {keyword:"社員名（名）", getElement:first_name, handleEvent:inputCheck} );
first_name.addEventListener('change', {maxName:"名", maxNum:25, getElement:first_name, handleEvent:digitMaxNumCheck});

//所属セクションのバリデーションチェック
var section = document.getElementById("section");
section.addEventListener('invalid', {keyword:"所属セクション",  getElement:section, handleEvent:inputCheck} );

//メールアドレスのバリデーションチェック
var mail = document.getElementById("mail");
mail.addEventListener('invalid', {keyword:"メールアドレス",  getElement:mail, handleEvent:inputCheck} );
mail.addEventListener('change',{maxName:"メールアドレス", maxNum:256, getElement:mail, handleEvent:digitMaxNumCheck});
mail.addEventListener('change',{formatName:"メールアドレス", getElement:mail, handleEvent:patternCheck});

//性別のバリデーションチェック
var sex = document.getElementById("sex");
sex.addEventListener('invalid', {keyword:"性別",  getElement:sex, handleEvent:inputCheck} );



//必須項目入力判定メソッド
function inputCheck(e){
    if(this.getElement.validity.valueMissing){
        this.getElement.setCustomValidity( this.keyword + VALID_MESSAGE_REQUIRE);
    } else {
        this.getElement.setCustomValidity("");
    }
}

//桁数の判定メソッド
function digitCheck(e){
    if((this.getElement.validity.tooShort)||(this.getElement.validity.tooLong)){
        this.getElement.setCustomValidity(VALID_MESSAGE_DIGITNUM);
    } else {
        this.getElement.setCustomValidity("");
    }
}


function digitMaxNumCheck(e){
    if(this.getElement.value.length>this.maxNum){
        this.getElement.setCustomValidity(this.maxName + "は" + this.maxNum + VALID_MESSAGE_MAXDIGIT);
    } else {
        this.getElement.setCustomValidity("");
    }
}

//正規表現の判定メソッド
function patternCheck(e){
    if(this.getElement.validity.patternMismatch){
        this.getElement.setCustomValidity( this.formatName + VALID_MESSAGE_FORMAT);
    } else {
        this.getElement.setCustomValidity("");
    }
}