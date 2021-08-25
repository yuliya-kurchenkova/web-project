import React from 'react'
import ItemTemplate from "../ItemTemplate/ItemTemplate";

const ListTemplate = (props) => {

    return (
        <div>
            {
                props.arrList.map(el => {
                    return (
                        <ItemTemplate
                            key={el}
                            el={el}
                            clickIcon={props.clickIcon}
                        />
                    )
                })
            }
        </div>
    )
}
export default ListTemplate;