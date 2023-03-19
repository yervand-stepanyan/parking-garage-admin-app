interface Filter {
  checked: boolean;
  id: string;
  title: string;
}

export interface FiltersProps {
  filters: Filter[];
}
