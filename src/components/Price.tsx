export function Price({ value }: { value: number | string }) {
  return <span className="price">{value}$</span>;
}
