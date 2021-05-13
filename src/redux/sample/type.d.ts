import { MemoryState } from '../../enums/MemoryState';

interface IMem {
  index: number;
  nr: number;
  status: MemoryState;
}

type MemoryAction = {
  type: string;
  mem: IMem;
};

type DispatchType = (args: MemoryAction) => MemoryAction;
