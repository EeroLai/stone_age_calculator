let grow_hp
let grow_atk
let grow_def
let grow_dex

$('#commit').on('click', function () {
    let beforeObj = {
        'lv': $('#before_lv').val(),
        'hp': $('#before_hp').val(),
        'atk': $('#before_atk').val(),
        'def': $('#before_def').val(),
        'dex': $('#before_dex').val()
    };

    let afterObj = {
        'lv': $('#after_lv').val(),
        'hp': $('#after_hp').val(),
        'atk': $('#after_atk').val(),
        'def': $('#after_def').val(),
        'dex': $('#after_dex').val()
    }

    let sum_lv = afterObj.lv - beforeObj.lv;
    grow_hp = (afterObj.hp - beforeObj.hp) / sum_lv;
    grow_atk = (afterObj.atk - beforeObj.atk) / sum_lv;
    grow_def = (afterObj.def - beforeObj.def) / sum_lv;
    grow_dex = (afterObj.dex - beforeObj.dex) / sum_lv;

    for (let i = 1; i <= 8; i++) {
        $('#expected_lv_' + i).val(parseInt($('#after_lv').val()) + i);
        $('#expected_hp_' + i).val(parseInt($('#after_hp').val()) + (grow_hp * i));
        $('#expected_atk_' + i).val(parseInt($('#after_atk').val()) + (grow_atk * i));
        $('#expected_def_' + i).val(parseInt($('#after_def').val()) + (grow_def * i));
        $('#expected_dex_' + i).val(parseInt($('#after_dex').val()) + (grow_dex * i));
    }
});

