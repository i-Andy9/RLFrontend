import React, { useContext } from 'react'
import { Container } from 'reactstrap'
import StudentContext from '../../Context/Student/StudentContext'

const StudentItem = () => {

    const { selectedStudent } = useContext(StudentContext)
    console.log(selectedStudent)

    return (
        <>
            <Container>
                <div> studiante item</div>
                {selectedStudent ?
                    (
                        <>
                            <span>
                                hay algop
                            </span>
                            <h1>{selectedStudent.name}</h1>
                        </>
                    ) : (<></>)
                }
            </Container>
        </>
    )
}

export default StudentItem