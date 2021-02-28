import {addHtml} from './script/function.js';
import {addHtml2} from './script/2nd-function.js';
import {pushBtn} from './script/btn.js';

addHtml()
addHtml2()

const btn = document.querySelector("#btn")

btn.addEventListener('click', ()=>{
    pushBtn()
})