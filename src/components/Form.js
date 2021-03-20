import React from 'react'
import styled from 'styled-components'

const FormStyled = styled.form`
  display:flex;
  flex-direction:row;
  align-items:flex-start;
  
`

const Form  = () => {
  return (
    <FormStyled>
      <label>
      Email:<input type="email" name="email" />
      </label>
      <input type="submit" value="submit" />
    </FormStyled>
  )
}

export default Form 

