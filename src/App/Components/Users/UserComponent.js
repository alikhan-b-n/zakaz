import {baseUrl} from "../../api/axios";

export function UserComponent(prop) {
    const divStyle = {
        'backgroundImage': `url(${baseUrl}/user/${prop.user.Id}/${prop.user.avatar})`
    }
    var kind;
    switch (prop.user.roleId){
        case 3:
            kind = "Админ"
            break
        case 2:
            kind = "Учитель"
            break
        case 1:
            kind = "Ученик"
            break
    }
    if (prop.user.Id === 1)
        console.log(prop.user.roleId)
    return(
        <div className="grid 3xl:grid-cols-5 lg:grid-cols-1 flex 3xl:w-[1420] mx-auto bg-white mb-[40px] rounded font-medium">
            <div className="col-span-1 3xl:border-r-4 border-r-[#E2E9EF] lg:border-r-0 lg:border-b-4 p-[10px] flex lg:flex-row
                3xl:flex-col text-center items-center justify-center">
                <div style={divStyle} className="object-contain 3xl:w-[197px] 3xl:h-[197px]
                2xl:w-[180px] 2xl:h-[180px] xl:w-[140px] xl:h-[140px] lg:w-[150px] lg:h-[150px] lg:mb-[10px] rounded-[197px] bg-no-repeat bg-cover "/>
            </div>
            <div className="col-span-3 bg-white p-[30px] flex flex-col justify-between">
                <div>
                    <h1 className="3xl:text-[25px] sm:text-[22px] font-[600]">{prop.user.email}</h1>
                    <p className="3xl:text-[18px] sm:text-[15px]">{prop.user.name}</p>
                    <p className="3xl:text-[18px] sm:text-[15px]">{prop.user.surname}</p>
                    <p className="3xl:text-[18px] sm:text-[15px]">{prop.user.lastQuiz}</p>
                    <p className="3xl:text-[18px] sm:text-[15px]">{prop.user.Id}</p>
                    <p className="3xl:text-[18px] sm:text-[15px]">{kind}</p>
                </div>
            </div>
        </div>
    )
}