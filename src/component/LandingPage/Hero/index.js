import { useRouter } from 'next/router';

const Hero = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 py-25" id="free-trial" style={{
            background: 'linear-gradient(90deg, rgba(255,255,240,1) 17%, rgba(167,231,244,1) 52%, rgba(255,255,240,1) 81%);'
        }}>

            <h1 className="text-3xl font-bold text-center mb-4" >
                DigiCare4u Tracking Software
            </h1>

            <p className="text-center text-lg text-gray-700 mb-6">
                The <span className="text-blue-400 text-xl font-bold"> DigiCare4u</span>  Tracking System provides real-time location tracking,
                analytics, and insights to help <br /> you monitor and manage your resources
                efficiently.
            </p>

            <div className="flex space-x-4">
                <button
                    onClick={() => router.push('/auth/login')}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    style={{
                        background: 'linear-gradient(291deg, rgba(255, 255, 255, 1) 0%, rgba(0, 105, 217, 1) 57%)',
                        color: 'white'
                    }}
                >
                    Start Free Trail
                </button>
                <button
                    onClick={() => console.log('clicked')}
                    className="bg-white hover:bg-white-400 text-gray-800 font-bold py-2 px-4 rounded">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Hero;
