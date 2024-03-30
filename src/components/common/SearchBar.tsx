import React, { ChangeEvent, Dispatch, ReactElement, SetStateAction } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface searchPropType {
    value: string,
    setValue: Dispatch<SetStateAction<string>>
}
 
export default function ({setValue,value}: searchPropType):ReactElement {
    return (
        <div className="search-bar">
            <input className="form-input" type="text" value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => {setValue(e?.target?.value ?? '')}} placeholder="Search" />
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
        </div>
    )
}