export function SidebarComponent() {
    return (
        <div className="bg-white text-white w-64 border-r-2 border-[#E2E9EF] h-[1000px]">
            <div className="p-4">
                <h1 className="text-2xl font-semibold">Sidebar</h1>
                <ul className="mt-4">
                    <li className="mb-2">
                        <a href="#" className="block text-gray-300 hover:text-white">Home</a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="block text-gray-300 hover:text-white">About</a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="block text-gray-300 hover:text-white">Services</a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="block text-gray-300 hover:text-white">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}