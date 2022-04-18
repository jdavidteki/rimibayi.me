import React, { Component } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import "./DropDown.css"

class Dropdown extends Component {
    constructor(props) {
      super(props);

      this.state = {
        open: false,
        selected: this.props.initial || -1
      };
    }

    toggleDropdown() {
      this.setState({
        active: !this.state.active
      });
    }

    handleClick(i) {
      this.setState({
        selected: i
      });

      console.log("i", i)

      let path = "/";
      switch(i){
        case 0:
          path = "/guess-the-song"
          break
        case 1:
          path = "/popular-lines"
          break
        case 2:
          path = "/next-line"
          break
      }
      window.location.href = path
    }

    renderOptions() {
      if (!this.props.options) {
        return;
      }

      return this.props.options.map((option, i) => {
        return (
          <li
            onClick={evt => this.handleClick(i)}
            key={i}
            className={"dropdown__list-item " + (i === this.state.selected ? 'dropdown__list-item--active' : '')}
          >
            {option}
          </li>
        );
      });
    }

    render() {
			return (
				<div className="dropdown">
					<div
						onClick={() => this.toggleDropdown()}
						className="dropdown__toggle dropdown__title"
					>
						<span  className="spanj35ru poppins-medium-martinique-20px">{this.props.title}</span>
						<ArrowDropDownIcon className={"dropdown__arrow " + (this.state.active ? 'dropdown__arrow--active' : '')} />
					</div>
					<ul className={"dropdown__list " + (this.state.active ? 'dropdown__list--active' : '')}>{this.renderOptions()}</ul>
				</div>
			);
    }
}

export default Dropdown;