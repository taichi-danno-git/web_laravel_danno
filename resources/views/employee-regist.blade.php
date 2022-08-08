<!DOCTYPE html>
<html>

<head>
    <link href="css/common.css" rel="stylesheet" type="text/css" />
    <title></title>
</head>
<body>
    <div class="contents">
        <form action="" method="post">
            <table>
                <tr>
                <th>社員ID<span class="asterisk">*</span></th>
                <td><input class="input-form employee_id" name="employee_id" type="text" placeholder="例)YZ12345678" required pattern="^YZ[0-9]{8}$">
                </td></tr>

                <tr>
                <th>社員名<span class="asterisk">*</span></th>
                <td><input class="input-form family_name" name="family_name" type="text" maxlength="26" placeholder="姓" required>

                    <input class="input-form first_name" name="first_name" type="text" maxlength="26" placeholder="名" required>
                </td></tr>

                <tr>
                <th>所属セクション<span class="asterisk">*</span></th>
                <td><select class="input-form section" name="section" type="text" required>
                        <option value="1">シス開</option>
                        <option value="">グロカル</option>
                        <option value="2">ビジソル</option>
                    </select>
                </td></tr>

                <tr>
                <th>メールアドレス<span class="asterisk">*</span></th>
                <td><input class="input-form mail" name="mail" type="text" maxlength="257" placeholder="例) taro_yaz@yaz.co.jp" required></td>
                </tr>

                <tr>
                <th>性別<span class="asterisk">*</span></th>
                <td><input class="input-form gender" name="gender" type="radio" value="男性" required>男性
                <input class="input-form gender" name="gender" type="radio" value="女性" required>女性</td>
            </tr>
            <tr>
            <th class="hissu"><span class="asterisk">*</span><span class="hissu-letter" >必須項目</span></th>
        </tr>
            </table>
            <input class="submit" type="submit" value="登録">
        </form>
    </div>

    <div class="transform">
        <a href="{{ route('menu')}}">メニュー画面</a>
    </div>

</body>

</html>