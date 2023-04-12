import React, { ReactNode } from 'react'

interface IButton {
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
  icon?: ReactNode;
}

interface ILoadingButton extends IButton {
  loading: boolean;
  size?: number;
}

export type {
  IButton,
  ILoadingButton,
}