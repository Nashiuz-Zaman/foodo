//redux
import { useSelector } from 'react-redux';

export default function useNoScrollBackground() {
  const state = useSelector((state) => state);

  if (Object.keys(state).length !== 0) {
    if (state.searchWindow.isOpen || state.navigation.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }
}
