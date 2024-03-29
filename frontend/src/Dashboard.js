import Navigation from './Navigation'
import { CloudArrowUpIcon, LockClosedIcon} from '@heroicons/react/20/solid'
import "./Dashboard.css";
import { useState, useEffect } from "react";
import EmployeePortalImage from './Employee_Portal.jpg';
import userService from "./services/userService";
import authService from "./services/authService";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        const checkAuthentication = async () => {
            const user = authService.getCurrentUser();
            if (!user) {
                navigate('/'); // Redirect to SignIn page if not authenticated
                return; // Exit early to avoid making unnecessary API calls
            }

            try {
                // Assuming getAccountById does not need to return value for further actions here
                await userService.getAccountById();
                fetchName();
                fetchAccount();
            } catch (error) {
                console.error("Error accessing protected resource", error);
                if (error.response && error.response.status === 403) {
                    authService.logout(); // Log out if 403 Forbidden response received
                    navigate('/');
                } else {
                    // Handle other errors (e.g., network errors) as needed
                    console.error("An error occurred", error);
                }
            }
        };

        checkAuthentication();
    }, [navigate]);



    const fetchName = async () => {
        try {
            const { data } = await userService.getName();
            const nameCapitalized = data.charAt(0).toUpperCase() + data.slice(1);
            console.log("hi")
            console.log(nameCapitalized);
            setName(nameCapitalized);
        } catch (error) {
            console.error("Failed to fetch name", error);
        }
    };

    const fetchAccount = async () => {
        try {
            const { data } = await userService.getAccount();
            const { role } = data;
            setUserRole(role); // Store the role in state
        } catch (error) {
            console.error("Failed to fetch account", error);
        }
    }

    return (
        <div>
            <Navigation />
            <div className="dashboard">
                <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <svg
                        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                        aria-hidden="true"
                        >
                        <defs>
                            <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                            >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                            />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                        </svg>
                    </div>
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-indigo-600">Hello {userRole} {name}! </h1>
                            </div>
                        </div>
                        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            src={EmployeePortalImage}
                            alt=""
                        />
                        </div>
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p>
                                This is your employee portal! This is still building, but this will be your one stop shop!
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                <span>
                                    <strong className="font-semibold text-gray-900">Collaborate</strong> Collaborate With His Friends!
                                </span>
                                </li>
                                <li className="flex gap-x-3">
                                <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                <span>
                                    <strong className="font-semibold text-gray-900">Productivity</strong> Get work done!
                                </span>
                                </li>
                            </ul>
                            <p className="mt-8">
                                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}