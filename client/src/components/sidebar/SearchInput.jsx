import {useState} from 'react';
import toast from "react-hot-toast";
import useConversation from "../../zustand/useConversation.js";
import useGetConversations from "../../hooks/useGetConversations.js";
import {IoSearchSharp} from "react-icons/io5";

const SearchInput = () => {
    const [searchText, setSearchText] = useState('');
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();

    const onSearch = (e) => {
        e.preventDefault();
        if(!searchText) return;
        if (searchText.length < 3) {
            return toast.error("Search term must be at least 3 characters long");
        }

        const conversation = conversations.find(c =>  c.username.toLowerCase().includes(searchText.toLowerCase()));
        if (conversation) {
            setSelectedConversation(conversation);
            setSearchText("");
        } else toast.error("No such user found!");
    }

    return (
        <form onSubmit={onSearch} className='flex items-center gap-2'>
            <input
                type='text'
                placeholder='Search…'
                className='input input-bordered rounded-full'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                <IoSearchSharp className='w-6 h-6 outline-none'/>
            </button>
        </form>
    );
};

export default SearchInput;