'use client';

import { useState } from 'react'

export default function FormElements() {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal};

  return (
    <>
        <button onClick={() => setOpenModal(true)}>
            Sign In
        </button>
        <div className={`${openModal ? 'block' : 'hidden'} bg-gray-100 w-full fixed grid items-center justify-center left-0`}>
            <div>
                <header className="grid grid-2 justify-end">
                    <div></div>
                    <button onClick={() => setOpenModal(false)}>
                        <span>Close</span>
                    </button>
                </header>
                <div>
                    <div>
                        <label htmlFor="">Fullname</label>
                        <input type="text"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}


