export default function classnames(...names) {
  return names.filter(Boolean).join(' ');
}