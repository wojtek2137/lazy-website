import styled from "@emotion/styled";
import { fonts } from "src/config/theme";

export const Form = styled('form')`
    padding: 50px;
    transition: all 2s ease-in-out;
    text-align: center;
`;
export const Input = styled('input')`
    font-family: ${fonts.mulish.Light};
    padding: 5%;
    transition: all 2s ease-in-out;
    text-align: center;
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid #ccb379b9;
    color: rgb(19, 19, 19);
    font-size: 16px;
    margin-bottom: 16px;
    justify-content: center;

    &::placeholder{
        color: #ccb379;
    }
`;
export const InputSubmit = styled('input')`
    font-family: ${fonts.mulish.Medium};
    background: #ccb379b9;
    border-color: transparent;
    color: #fff;
    font-size: 18px;
    letter-spacing: 2px;
    height: 50px;
    margin-top: 20px;
    width: 50%;

    &::hover {
        background-color: #ac8f4bb9;
        -webkit-transition: background 0.6s 0s ease -in -out;
        -moz-transition: background 0.6s 0s ease -in -out;
        -o-transition: background 0.6s 0s ease -in -out;
        transition: background 0.6s 0s ease -in -out;
        cursor: pointer;    
    }
`;

export const TextAreaWrapper = styled('textarea')`
    font-family: ${fonts.mulish.Light};
    transition: all 2s ease-in-out;
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid #ccb379b9;
    color: rgb(19, 19, 19);
    font-size: 18px;
    margin-bottom: 16px;
    text-align: left;
    &::placeholder{
        color: #ccb379;
        justify-content: center;
        text-align: center;
    }
    &::hover {
        background-color: #ac8f4bb9;
        -webkit-transition: background 0.6s 0s ease -in -out;
        -moz-transition: background 0.6s 0s ease -in -out;
        -o-transition: background 0.6s 0s ease -in -out;
        transition: background 0.6s 0s ease -in -out;
        cursor: pointer;    
    }
`;
