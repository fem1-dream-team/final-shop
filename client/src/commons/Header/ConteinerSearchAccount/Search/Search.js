import React from 'react';
import s from './Search.module.css'
import $ from 'jquery'


//данные которые будут введены в поиск
// const products = [
//     {}
// ]

export const Search = (props) => {

    return (
        <div className={s.body}>
           <div className={s.searchWrapper}>
               <div className={s.inputHolder}>
                   <input type="text" className={s.searchInput} placeholder="Type to search" value={props.name}/>
                   <button className={s.searchIcon} onClick={searchToggle}><span></span></button>
               </div>
               <span className={s.close} onClick={searchToggle}></span>
           </div>
        </div>
    )
}


const searchToggle = (obj) => {

        let container = $(obj).closest('.searchWrapper');
    if(!container.hasClass('active')){
        container.addClass('active');
        // evt.preventDefault();
    }
    else if(container.hasClass('active') && $(obj).closest('.inputHolder').length === 0){
        container.removeClass('active');
        // clear input
        container.find('.searchInput').val('');
    }

}