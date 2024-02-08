import { useState } from "react"
import Modal from "./Modal";

function Footer() {
    const [modal, setModal] = useState(false)

    const toggle =()=>{
        setModal(!modal);
    }

    return (
        <>
        <div className="flex justify-end sm:mb-0 mb-10 sm:absolute bottom-4 right-10 sm:mx-0 mx-5 sm:mt-0 mt-4">
            <button onClick={toggle} className="border-white border-2 py-1 px-5 rounded-xl hover:border-gray-400">
                Rules
            </button>
        </div>
        {modal? <Modal toggle={toggle}/> :null}
        </>
    )
}

export default Footer
