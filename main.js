'use strict';
{
//---------------------------------------------
// 定数
//---------------------------------------------
const TYPE = {
    MEAT : '肉',
    FISH : '魚',
    SOY: '大豆',
    EGG: '卵',
}

const foodLists = [];

    
//---------------------------------------------
// 食品配列
//---------------------------------------------
const meat = [
    {type: 'とり胸肉（皮なし）', protein:22.3, calorie:108},
    {type: 'とり胸肉（皮つき）', protein:19.5, calorie:191},
    {type: 'ささみ', protein:23, calorie:105 },
    {type: '卵', protein:12.3, calorie:151 },
]    

const fish = [
    {type: 'アジ', protein:20.7, calorie:121},
]

const soy = [
    {type: '納豆', protein:16.5, calorie:200},
    {type: '木綿豆腐', protein:4.9, calorie:56},
    {type: '絹豆腐',protein:6.6, calorie:72},
]

const egg = [
    {type: '鶏卵', protein:7.4, calorie:91},
    {type: 'うずら卵', protein:1.64, calorie:23 },
]

//---------------------------------------------
// 選択されているラジオボタンの項目を表示させる
//---------------------------------------------
const foods = document.getElementsByName("foodtype");
console.log(foods);
let SelectedFood;
    foods.addEventListener('change', () => {    
        foods.forEach(food => {
            if (food.checked === true) {
                SelectedFood = food.value;
                
            }；
        });
    console.log(foods);
    console.log(SelectedFood);
        
    
});    




const addOption = () => {
    for(let i = 0; i < foodLists.length; i++) {
        // selectタグを取得する
        const select = document.getElementById("foodName");
        // optionタグを生成する
        const option = document.createElement("option");
        // optionのテキストを生成
        option.text = foodLists[i].food;
        // selectの子要素にoptionタグを追加
        select.appendChild(option);
    }
    
    
}

addOption();


// 1日に必要なタンパク質量を計算する関数

       
//---------------------------------------------    
// 入力された体重の値を取得
//---------------------------------------------
    let bodyWeight = document.getElementById("bodyWeight");
    
    bodyWeight.addEventListener('input', () => {
        const result = document.getElementById("result");
        result.textContent = bodyWeight.value;
       
    })
    
    let calculation = document.getElementById("calculation");
    
    calculation.addEventListener('click', () => {
        
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}