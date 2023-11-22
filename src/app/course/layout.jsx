import Courses from "./Courses"

export const metadata = {
    title: "About my Courses",
    description: 'frontend 6b6 class 1 on React',
    keywords: 'React, Next, JavaScript'


}

export default function layout({children}){
    return (
        <div>
            <Courses />
            {children}
        </div>
    )
}