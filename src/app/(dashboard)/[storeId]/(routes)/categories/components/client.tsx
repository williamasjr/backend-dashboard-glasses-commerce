"use client";

import { useParams, useRouter } from "next/navigation";
import { PlusIcon } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { Heading } from "@/src/components/ui/heading";
import { Separator } from "@/src/components/ui/separator";
import { CategoryColumn, columns } from "./columns";
import { DataTable } from "@/src/components/ui/data-table";
import ApiList from "@/src/components/ui/api-list";

interface CategoryClientProps {
  data: CategoryColumn[];
}

export const CategoryClient: React.FC<CategoryClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage categories for you store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/categories/new`)}
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API call for Categories" />
      <Separator />
      <ApiList entityName="categories" entityIdName="categoryId" />
    </>
  );
};
