import React from "react";
import QuizCard from "../QuizCard/index.jsx";
import {Container} from './styles.jsx'

function QuizContainer({user,quiz}) {
    
    return (
            <Container user={user.is_teacher}>
                <div className='quiz__container'>
                {quiz.map((item)=>{return (
                    <div className='Quiz__content' key={item.id}>
                        <QuizCard title={item.title} subject={item.subject} />
                    </div>
                )})}
                </div>
            </Container>
        )
    
}

export default QuizContainer