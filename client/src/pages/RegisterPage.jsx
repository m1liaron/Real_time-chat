import RegisterForm from "../components/forms/RegisterForm.jsx";

const RegisterPage = () => {
    return (
        <div className="relative flex items-center justify-center h-screen bg-cover bg-center"
             style={{backgroundImage: 'url(https://images.alphacoders.com/134/1340191.jpeg)'}}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <RegisterForm/>
        </div>
    );
};

export default RegisterPage;