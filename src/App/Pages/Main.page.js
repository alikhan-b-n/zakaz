import {FooterComponent} from "../Components/FooterComponent";
import {HeaderComponent} from "../Components/HeaderComponent";
import {SidebarComponent} from "../Components/SidebarComponent";
import {Appeal} from "../Components/AppealComponent";
import {MainInfoComponent} from "../Components/MainInfoComponent";

export function MainPage() {
    const course = {
        "teacherName":"Тлеуова Дарина",
        "courseTitle":"История Казахстана",
        "courseDescription":"Вовлечем в новым мир истории нашей Родины",
        "imagePathTeacher":"../Assets/teacher_history.svg",
        "imagePath":"../Assets/historyLesson.png"
    };

    const course1 = {
        "teacherName":"Степанова Мария",
        "courseTitle":"Математика",
        "courseDescription":"Вовлечем в новым мир точной науки",
        "imagePathTeacher":"../Assets/mathTeacher.png",
        "imagePath":"../Assets/MathIcon.svg"
    };

    const teacher = {
        'name': 'Тлеуова Дарина',
        'subject':'История',
        'description':'С глубоким образованием и страстью к изучению истории своей страны, Аделина окончила\n' +
            '            исторический факультет Евразийского Национального Университета имени Л. Н. Гумилева. Вот уже более 10 лет\n' +
            '            она с вдохновением и преданностью делает историю Казахстана живой и увлекательной для своих студентов.\n',
        'imageUrl': process.env.PUBLIC_URL + '../Assets/teacher_history.svg'
    }

    return (
        <div>
            <HeaderComponent/>
            <div className="lg:ml-0 flex">
                <div className="3xl:w-[150px] 2xl:w-[120px] xl:w-[100px] lg:w-0 h-70%">
                    <SidebarComponent/>
                </div>
                <div className="flex flex-col  3xl:w-[1420px] 2xl:w-[1100px] xl:w-[900px] lg:w-[600px] md:w-[500px] m-auto
            3xl:font-bold xl:font-semibold md:font-medium">
                    <MainInfoComponent/>
                    <div className="flex flex-col justify-center">
                        <h2 className="inline-block mt-[55px] 3xl:text-[60px] 2xl:text-[55px] xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] xsm:text-[30px]
                    m-auto">Наши курсы</h2>
                        <div className="flex m-auto lg:flex-col">
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <h2 className="inline-block mt-[55px] 3xl:text-[60px] 2xl:text-[55px] xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] xsm:text-[30px] m-auto ">Нужна помощь?</h2>
                        <Appeal/>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </div>
    );
}


