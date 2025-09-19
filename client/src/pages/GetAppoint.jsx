import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams, useNavigate } from 'react-router-dom'; 
import BackendUrl from "../util/backendUrl";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const GetAppoint = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 
    const [mydata, setMydata] = useState({});
    const [input, setInput] = useState({});

    useEffect(() => {
        if (!id) {
            toast.error("No doctor selected. Redirecting to home...");
            setTimeout(() => {
                navigate('/');
            }, 3000);
            return;
        }

        const getData = async () => {
            let api = `${BackendUrl}/doctor/doctorInfo/?id=${id}`;
            try {
                const res = await axios.get(api);
                console.log(res.data);
                setMydata(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        getData();
    }, [id, navigate]);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(values => ({ ...values, [name]: value }));
        console.log(input);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let api = `${BackendUrl}/doctor/patientInfo`;
        try {
            const res = await axios.post(api, { id: id, ...input });
            console.log(res.data);
            toast.success("Appointment Booked Successfully");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <ToastContainer />
            <h3 className='h33'>Book your appointment</h3>

            <Card style={{ width: '18rem' }} className='doctor-card'>
                <Card.Img variant="top" src={mydata.image} height="270" />
                <Card.Body>
                    <Card.Title><span className='span'>Dr.: {mydata.doctorname}</span></Card.Title>
                    <Card.Text>
                        Speciality: {mydata.speciality}<br />
                        City: {mydata.city}<br />
                        Email: {mydata.email}<br />
                        Mobile No: {mydata.contact}
                    </Card.Text>
                </Card.Body>
            </Card>

            <h3 className='h33'>Submit Patient Detail For Appointment</h3>

            <Form id='form'>
                <Form.Group className="mb-3">
                    <Form.Label>Enter Patient Name</Form.Label>
                    <Form.Control type="text" name="patientname" onChange={handleInput} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Enter Diseases</Form.Label>
                    <Form.Control type="text" name="diseases" onChange={handleInput} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Enter Address</Form.Label>
                    <Form.Control type="text" name="address" onChange={handleInput} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Enter Contact Number</Form.Label>
                    <Form.Control type="text" name="contact" onChange={handleInput} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control type="text" name="email" onChange={handleInput} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default GetAppoint;
