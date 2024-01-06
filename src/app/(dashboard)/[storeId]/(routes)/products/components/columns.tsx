"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type ProductColumn = {
  id: string;
  name: string;
  price: string;
  category: string;
  isFeatured: boolean;
  isArchived: boolean;
  createdAt: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "isArchived",
    header: "Arquivado",
  },
  {
    accessorKey: "isFeatured",
    header: "Lançado",
  },
  {
    accessorKey: "price",
    header: "Preço",
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "createdAt",
    header: "Data",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
