import './HamburgerButton.css';

interface HamburgerButtonProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function HamburgerButton({ checked = false, onChange }: HamburgerButtonProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <label className="hamburger-button">
      <input type="checkbox" onChange={handleChange} checked={checked} />
    </label>
  );
}
