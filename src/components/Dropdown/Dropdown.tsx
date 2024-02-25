import { Option, Select } from '@material-tailwind/react';

const customDropdown = ({ label, options }) => {
  return (
    <div className="w-72">
      <Select label={label}>
        {options.map((item, key) => (
          <Option key={key}>{item}</Option>
        ))}
      </Select>
    </div>
  );
};
export default customDropdown;
