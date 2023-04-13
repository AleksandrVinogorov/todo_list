import React, { useState } from "react"

let [value, setValue] = useState(dataBase)

let saveArray = ({dataBase}) => {
    document.addEventListener('DOMContentLoaded', function(){
        let data = dataBase;
        const LS = localStorage;
        
        data.addEventListener('input', function(event) {
            data[event.target.name] = event.target.value;
                LS.setItem('data', JSON.stringify(data))
                console.log(event.target.name)
            });
            if (LS.getItem('data')) {
                data = JSON.parse(LS.getItem('data'));
                for (let key in data) {
                    formInput.elements[key].value = data[key];
                }
            }
        }
    )
}
export default saveArray