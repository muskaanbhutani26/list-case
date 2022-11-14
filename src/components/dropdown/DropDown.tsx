import React, { useEffect, useRef, useState } from 'react';
import { IDropdownProps } from '../../interfaces/dropdown';
import Icon from '../icon/Icon';
import "./dropdown.scss";


function DropDown({
	labelName,
	name,
	options,
	placeHolder,
  onChange,
}: IDropdownProps) {

  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  const onItemClick = (option) => {
    setSelectedValue(option);
    onChange(option)
  };

  const handleInputClick = (e) => {
    setShowMenu(!showMenu);
  };
  
    const getDisplay = () => {
      if(selectedValue){
        return selectedValue.label;
      }
        return placeHolder;
    };

    return(
        <div className="dropdown-container" tabIndex={0} >
        <div ref={inputRef}  aria-haspopup="listbox" aria-expanded={showMenu} onClick={handleInputClick}  id={name} className="dropdown-input">
          <div className="dropdown-selected-value" aria-labelledby={`${name}_label`}>
          {selectedValue && selectedValue.color && <Icon name="ellipse" className={selectedValue.color}/>}
            {getDisplay()}
            </div>
          <div className="dropdown-tools">
            <div className="dropdown-tool">
                <Icon name="downArrow" />
            </div>
          </div>
        </div>
        { showMenu && (
        <div  role="listbox" tabIndex={-1} className="dropdown-menu">
          
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => onItemClick(option)}
              className="dropdown-item"
              role="option"
              aria-selected={option.value === selectedValue?.value}
            >
              <span><Icon name="ellipse" className={option.color}/></span>
              <div className="dropdown-item-content">
                <div className="dropdown-item-name">{option.label}</div>
                <div className="dropdown-item-label">{option.hint}</div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    );

}

export default DropDown;