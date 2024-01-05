import React from 'react';

// Basic button data
export type ButtonType = 'button' | 'submit' | 'reset';

export interface IButtonBase {
  type?: ButtonType;
  disabled?: boolean;
  children?: React.ReactNode;
}