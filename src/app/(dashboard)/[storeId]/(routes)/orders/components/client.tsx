"use client";

import { Heading } from "@/src/components/ui/heading";
import { Separator } from "@/src/components/ui/separator";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/src/components/ui/data-table";

interface OrderClientProps {
  data: OrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Pedidos (${data.length})`}
        description="Gerencie pedidos para sua loja"
      />
      <Separator />
      <DataTable searchKey="products" columns={columns} data={data} />
    </>
  );
};
