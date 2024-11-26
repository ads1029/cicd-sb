"use client";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, variant = 'primary' }: ButtonProps) {
  const styles = {
    button: {
      padding: '8px 16px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      ...variant === 'primary' 
        ? {
            backgroundColor: '#ef4444',
            color: 'white',
          }
        : {
            backgroundColor: '#e5e7eb',
            color: '#1f2937',
          }
    }
  };

  return (
    <button style={styles.button}>
      {label}
    </button>
  );
} 