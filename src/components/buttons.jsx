import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Button = ({text="Use Text Here Bro", path="/"}) => {
  const navigate = useNavigate();

  return (
    <StyledWrapper>
      <button href="#" className="button" style={{color: '#A546BA'}} onClick={()=>{navigate("/home")}}>
        <span className="button__icon-wrapper">
          <svg viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__icon-svg" width={10}>
            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
          </svg>
          <svg viewBox="0 0 14 15" fill="none" width={10} xmlns="http://www.w3.org/2000/svg" className="button__icon-svg button__icon-svg--copy">
            <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" fill="currentColor" />
          </svg>
        </span>
        {text}
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    color: '#A546BA'
    font-size: 12px,
    line-height: 1;
    text-decoration: none;
    display: inline-flex;
    border: none;
    cursor: pointer;
    align-items: center;
    gap: 0.75rem;
    background-color: rgba(0,0,0, 0.6);
    color: rgba(255, 255, 255, 0.8);
    border-radius: 10rem;
    font-weight: 550;
    padding: 0.5rem 1rem;
    padding-left: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: background-color 0.3s;
  }

  .button__icon-wrapper {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    position: relative;
    color: var(--clr);
    background-color: #fff;
    border-radius: 50%;
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  .button:hover {
  color: #000;
    background-color: rgba(255, 255, 255, 0.8);

  }

  .button:hover .button__icon-wrapper {
    color: #000;
    background-color: #A546BA;
  }

  .button__icon-svg--copy {
    position: absolute;
    transform: translate(-150%, 150%);
  }

  .button:hover .button__icon-svg:first-child {
    transition: transform 0.3s ease-in-out;
    transform: translate(150%, -150%);
  }

  .button:hover .button__icon-svg--copy {
    transition: transform 0.3s ease-in-out 0.1s;
    transform: translate(0);
  }`;

export default Button;
