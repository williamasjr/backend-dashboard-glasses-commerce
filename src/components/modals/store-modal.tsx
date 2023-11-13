"use client";

import { useStoreModal } from "@/src/hooks/use-store-modal";
import { Modal } from "@/src/components/ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Criar Loja"
      description="Adiciona uma nova loja para gerenciar produtos e categorias"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Futura criação de um formulário de loja
    </Modal>
  );
};
