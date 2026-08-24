import logo from "../assets/eduem/logo-footer.svg";

export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logo}
      width="99"
      height="41"
      className={className}
      alt="ЕдуЕм"
    />
  );
}
