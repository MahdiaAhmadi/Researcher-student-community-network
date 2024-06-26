"use client"
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { Input } from "@/components/ui/Input";
import { deletereq } from "@/data/webService"

const BanDialog = ({ userId }) => {
  const [showModal, setShowModal] = useState(false);
  const [days, setDays] = useState(7);

  function handleBan() {
    deletereq(`/user/delete-user/${userId}`).then((data) => {
      console.log(data);
      }).catch(() => alert("Error banning user"));

    setShowModal(false)
  }
  function handleSuspend(time) {
    deletereq(`/user/suspend-user/${userId}?suspension_days=${time}`).then((data) => {
      console.log(data);
      }).catch(() => alert("Error suspending user"));

    setShowModal(false)
  }
  return (
    <>
    <button className="bg-gray-100 ml-3 rounded-full material-symbols-outlined text-red-500 hover:text-white hover:bg-red-500 px-1"
            onClick={() => {console.log(showModal); setShowModal(true)}}>flag</button>
      <Modal className="relative m-20 justify-center" show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header className="p-5 text-center items-center content-center">Ban User</Modal.Header>
          <Modal.Body>
            <div className="space-y-6 items-center justify-center">
            <div>Time of Suspension</div>
            <label className="text-black">
    Time of Suspension: <input name="Time" type="number" defaultValue={days} onChange={(e) => setDays(e.target.value)} /> days
            </label>
            <Button className="bg-red-500 items-center" onClick={handleBan}>Ban User</Button>
            <Button className="bg-red-500 items-center" onClick={() => handleSuspend(days)}>Suspend User</Button>
            </div>
          </Modal.Body>
      </Modal>
    </>
  )
}

export { BanDialog }
