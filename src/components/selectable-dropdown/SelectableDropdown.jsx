import { Dropdown } from '@edx/paragon';
import { Consumer } from '@edx/paragon/dist/Dropdown';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function SelectableDropdown({
  options, defaultOption, onChange, label,
}) {
  const [selected, setSelected] = useState(defaultOption);
  return (
    <Dropdown>
      <Dropdown.Button>
        { label || options[selected] }
      </Dropdown.Button>
      <Consumer>
        { ({ toggle }) => (
          <Dropdown.Menu>
            { Object.keys(options)
              .map(option => (
                <Dropdown.Item
                  type="button"
                  onClick={
                    () => {
                      setSelected(option);
                      toggle();
                      if (onChange) {
                        onChange(option);
                      }
                    }
                  }
                >
                  { options[option] }
                </Dropdown.Item>
              )) }
          </Dropdown.Menu>
        ) }
      </Consumer>
    </Dropdown>
  );
}

SelectableDropdown.propTypes = {
  options: PropTypes.objectOf(PropTypes.string).isRequired,
  defaultOption: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.node,
};

SelectableDropdown.defaultProps = {
  onChange: null,
  label: null,
};

export default SelectableDropdown;
