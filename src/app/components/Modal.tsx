import React from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-3xl overflow-y-auto max-h-screen bg-gradient">
        <div className="p-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 float-right">
            &#x2715;
          </button>
          <div className="mt-2">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
