import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { db } from '../../firebase-config'
import { setStudents } from '../../store'

const Services = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { students } = useSelector((state) => state.students);

  console.log(students)

  const present = students.filter((student)=> {
    return student.data.checkout === "";
  })

  const service = [
    {
      title: `Take Attendance`,
      link: "/add-student",
      button: "Mark",
    },
    {
      title: "View Attendance",
      link: "/attendance",
      button: "View"
    },
    {
      title: `Total Students : ${students.length}`,
      link: "/add-student",
      button: "",
    },
    {
      title: `Total Student present in School Today : ${present.length}`,
      link: "/add-student",
      button: ""
    }]

    const getStudent = async () => {
      const studentRef = collection(db, 'students')
      try {
          const response = await getDocs(studentRef)
          const student = response.docs.map(doc => ({
              data: doc.data(),
              id: doc.id
          }))
          dispatch(setStudents(student))

      } catch (error) {
          console.log(error);
      }
  }

  useEffect(() => {
      getStudent()
  }, [])


  return (
    <>
      <div className="flex justify-center flex-wrap mt-6">
        <h1 className="font-bold text-2xl mt-14 p-7 text-purple-400">Attendance Dashboard</h1>
        <div className="flex justify-center items-center flex-wrap gap-20 mt-8 mr-5 ml-5 mb-4">

          {
            service.map((service, index) => {
              return (
                <div key={index} className="max-w-sm rounded overflow-hidden shadow-2xl shadow-purple-300 ">
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-center">{service.title}</div>
                  </div>
                  {service.button !== "" && <div className="flex gap-1 justify-center pb-4">
                    <button className="m-1 bg-transparent hover:bg-purple-400 text-purple-600 font-semibold hover:text-white py-2 px-4 border border-purple-400 hover:border-transparent rounded" onClick={() => navigate(service.link)}>
                      {service.button}
                    </button>
                  </div>}
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Services