import { text } from '@fortawesome/fontawesome-svg-core'
import { useEffect } from 'react'
import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { v4 as uuidv4 } from 'uuid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mannager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
        else {
            JSON.stringify;
        }

    }, [])


    const showPassword = () => {
        passwordRef.current.type = "text"
        if (ref.current.src.includes("/icons/hide.png")) {
            ref.current.src = "/icons/visible.png"
            passwordRef.current.type = "password";
        }
        else {
            passwordRef.current.type = "text";
            ref.current.src = "/icons/hide.png"
        }

    }

    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            setform({ site: "", username: "", password: "" })


            toast('Password Saved  ☑️', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else {
            toast('Invalid Input ❌', {
                theme: "dark",
            });
        }
    }

    const deletePassword = (id) => {
        let c = confirm(" Do You Want To delete the Password")
        if (c) {

            toast('Password Deleted  ☑️', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            setpasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
        }

    }



    const editPassword = (id) => {

        setform(passwordArray.filter(i => i.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id !== id))

    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }



    const copyText = (text) => {
        toast('✔️ Copied To Clipbord', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
        navigator.clipboard.writeText(text)
    }



    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition="Bounce"
            />
            {/* Same as */} 
            <ToastContainer />


            <div className=" absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

            <div className="p-2 md:mycontainer md:px-0">
                <h1 className=' font-bold text-4xl text-center '>

                    <span className=' text-green-600'>&lt;</span>
                    Password
                    <span className='  text-green-600'> Mannager</span>
                    <span className=' text-green-600'>/&gt; </span>
                </h1>
                <p className='text-green-900 text-lg text-center'> Your Own Password Mannager</p>


                <div className="text-black flex flex-col p-4  gap-8 justify-center ">

                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-green-500  text-black p-4 py-1  w-3/4' type="text" name="site" id="site" />

                    <div className=" md:flex-row w-full justify-between gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border   border-green-500  text-black p-4 py-1  w-2/4 ' type="text" name="username" id="username" />

                        <div className="relative my-5 w-2/6 ">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500  text-black p-4 py-1 w-full ' type="Password" name="password" id="password" />
                            <span className='absolute right-[8px]  top-[4px] cursor-pointer' onClick={showPassword} >
                                <img ref={ref} className='w-6 p-1 ' src="/icons/visible.png" alt="eye" /> </span>
                        </div>

                    </div>
                    <button onClick={savePassword} className=' flex w-fit justify-center items-center gap-2 bg-green-500 rounded-full py-2 px-8 border border-black hover:bg-[#89D2DC] font-semibold'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        SAVE </button>
                </div>

                <div className="passwords">
                    <h2 className='text-2xl py-2 font-bold'> Your Password</h2>
                    {passwordArray.length === 0 && <div> No Password to Show </div>}
                    {passwordArray.length != 0 && < table className="table-auto w-full rounded-md overflow-hidden mb-10">
                        <thead className='bg-green-800 text-white'>
                            <tr>
                                <th className='py-2 px-16'>Site </th>
                                <th className='py-2 px-16'> UserName</th>
                                <th className='py-2 px-16'>Password</th>
                                <th className='py-2 px-16'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {

                                return <tr key={index}>
                                    <td className='flex py-2 text-centern gap-2'><a href={item.site} target='_blank' >{item.site}</a>

                                        <div className='flex items-center justify-center'>


                                            <div className='  size-2 flex items-center cursor-pointer  gap-2' onClick={() => { copyText(item.site) }}>
                                                <span className="  material-symbols-outlined">
                                                    content_copy
                                                </span>
                                            </div>
                                        </div>

                                    </td>

                                    <td className='  py-2 text-center' >
                                        <div className='flex items-center justify-center gap-2'>
                                            <span> {item.username}</span>

                                            <div className='  size-2 items-center  flex  cursor-pointer  ' onClick={() => { copyText(item.username) }}>
                                                <span className=" material-symbols-outlined">
                                                    content_copy
                                                </span>
                                            </div>
                                        </div>
                                    </td>


                                    <td className=' justify-center  py-2 text-center'>
                                        <div className='flex items-center justify-center m-2 gap-2'>
                                            <span>{item.password}</span>

                                            <div className=' size-1 flex items-center  cursor-pointer  ' onClick={() => { copyText(item.password) }}>
                                                <span className="  material-symbols-outlined">
                                                    content_copy
                                                </span>
                                            </div>
                                        </div>

                                    </td>

                                    <td className=' justify-center  py-2 text-center'>
                                        <span onClick={() => { editPassword(item.id) }} className="material-symbols-outlined cursor-pointer mx-1">
                                            edit
                                        </span>
                                        <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }} >
                                            <lord-icon
                                                src="https://cdn.lordicon.com/drxwpfop.json"
                                                trigger="morph"
                                                state="morph-trash-in"
                                                colors="primary:#121331,secondary:#848484"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>

                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table >
                    }

                </div >

                {passwordArray.length === 0 && <div> No Password to Show </div>}
            </div >
        </>

    )
}

export default Mannager
