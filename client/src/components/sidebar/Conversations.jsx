import useGetConversations from "../../hooks/useGetConversations.js";

const Conversations = () => {
    const {loading, conversations} = useGetConversations();

    console.log(conversations)

    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {/*{conversations.map((conversation, idx) => (*/}
            {/*    <div>*/}
            {/*        <h1></h1>*/}
            {/*    </div>*/}
            {/*))}*/}


            {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
        </div>
    );
};

export default Conversations;