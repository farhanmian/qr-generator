'use client';

import IconChevronDown from '@/components/icons/IconChevronDown';
import IconSpeakerPhone from '@/components/icons/IconSpeakerPhone';
import { Collapse } from 'antd';
import React, { useState } from 'react';

interface CollapseIconProps {
  rotate: string;
}

const CollapseIcon: React.FC<CollapseIconProps> = ({ rotate }) => {
  return (
    <div className={`h-6 w-6 transition-all`} style={{ transform: `rotate(${rotate}deg)` }}>
      {IconChevronDown()}
    </div>
  );
};

interface CustomCollapseProps {
  label: string;
  content: React.ReactNode;
  prependIcon?: React.ReactNode;
}

export default function CustomCollapse(props: CustomCollapseProps) {
  const [collapseActive, setCollapseActive] = useState(false);

  const onCollapseChange = (key: string | string[]) => {
    setCollapseActive(Array.isArray(key) ? key.includes('1') : key === '1');
  };

  const genExtra = () => (
    <div>
      <CollapseIcon rotate={collapseActive ? '180' : '0'} />
    </div>
  );

  const expandIcon = () =>{
    return <div className='h-6 w-6'>
      {props.prependIcon}
    </div>
  }

  return (
    <Collapse
      size="large"
      expandIcon={props.prependIcon ? expandIcon : undefined}
      activeKey={collapseActive ? '1' : undefined} 
      onChange={onCollapseChange} 
      items={[{ key: '1', label: props.label, children: props.content, extra: genExtra() }]}
    />
  );
}
