export const BUTTON = {
  activate: {
    label: 'Activate',
    size: 'small',
    variant: 'contained',
  },
  deActivate: {
    color: 'error',
    label: 'Deactivate',
    size: 'small',
    variant: 'outlined',
  },
} as const;
export const ICON = {
  color: {
    disabled: 'disabled',
    secondary: 'secondary',
    success: 'success',
  },
} as const;
export const STATUS = {
  color: {
    disabled: 'disabled',
    success: 'success',
  },
  label: {
    active: 'Active',
    inActive: 'Inactive',
  },
} as const;
