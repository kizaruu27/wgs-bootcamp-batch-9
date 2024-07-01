import {Form, Field} from 'react-final-form';

export default function EmployeeForm() {
    const onSubmit = () => {
        console.log('Data berhasil disubmit');
    }

    return (
        <div className='container w-50 border my-5 shadow p-3 mb-5 rounded'>
            <h1 className='my-5 text-center'>Employee Form</h1>
            <Form
                onSubmit={onSubmit}
                initialValues={{employed: false}}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label className='form-label'>First Name: </label>
                            <Field className='form-control' name="firstName" component="input" type='text' placeholder="First Name" />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Last Name: </label>
                            <Field className='form-control' name='lastname' component='input' type='text' placeholder='Last Name'/>
                        </div>
                        <div className='mb-3'>
                            <label className='form-check-label'>Employed</label>
                            <Field className='form-check-input ms-3' name='employed' component='input' type='checkbox'/>
                        </div>
                        <div className='mb-3'>
                            <label>Education</label>
                            <Field className='form-select form-select-sm mb-3' name='education' component='select'>
                                <option value="master">Master</option>
                                <option value="bachelor">Bachelor</option>
                                <option value="diploma">Diploma</option>
                            </Field>
                        </div>
                        <div className='mb-3'>
                            <label>Expertise</label>
                            <div>
                                <Field className='form-check-input ms-3' name='expertise' component='input' type='checkbox' value='html' /> HTML
                                <Field className='form-check-input ms-3' name='expertise' component='input' type='checkbox' value='css' /> CSS
                                <Field className='form-check-input ms-3' name='expertise' component='input' type='checkbox' value='javascript' /> Javascript
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label>Tech Stack</label>
                            <div>
                                <label>
                                    <Field className='form-check-input ms-3' name='techStack' component='input' type='radio' value='MERN' /> MERN
                                    <Field className='form-check-input ms-3' name='techStack' component='input' type='radio' value='MEVN' /> MEVN
                                    <Field className='form-check-input ms-3' name='techStack' component='input' type='radio' value='MEAN' /> MEAN
                                </label>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label>Notes</label>
                            <Field className='form-control mb-3' name='notes' component='input' type='textarea' />
                        </div>
                        <div className='mb-3'>
                            <button className='btn btn-success me-3' type="submit" disabled={submitting || pristine} data-bs-toggle="modal" data-bs-target="#dataModal">Submit</button>
                            <button className='btn btn-warning' type='button' onClick={form.reset} disabled={submitting || pristine}>Reset</button>
                        </div>
                        <pre className='border p-3 bg-body-secondary'>{JSON.stringify(values, null, 2)}</pre>

                        {/* Modal */}
                        <div className="modal fade" id="dataModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Result</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <pre>{JSON.stringify(values, null, 2)}</pre>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            />

        

        </div>
    )
}