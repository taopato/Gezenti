import React from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorText?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  errorText,
  className = '',
  ...rest
}) => {
  const inputClass = `input ${errorText ? 'input-error' : ''} ${className}`.trim();

  return (
    <div style={{ marginBottom: '16px' }}>
      <label
        style={{
          display: 'block',
          marginBottom: '8px',
          fontSize: '14px',
          fontWeight: '500',
          color: 'var(--text-dark)',
        }}
      >
        {label}
      </label>
      <input className={inputClass} {...rest} />
      {errorText && (
        <div
          style={{
            color: '#dc3545',
            fontSize: '12px',
            marginTop: '4px',
          }}
        >
          {errorText}
        </div>
      )}
    </div>
  );
};

