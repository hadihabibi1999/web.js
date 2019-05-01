import React from 'react'
const cc = {
          List = [
            {title:'Object'},
            {title:'Redux'}
        ],
           cards = () => {
              for(let i=0;i<List.length;++i){
                 return(
                   <span>{List.title[i]}</span>
            )
          }
        }
      }

export default cc;
