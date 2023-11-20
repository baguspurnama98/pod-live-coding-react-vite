import { Button, Form, Modal } from 'antd'
import React from 'react'

const ModalComponent = () => {

  return (
    <Modal
      title={<div className='text-xl text-blue-600'>Tambah Data Siswa</div>}
      centered
      open={isOpen}
      onOk={() => { }}
      onCancel={() => { }}
      footer={<div className='flex items-center justify-center'>
        <Button onClick={() => { }}>
          Kembali
        </Button>
        <Button type="primary" onClick={() => { }} >
          Simpan
        </Button>
      </div>}
    >
      <Form className='py-4' onFinish={() => { }}>
        <div>Content</div>
      </Form>
    </Modal>
  )
}

export default ModalComponent