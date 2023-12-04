'use client'

import React from 'react'
import Select from 'react-select';
import { useRoom } from './store/UseStore';

type Props = {
}

const SelectInput = (props: Props) => {
  const options = [
    { value: 'living room', label: 'Living Room' },
    { value: 'bedroom', label: 'Bedroom' },
    { value: 'bathroom', label: 'Bathroom' },
    { value: 'kitchen', label: 'Kitchen' },
  ];
  const setRoom = useRoom((state:any) => state.setRoom)
  const handleChange = (e:any) => {
    setRoom(e.value);
  };
  return (
    <div className='w-full'>
      <Select onChange={handleChange} options={options} defaultValue={options[0]}/>

    </div>
  )
}

export default SelectInput