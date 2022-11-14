import { components } from "react-select";
import Icon from "../icon/Icon";
import "./dropdown.scss";

const { Option } = components;
const Options = props => (
  <Option {...props}>
            <div
              key={props.data.value}
              className="dropdown-item"
              role="option"
            >
              <span><Icon name="ellipse" className={props.data.color}/></span>
              <div className="dropdown-item-content">
                <div className="dropdown-item-name">{props.data.label}</div>
                <div className="dropdown-item-label">{props.data.hint}</div>
              </div>
            </div>
  </Option>
);

export default Options;