"use client";

import { useParams, useRouter } from "next/navigation";
import { PlusIcon } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { Heading } from "@/src/components/ui/heading";
import { Separator } from "@/src/components/ui/separator";
import { BillboardColumn, columns } from "./columns";
import { DataTable } from "@/src/components/ui/data-table";
import ApiList from "@/src/components/ui/api-list";

interface BillboardClientProps {
  data: BillboardColumn[];
}

export const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Gerencie billboards para sua loja"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Adicionar Novo
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="label" columns={columns} data={data} />
      <Heading title="API" description="Chamadas API para Billboards" />
      <Separator />
      <ApiList entityName="billboards" entityIdName="billboardId" />
    </>
  );
};
