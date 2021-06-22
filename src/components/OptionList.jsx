import PropTypes from 'prop-types';

const OptionList = ({
  name, actual, description, handleSelect,
}) => (
  <div>
    <label htmlFor={name}>{description}</label>
    <select
      name={name}
      id={name}
      onChange={(e) => handleSelect(e.target.value)}
    >
      <option value="20" selected={actual === '20'}>
        20
      </option>
      <option value="30" selected={actual === '30'}>
        30
      </option>
      <option value="40" selected={actual === '40'}>
        40
      </option>
      <option value="50" selected={actual === '50'}>
        50
      </option>
      <option value="60" selected={actual === '60'}>
        60
      </option>
    </select>
  </div>
);

OptionList.propTypes = {
  name: PropTypes.string.isRequired,
  actual: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default OptionList;
