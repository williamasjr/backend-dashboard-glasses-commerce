"use client";

import { useParams, useRouter } from "next/navigation";
import { PlusIcon } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { Heading } from "@/src/components/ui/heading";
import { Separator } from "@/src/components/ui/separator";
import { ProductColumn, columns } from "./columns";
import { DataTable } from "@/src/components/ui/data-table";
import ApiList from "@/src/components/ui/api-list";

interface ProductClientProps {
  data: ProductColumn[];
}

export const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Produtos (${data.length})`}
          description="Gerencie produtos para sua loja"
        />
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <PlusIcon className="mr-2 h-4 w-4" />
          Adicionar novo
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="Chamadas API para produtos" />
      <Separator />
      <ApiList entityName="products" entityIdName="productId" />
    </>
  );
};
