//react
import { useEffect } from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { resetAll } from '../features/search/searchSlice';

export default function useResetSearchForm() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.searchWindow.isOpen);

  useEffect(() => {
    if (!isOpen) {
      dispatch(resetAll());
    }
  }, [isOpen, dispatch]);
}
