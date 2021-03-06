import React from 'react'

import { useForm } from 'react-hook-form'

import useAuth from '../../hooks/useAuth'
import Menubar from '../Menubar/Menubar'

const AddEvents = () => {
  const { user } = useAuth()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    // data.email = user?.email;
    fetch('https://serene-earth-71379.herokuapp.com/addEvent', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .then((data) => console.log(data))
    console.log('hi')
    // console.log(data);
  }
  return (
    <div>
      <Menubar></Menubar>
      <h1 className='mt-5 text-center text-info'>Please Add Services</h1>
      <div className='login-box w-25 m-auto mt-5'>
        <div className='event-box d-flex justify-content-center align-items-center'>
          <div className='login-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register('title')}
                placeholder='title'
                className='p-2 m-2 w-100'
              />

              <input
                {...register('description')}
                placeholder='Description'
                className='p-2 m-2'
                className='p-2 m-2 w-100'
              />
              <br />

              <input
                {...register('image', { required: true })}
                placeholder='Image Link'
                className='p-2 m-2'
                className='p-2 m-2 w-100'
              />

              {errors.exampleRequired && <span>This field is required</span>}

              <input type='submit' value='Add' className='btn btn-info w-50' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEvents
