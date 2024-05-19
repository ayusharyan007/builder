import './App.css';
import { IoAddOutline } from "react-icons/io5";
import { IoMdArrowDropup, IoMdArrowDropdown, IoIosLink } from "react-icons/io";
import { TfiUpload } from "react-icons/tfi";
import { VscClose } from "react-icons/vsc";
import { ReactComponent as NothingAdded } from './resources/Group 4606.svg'
import { useState } from 'react';

function App() {
    const [addBtnActive, setAddBtnActive] = useState(false);
    const [courseEmpty, setCourseEmpty] = useState(true);
    const [addModule, setAddModule] = useState(false);
    const [addLink, setAddlink] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [storedValue, setStoredValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        setStoredValue(inputValue);
        setInputValue('');
    };

    return (
        <div className="flex flex-col items-center justify-center text-center w-full">
            <nav className="flex items-center justify-between p-4 text-black w-3/4 rounded-md">
                <h1 className="text-xl font-bold">Course Builder</h1>
                <button
                    className="flex items-center gap-1 bg-custom-red hover:bg-custom-red-hover text-white font-bold py-2 px-4 rounded"
                    onClick={() => setAddBtnActive(!addBtnActive)}
                >
                    <IoAddOutline />
                    Add
                    {addBtnActive ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                </button>
            </nav>
            <div className='w-3/4'>
                {addBtnActive && (
                    <div className="mt-4 ml-auto mr-4 p-4 bg-gray-100 rounded-md shadow-lg w-1/4 flex flex-col">
                        <button className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded transition duration-200" onClick={() => setAddModule(!addModule)}>
                            <span>Create Module</span>
                        </button>
                        <button className="flex items-center space-x-2 mt-2 p-2 hover:bg-gray-200 rounded transition duration-200" onClick={() => setAddlink(!addLink)}>
                            <IoIosLink /> <span>Add Link</span>
                        </button>
                        <button className="flex items-center space-x-2 mt-2 p-2 hover:bg-gray-200 rounded transition duration-200">
                            <TfiUpload /> <span>Upload</span>
                        </button>
                    </div>
                )}
            </div>

            {courseEmpty && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 text-center">
                    <NothingAdded className="h-32 w-32 mx-auto" />
                    <h2 className="font-bold mt-4">Nothing added here yet</h2>
                    <p className="text-gray-600">Click on the [+] Add button to add items to this course</p>
                </div>

            )}

            {addModule && (
                <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-900 bg-opacity-50">

                    <div className="bg-white p-8 rounded-md shadow-lg text-center">
                        <div className='flex'>
                            <span className='font-bold'>Create New Module</span>
                            <button onClick={() => setAddModule(!addModule)} className='ml-auto'><VscClose /></button>
                        </div>

                        <h2 className="font-bold mt-6 text-sm text-left">Module Name</h2>
                        <input className='mt-4 p-1 rounded-lg border border-gray-300 w-full' type="text" value={inputValue} onChange={handleChange} name="Moudle Name" id="" />
                        <div className='flex flex-row items-center ml-12 gap-x-5 mt-5'>
                            <button onClick={() => setAddModule(!addModule)} className='mr-4 prev-btn bg-white border border-gray-300 hover:bg-white-700 text-black font-bold py-2 px-4 rounded'>Cancel</button>
                            <button onClick={()=> setStoredValue(storedValue)}className='mr-4 prev-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Create</button>
                        </div>
                    </div>
                </div>
            )}
            {addLink && (
                <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-900 bg-opacity-50">

                    <div className="bg-white p-8 rounded-md shadow-lg text-center">
                        <div className='flex'>
                            <span className='font-bold'>Add a new Link</span>
                            <button onClick={() => setAddlink(!addLink)} className='ml-auto'><VscClose /></button>
                        </div>

                        <h2 className="font-bold mt-8 text-sm text-left">Url</h2>
                        <input className='mt-4 p-1 rounded-lg border border-gray-300 w-full' type="text" name="url" id="" />
                        <h2 className="font-bold mt-6 text-sm text-left">Display Name</h2>
                        <input className='mt-4 p-1 rounded-lg border border-gray-300 w-full' type="text" name="display_name" id="" />
                        <div className='flex flex-row items-center ml-12 gap-x-5 mt-5'>
                            <button onClick={() => setAddlink(!addLink)} className='mr-4 prev-btn bg-white border border-gray-300 hover:bg-white-700 text-black font-bold py-2 px-4 rounded'>Cancel</button>
                            <button onClick={() => setAddlink(!addLink)} className='mr-4 prev-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Create</button>
                        </div>
                    </div>
                </div>
            )}
            {
                storedValue && (
                    <div className='border border-gray-300'>
                        {storedValue}
                    </div>
                )
            }
        </div>
    );
}

export default App;
