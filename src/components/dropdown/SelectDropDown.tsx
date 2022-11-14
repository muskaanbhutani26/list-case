import React from 'react';
import Select from 'react-select';
import { IDropdownProps } from '../../interfaces/dropdown';
import "./dropdown.scss";
import Options from './Options';

function SelectDropDown({
	labelName,
	name,
	options,
	placeHolder,
    onChange,
    value
}: IDropdownProps) {

    const styles = {
        control: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#B7FAAC" : "rgba(0, 0, 0, 0.05)",
          }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? "#B7FAAC" : "#FFFFFF",
        })
      };

    return(
        
        <Select
        name={name}
        className='react-select-container'
        placeholder={placeHolder}
        value={value}
        options={options}
        onChange={onChange}
        styles={styles}
        components={{ Option: Options }}
      />
        
        
    );

}

export default SelectDropDown;