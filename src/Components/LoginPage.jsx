import React, { useState } from 'react'; 
import { Mail, Lock, Eye, EyeOff } from 'react-feather';
import { useNavigate } from 'react-router-dom'; 
export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();  
    const handleLogin = () => {
        navigate('/calendar');
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-[#EAE9E3]">
            <div className="mb-10">
                <img className="h-44 w-44 -mb-4 rounded-full" src="/pics/logo.png" alt="Logo" />
            </div>

            <div className="w-full max-w-sm p-6 bg-gradient-to-b rounded-xl">
                <div className="relative w-full mb-5">
                    <Mail
                        size={16}
                        className="absolute text-gray-500 left-3 top-2/4 transform -translate-y-1/2"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        className="pl-10 placeholder:text-sm placeholder:-mt-10 pr-4 py-2 w-full border border-none rounded-xl focus:outline-black focus:ring-2 focus:border-black"
                    />
                </div>

                <div className="relative w-full mb-5">
                    <Lock
                        size={16}
                        className="absolute text-gray-500 left-3 top-2/4 transform -translate-y-1/2"
                    />
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        className="pl-10 pr-10 placeholder:text-sm placeholder:-mt-10 py-2 w-full border border-none rounded-xl focus:outline-black focus:ring-2 focus:border-black"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute -ml-10 top-2/4 transform -translate-y-1/2 text-gray-500"
                    >
                        {showPassword ? <EyeOff size={14} /> : <Eye size={16} />}
                    </button>
                </div>

                <div className="ml-6 flex space-x-2 mt-5">
                    <input
                        type="checkbox"
                        className="w-5 h-5 border-2 border-[#417398] rounded-sm accent-[#417398] checked:accent-[#417398]"
                    />
                    <img src="/pics/Unchecked.svg" alt="Unchecked" />
                </div>

                <button
    onClick={handleLogin} 
    className="w-full text-white py-2 px-4 mt-7 rounded-xl hover:bg-gradient-to-b hover:from-black hover:to-grey"
    style={{
        background:" #417398" ,
    }}
>
    Log in
</button>

            </div>
        </div>
    );
}
