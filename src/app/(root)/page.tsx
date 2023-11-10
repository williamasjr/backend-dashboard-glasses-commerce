"use client";

import { Modal } from "@/src/components/ui/modal";

const setUpPage = () => {
  return (
    <div className="p-4">
      <Modal
        title="test"
        description="test description"
        isOpen
        onClose={() => {}}
      >
        children
      </Modal>
    </div>
  );
};

export default setUpPage;
