import '../../styles/Sidebar.Admin.css'
import {Link} from "react-router-dom";

export function SidebarComponentAdmin(prop) {
    return (
        <nav className=" mt-[170px] md:hidden fixed border-gray-300 border-2 rounded">
            <ul className="px-[25px] bg-white">
                <Link to="/admin/">
                    <div className="about-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="30" viewBox="0 0 42 30"
                             fill="none">
                            <path
                                d="M17.3728 7.76744C17.1468 7.63182 16.8889 7.55859 16.6254 7.55522C16.362 7.55185 16.1023 7.61847 15.873 7.74828C15.6436 7.87808 15.4529 8.06642 15.3201 8.29406C15.1874 8.5217 15.1174 8.78049 15.1174 9.044V20.9559C15.1174 21.2194 15.1874 21.4782 15.3201 21.7059C15.4529 21.9335 15.6436 22.1218 15.873 22.2516C16.1023 22.3814 16.362 22.4481 16.6254 22.4447C16.8889 22.4413 17.1468 22.3681 17.3728 22.2325L27.2993 16.2765C27.5197 16.1442 27.7021 15.9571 27.8287 15.7334C27.9553 15.5097 28.0219 15.257 28.0219 15C28.0219 14.7429 27.9553 14.4902 27.8287 14.2665C27.7021 14.0428 27.5197 13.8557 27.2993 13.7234L17.3728 7.76744ZM23.6384 15L18.0954 18.3254V11.6745L23.6384 15Z"
                                fill={prop.page === "courses" ? "#FF8E38" : "#666666"}/>
                            <path
                                d="M30.5632 0.389982C23.916 -0.129994 17.2382 -0.129994 10.5909 0.389982L6.14185 0.739398C4.82724 0.841873 3.58473 1.38131 2.61222 2.27178C1.63972 3.16225 0.993163 4.35254 0.775538 5.65306C-0.258513 11.8414 -0.258513 18.1585 0.775538 24.3468C0.993163 25.6473 1.63972 26.8376 2.61222 27.7281C3.58473 28.6186 4.82724 29.158 6.14185 29.2605L10.589 29.6099C17.2378 30.13 23.9164 30.13 30.5652 29.6099L35.0123 29.2605C36.327 29.158 37.5695 28.6186 38.542 27.7281C39.5145 26.8376 40.161 25.6473 40.3787 24.3468C41.411 18.1586 41.411 11.8413 40.3787 5.65306C40.161 4.35254 39.5145 3.16225 38.542 2.27178C37.5695 1.38131 36.327 0.841873 35.0123 0.739398L30.5632 0.389982ZM10.8232 3.36002C17.3172 2.85192 23.841 2.85192 30.3349 3.36002L34.782 3.70745C36.1241 3.81267 37.222 4.81923 37.4424 6.14542C38.4218 12.0078 38.4218 17.9921 37.4424 23.8544C37.3348 24.4995 37.0145 25.09 36.5323 25.5319C36.0502 25.9737 35.434 26.2415 34.782 26.2924L30.3349 26.6399C23.841 27.1481 17.3172 27.1481 10.8232 26.6399L6.37612 26.2924C5.72413 26.2415 5.10796 25.9737 4.62582 25.5319C4.14368 25.09 3.82332 24.4995 3.71579 23.8544C2.73639 17.9921 2.73639 12.0078 3.71579 6.14542C3.82332 5.50034 4.14368 4.90982 4.62582 4.46798C5.10796 4.02614 5.72413 3.7584 6.37612 3.70745L10.8232 3.36002Z"
                                fill={prop.page === "courses" ? "#FF8E38" : "#666666"}/>
                        </svg>
                    </div>
                </Link>
                <Link to="/admin/users">
                    <div className="work-icon">
                        <svg
                            className="mt-[7px] w-[40px] h-[40px]"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="#666666">
                            <path d="M11.9 4C6.3 4 9 11.3 9 11.3C9.6 12.3 10.4 12.1 10.4 12.8C10.4 13.4 9.7 13.6
                                    9 13.7C7.9 13.7 6.9 13.5 5.9 15.3C5.3 16.4 5 20 5 20H18.7C18.7 20 18.4 16.4 17.9 15.3C16.9
                                    13.4 15.9 13.7 14.8 13.6C14.1 13.5 13.4 13.3 13.4 12.7C13.4 12.1 14.2 12.3 14.8 11.2C14.8 11.3 17.5 4 11.9 4V4Z"
                                  fill={prop.page === "users" ? "#FF8E38" : "#666666"}/>
                        </svg>
                    </div>
                </Link>
            </ul>
        </nav>
    );
}
