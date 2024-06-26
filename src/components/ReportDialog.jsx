"use client"
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { Input } from "@/components/ui/Input";
import { post } from "@/data/webService"

const ReportDialog = ({ postId }) => {
  const [showModal, setShowModal] = useState(false);
  const [reportText, setReportText] = useState("");

  function handleReport() {
    post("/post/report-post", {postId: postId, reason: reportText}).then((data) => {
      console.log(data);
      }).catch(() => alert("Error reporting post"));

    setShowModal(false)
  }
  return (
    <>
    <button className="bg-gray-100 ml-3 rounded-full material-symbols-outlined text-red-500 hover:text-white hover:bg-red-500 px-1"
            onClick={() => {console.log(showModal); setShowModal(true)}}>flag</button>
      <Modal className="relative m-20 justify-center" show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header className="p-5 text-center items-center content-center">Report Post</Modal.Header>
          <Modal.Body>
            <div className="space-y-6 items-center justify-center">
            <textarea required
                  rows="4"
                  className="w-full text-black rounded-xl"
                  defaultValue={reportText}
                  onChange={(e) => setReportText(e.target.value)}
                  placeholder="Explain why you are reporting this post"
            />
            <Button className="bg-red-500 items-center" onClick={handleReport}>Send Report</Button>
            </div>
          </Modal.Body>
      </Modal>
    </>
  )
}

export { ReportDialog }
