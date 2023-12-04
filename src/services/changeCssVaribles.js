import { element } from "prop-types";

export const changeCssVaribles = theme =>{

const root = document.querySelector(':root');

const cssVaribles = ['header', 'bgimage'];

cssVaribles.forEach(element=>{
    root.style.setProperty(`--theme-defalt-${element}`, `var(--theme-${theme}-${element})`)
})
}