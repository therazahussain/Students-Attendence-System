import React, { useEffect } from 'react';
import { collection, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from '../firebase-config';
import { useSelector, useDispatch } from 'react-redux';
import { setAlertBox, setStudents } from '../store';
import AlertComponent from "./AlertComponent"

const PresentStudent = () => {

    const { students } = useSelector((state) => state.students);
    const dispatch = useDispatch()

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

    const handleCheckout = async(id,name) => {

        console.log(id)

        const docRef = doc(db, 'students', id)

        try {
            await updateDoc(docRef, {
                checkout:new Date(new Date().getTime()).toLocaleTimeString()
            })
            dispatch(setAlertBox({ title: "Succesfuuly Checked-Out", message:`${name} checked-out`, color:"teal", show: true }))
        } catch (error) {
            dispatch(setAlertBox({ title: "Error!", message:`error.message`, color:"red", show: true }))
            console.log(error)
        }
        
        

        getStudent();

    }

    return (
        <>
        <AlertComponent></AlertComponent>
            <div className='w-full pt-20 mb-10'>

                <h1 className='text-2xl font-bold mb-6 text-purple-400 text-center'>Present Student In School</h1>

                <table className="w-full border">
                    <thead>
                        <tr className="bg-purple-100">
                            <th className="border px-4 py-2">Sr. No.</th>
                            <th className="border px-4 py-2">Roll Number</th>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Check-in Time</th>
                            <th className="border px-4 py-2">Check-out Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{student.data.rollNumber}</td>
                                <td className="border px-4 py-2">{student.data.name}</td>
                                <td className="border px-4 py-2">
                                    <button className="m-1 bg-transparent hover:bg-green-400 text-green-600 font-semibold hover:text-white py-2 px-4 border border-green-400 hover:border-transparent rounded">{student.data.checkin}</button>
                                </td>
                                <td className="border px-4 py-2">
                                    {student.data.checkout ?
                                    <button className="m-1 bg-red-400 font-semibold text-white py-2 px-6 border border-red-400 hover:border-transparent rounded"
                                    >
                                        {student.data.checkout}
                                    </button>
                                    :
                                    <button className="m-1 bg-transparent hover:bg-red-400 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-400 hover:border-transparent rounded"
                                        onClick={() => handleCheckout(student.id, student.data.name)}
                                    >
                                        Leave School
                                    </button>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default PresentStudent;
