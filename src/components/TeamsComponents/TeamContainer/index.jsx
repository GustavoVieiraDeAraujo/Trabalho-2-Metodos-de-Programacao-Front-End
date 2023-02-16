import React from "react";
import TeamCard from "../TeamCard/index.jsx";
import {Container} from './styles.jsx'

function TeamsContainer({user,teams}) {
    
    return (
            <Container user={user.is_teacher}>
                <div className='teams__container'>
                {teams.map((item)=>{return (
                    <div className='teams__content' key={item.id}>
                        <TeamCard name={item.name}  />
                    </div>
                )})}
                </div>
            </Container>
        )
    
}

export default TeamsContainer