import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { Rootstate } from '.';

export const useTypedSelector: TypedUseSelectorHook<Rootstate> = useSelector;

export default {};
