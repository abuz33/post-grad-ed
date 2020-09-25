import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
  const { items, onInputChange } = props
  return (
    <div className="form">
      <input type="text" name="contact" placeholder="Contact" />
      <label for="contact" class="label-name">
        <span class="content-name">Contact</span>
      </label>
    </div>
  )
}

const Wrapper = styled.div`
  .form {
    width: 20%;
    height: 70px;
    position: relative;
    overflow: hidden;
  }

  .form input {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60%;
    color: #595f6e;
    font-size: 16px;
    border: 1px solid #bfc5cd;
    outline: none;
  }

  .form input:hover {
    border: 1px solid #4a4a4a;
  }

  .form label {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .form label::after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: -1px;
    height: 100%;
    width: 100%;
    border-bottom: 3px solid blue;
    transform: translateX(-100%);
    transition: all 0.3s;
  }

  .content-name {
    position: absolute;
    bottom: 5px;
    left: 0;
    transition: all 0.3s ease;
  }

  .form input:focus + .label-name .content-name,
  .form input:valid + .label-name .content-name {
    transform: translateY(-280%);
    color: #5fa8d3;
  }

  .form input:focus + .label-name::after,
  .form input:valid + .label-name::after {
    transform: translateX(0px);
  }
`

export default Input
