import React, { useEffect, useState } from 'react';
import './checkbox.scss';

const Checkbox = ({ id, name, onChange, subTitle, title, checkItems }: any) => {
  const [isChecked, setIsChecked] = useState<boolean | undefined>(undefined);

  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.name, e.target.checked);
    setIsChecked(e.target.checked);
  };

  useEffect(() => {
    if (checkItems.includes(name)) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [checkItems]);

  return (
    <label className="terms-wrap">
      <input type="checkbox" id={id} name={name} checked={isChecked} onChange={e => onCheck(e)} />
      <span>[{subTitle}]</span> {title}
    </label>
  );
};

export default Checkbox;
