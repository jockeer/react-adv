import { Form, Formik } from 'formik'
import { MySelect, MyTextInput } from '../components'
import formJSON from '../data/custom-form.json'
import * as Yup from 'yup';

const initialValues: { [ key:string ]:any } = {}

const requiredField: {[ key:string ]:any} = {}

for (const input of formJSON) {
    initialValues[ input.name ] = input.value

    if (!input.validations) continue
    let schema = Yup.string()
    for (const rule of input.validations) {
        if (rule.type ==='required') {
            schema = schema.required('Este campo es requerido')
        }
        if (rule.type === 'min') {
            schema = schema.min((rule as any).value || 1, `Minimo de ${(rule as any).value || 2} caracteres`)
        }
        if (rule.type === 'email') {
            schema = schema.email('El email no es valido')
        }
    }

    requiredField[input.name] = schema
}

const validationSchema = Yup.object({...requiredField})

export const DyamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>
        <Formik
            initialValues = { initialValues }
            onSubmit={(values)=>{
                console.log(values)
            }}
            validationSchema={validationSchema}
        >
            {
                (formik)=>(
                    <Form noValidate>
                        {
                            formJSON.map( ({type, name, placeholder,label, options}) => {
                                if (type === 'text' || type ==='password' || type==="email") {
                                    return <MyTextInput 
                                        key={name}
                                        type={(type as any)} 
                                        name={name} 
                                        label={label} 
                                        placeholder={placeholder} />
                                    
                                }else if( type ==='select'){
                                    return <MySelect 
                                        key={name} 
                                        label={label}
                                        name={name} 
                                        >
                                            <option value="">Select an option</option>
                                            {options?.map( opt => (
                                                <option key={opt.id} value={opt.id}>{opt.label}</option>
                                            ))}
                                        </MySelect>
                                }
                            })
                        }
                        

                        <button type='submit'>Submit</button>
                    </Form>
                )
            }

        </Formik>
    </div>
  )
}
